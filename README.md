## 微信小程序仿制一个知乎
## 前言
小程序到现在已经发展了几年了，几乎变成前端人员必备的知识。最近重温了微信小程序的文档，决定使用原生微信小程序语法写一个仿制知乎的项目练手，下面的教程分为两块，分别是：
* [微信小程序实战教程之1.基础知识](https://juejin.im/post/5cf9efaa51882526a42af5f3)。
* [微信小程序实战教程之2.仿制知乎项目](https://juejin.im/post/5cfb43306fb9a07eea3264a1)。

对微信小程序的目录结构、语法等基础知识还不了解的伙伴建议从1.基础知识看起。

## 准备工作
* CSS采用[SCSS](https://juejin.im/post/5cf488ea518825378867758f)编写，对SCSS不熟悉的同学也可以直接使用CSS编写样式。
* 布局采用[弹性布局](https://juejin.im/post/5cf7797ef265da1b7f296d0a) 。
* JS使用[ES6](https://juejin.im/post/5cfb7be76fb9a07eab6872f4)语法。
* 该项目主要写前端部分，所以不写后端接口，使用[MockJS](https://juejin.im/post/5cf726b5e51d454fbf5409bc)模拟后端接口返回数据。

下面的教程我主要讲代码结构与思路，不会无脑堆代码。使用面向对象的设计模式，通过ES6提供的类与模块概念，合理的组织/分离代码。

在看教程之前，可以先将我的项目下载下来放到微信开发者工具中运行，一边看源代码和效果一边看教程。
## 使用vscode开发微信小程序
使用什么IDE是开发者自己的选择，微信开发者工具使用起来总有一些不顺手，所以我使用我比较熟悉的vscode进行开发，顺便在这里给使用vscode的伙伴推荐几个实用插件：
* minapp

    提供微信小程序标签、属性的智能补全，同时会提供中文文档的智能提示。
* wechat-snippet

    提供微信小程序中代码的智能补全，可以作为上一个插件的补充
* wxml

    提供wxml文件的代码高亮以及格式化代码功能
* Live Sass Compiler

    提供scss文件转换为wxss文件的功能。这个插件默认是将scss文件转换为css文件，需要改为scss文件装换为wxss文件需要修改配置文件，在项目根目录中找到.vscode文件夹（没有的话直接创建一个），然后找到setting.json文件（没有的话创建一个），修改文件内容为：
    
```
{
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".wxss",
            "savePath": null
        }
    ]
}
```
## 效果

![目录](https://user-gold-cdn.xitu.io/2019/6/22/16b7fb4a134a567a?w=299&h=427&f=png&s=5006)

![展示1](https://user-gold-cdn.xitu.io/2019/6/22/16b7f7aabac412dc?w=402&h=716&f=gif&s=186240)

![展示2](https://user-gold-cdn.xitu.io/2019/6/22/16b7f7b68d5747d3?w=402&h=716&f=gif&s=3214931)
## 完整教程
* 微信小程序实战教程 [传送门](https://juejin.im/editor/posts/5d0e14a66fb9a07ed2247759)
* 微信小程序实战教程之1.基础知识 [传送门](https://juejin.im/post/5cf9efaa51882526a42af5f3)
* 微信小程序实战教程之2.仿制知乎项目 [传送门](https://juejin.im/post/5cfb43306fb9a07eea3264a1)
