$(function() {
    var article;

    function Gallary() {
        this.init();
    }

    Gallary.prototype = {
        init: function() {
            var that = this;

            this.loaded = {}
            this.loadIndex = 0;
            this.index = -1; // 当前显示第几个
            this.zIndex = 1; // 当前显示层级

            this.$box = $('#gallary');
            this.$num = this.$box.find('.num');
            this.$loading = this.$box.find('.loading');
            this.$list = this.$box.find('.items');

            this.items = [];

            $('#article').find('img').each(function(index, el) {
                var src = $(el).attr('src');
                that.addItem(src);
                $(el).click(function(event) {
                    that.showItem(index);
                    return false;
                });
            });

            this.$list.on('swipeleft', function() {
                var i = (that.index + 1);
                if (i > that.items.length - 1) return false;
                that.showItem(i);
                return false;
            });

            this.$list.on('swiperight', function() {
                var i = (that.index - 1);
                if (i < 0) return false;
                that.showItemReverse(i);
                return false;
            });

            this.$box.find('.close').click(function() {
                that.hide();
            });
        },
        hide: function() {
            this.$list.children('li').hide();
            this.$box.hide();
        },
        addItem: function(src) {
            var $item = $('<li class="item"> <img src="'+ src +'" alt="" /> </li>'),
                that = this;

            this.items.push({
                src: src,
                $el: $item,
                index: that.items.length
            });

            this.$list.append($item);
        },
        loadImg: function(src, callback) {
            var image,
                that = this,
                size = {};

            if (that.loaded[src]) {
                callback(that.loaded[src]);
                return that.loaded[src];
            }

            image = new Image();
            image.onload = function() {
                size.width = image.width,
                size.height = image.height;
                image.onload = null;
                that.loaded[src] = size;
                callback(size);
            }
            image.src = src;
        },
        showItem: function(i) {
            var that = this,
                item = that.items[i],
                lastItem,
                src = item.src,
                loadIndex = (++that.loadIndex);

            if (that.index == i) return;

            that.$box.show();
            that.$num.text((i + 1) + '/' + that.items.length);
            if (that.index != -1){
                lastItem = that.items[that.index];
                lastItem.$el
                .stop(true, true)
                .animate({
                    left: '-100%'
                });
            }

            item.$el
            .stop(true, true)
            .css({
                left: '100%'
            })
            .show()
            .animate({
                left: 0
            });

            that.index = i;

            that.$loading.show();
            that.loadImg(src, function(size) {
                if (that.loadIndex != loadIndex) return;
                item.size = size;
                that.$loading.hide();                
                that.displayItem(item);
            }); 
        },
        showItemReverse: function(i) {
            var that = this,
                item = that.items[i],
                lastItem,
                src = item.src,
                loadIndex = (++that.loadIndex);

            if (that.index == i) return;

            that.$box.show();
            that.$num.text((i + 1) + '/' + that.items.length);
            if (that.index != -1){
                lastItem = that.items[that.index];
                lastItem.$el
                .stop(true, true)
                .animate({
                    left: '100%'
                });
            }

            item.$el
            .stop(true, true)
            .css({
                left: '-100%'
            })
            .show()
            .animate({
                left: 0
            });

            that.index = i;

            that.$loading.show();
            that.loadImg(src, function(size) {
                if (that.loadIndex != loadIndex) return;
                item.size = size;
                that.$loading.hide();                
                that.displayItem(item);
            }); 
        },
        displayItem: function(item) {
            var $el = item.$el,
                that = this;

            that.resetImgSize(item);
        },
        resetImgSize: function(item) {
            var $el = item.$el,
                $img = $el.find('img'),
                w = $el.width(),
                h = $el.height(),
                size = item.size,
                width, height, scale;

            scale = Math.min(w / size.width, h / size.height);

            item.position = {
                pw: w,
                ph: h,
                width: size.width * scale,
                height: size.height * scale,
                left: (w - size.width * scale) / 2,
                top: (h- size.height * scale) / 2
            };

            $img.css({
                position: 'absolute',
                width: item.position.width,
                height: item.position.height,
                left: item.position.left,
                top: item.position.top,
            });
        }
    }

    function optimizeContent(str) {
        var content;

        // article 
        content = str.replace(/href=(['|"])(article::.+?)\1/ig, function(word) {
            var str = arguments[2];

            str = str.split('::')[1];
            str = './index.html?article=' + encodeURIComponent(str);
    
            return 'href="'+ str +'"';
        });

        // image 
        content = content.replace(/src=(['|"])(image::.+?)\1/ig, function(word) {
            var str = arguments[2];

            str = str.split('::')[1];
    
            return 'src="'+ str +'"';
        });

        
        return content;
    }

    function getArticlePath() {
        var arr = location.href.split('?'),
            params = {};

        if (arr.length <= 1) return 'article-list.md';

        arr = arr[1].split('&');
        $.each(arr, function(index, val) {
            var arr2 = val.split('=');
            params[arr2[0]] = arr2[1];
        });

        return decodeURIComponent(params['article'] || 'article-list.md');
    }

    function getArticle(path, callback) {
        var url = './' + path + '?_v=' + new Date() * 1;

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'text'
        })
        .done(function(res) {
            callback(res);
        })
        .fail(function() {
            alert('获取数据失败！');
        });
    }
    
    article = getArticlePath();
    getArticle(article, function(str) {
        var html = marked(str),
            navs = '';

        $('#article').html(optimizeContent(html));

        $('#article').find('h1,h2,h3,h4,h5,h6').each(function(index, el) {
            var tagName = el.tagName,
                i = tagName.charAt(1);

            $(el).attr('id', 'h-' + index);
            navs += '<li><h'+ i +'><a title="'+ $(el).html() +'" href="#h-'+ index +'">'+ $(el).html() +'</a></h'+ i +'></li>';
        });

        $('#nav').html(navs);

        new Gallary();
    });

    $('#nav-ctrl').click(function(event) {
        var $btn = $(this),
            s = $btn.data('s');

        if (s == 1) {
            $btn.data('s', 0);
            // $btn.text('≡');
            $('#nav-box').stop(true).fadeOut();
        } else {
            $btn.data('s', 1);
            // $btn.text('>');
            $('#nav-box').stop(true).fadeIn();
        }
    });

    $('#nav-box .back').click(function(event) {
        $('#nav-ctrl').trigger('click');
        history.back();
    });

    $('#nav-box .home').click(function(event) {
        $('#nav-ctrl').trigger('click');
        location.href = './index.html';
    });

    $('#nav').on('click', 'a', function(event) {
        $('#nav-ctrl').trigger('click');
    });
});