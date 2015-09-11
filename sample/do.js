var marked = require('marked');
var juice = require('juice');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

var basePath = process.cwd();
var fromPath = path.join(basePath, './');
var toPath = path.join(basePath, './build/');
var template = path.join(basePath, './template/index.html');

glob('/**/*.md', {
    nodir: true,
    root: fromPath,
    ignore: '/**/node_modules/**'
}, function (err, files) {
    files.forEach(function(filename) {
        article(filename);
    });
})

function article(filename) {
    var destFilename = path.join(toPath, path.relative(fromPath, filename));
    var dir = path.dirname(destFilename);
    var name = path.basename(destFilename, '.md');

    mkdirsSync(dir);

    var data = fs.readFileSync(filename, "utf-8");
    var html = marked(data);

    // replace links
    html = html.replace(/(['"])\s*article::([\w\/]+).md\s*\1/ig, '"./$2.html"');

    // replace img
    html = html.replace(/(['"])\s*image::(.*?)\1/ig, function(word, $1, $2) {
        var imgPath = path.join(fromPath, $2);
        var ext = path.extname(imgPath);
        var dataUrl = '';

        try {
            var imageBuf = fs.readFileSync(imgPath);
            dataUrl = imageBuf.toString("base64");
            dataUrl = 'data:image/'+ ext.replace(/^./, '') +';base64,' + dataUrl;
        } catch (e) {
            //
        }
        
        return '"' + dataUrl + '"';
    });
    
    var title = html.replace(/^[\s\S]*?<\s*h1\s*[^>]*?>([\s\S]*?)<\/\s*h1\s*>[\s\S]*$/i, '$1');
    console.log(title);
    templateData = fs.readFileSync(template).toString();
    templateData = templateData.replace(/\{\{title\}\}/, title);
    templateData = templateData.replace(/\{\{article\}\}/, html);
    templateData = juice(templateData);

    fs.writeFileSync(path.join(dir, name + '.html'), templateData, "utf-8");
}

function mkdirsSync(dirname) {
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}