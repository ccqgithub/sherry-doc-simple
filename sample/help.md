文档使用帮助
====

## 1. 查看文档

使用浏览器打开`index.html`即可。

对于chrome浏览器，由于安全性限制，会提示获取数据失败。

解决办法：

1.  1)换浏览器：firefox等

2.  2)给chrome加上启动参数：--allow-file-access-from-files 

    右击chrome快捷方式 -> 属性 -> 目标，在后面加上 --allow-file-access-from-files 即可。见下图：

    ![图片名](image::image/1.jpg)


## 2. 编写文档

*   \- 所有文档文件存放在 article 目录下
*   \- 所有图片存放在 image 目录下
*   \- 所有文件存储为 .md 文件。 采用[markdow语法](http://wowubuntu.com/markdown/#blockquote)    
    \- 具体可以参考 **模板文件** 和 **已有的文档文件**
*   \- 插入本地文章链接: `[文档模板](article::template.md)`
*   \- 插入本地图片: `![图片名](image::image/prd-wismart/2.jpg)`
*   \- 编写完之后按 第一步 查看效果

