> 从概念上，gulp和webpack不是一个层次的东西。但是在现在的前端项目中，他们承担的角色却越来越类似，打包，扰码，开发，调试，css处理等等。

[简书地址](http://www.jianshu.com/p/e92ecf788c4f)

Bower vs NPM
---
 对于处理JS依赖这一块，Bower通过wiredep把JS压缩到一个bundle里面，一般来说，不需要自己来处理依赖；wiredep也相当智能，可以通过分析bower_components里面需要添加到one_page入口的文件中。例如，Angular通过package.json中指定的main把需要的index.js放到html中，如下。

```json
{
  "name": "angular",
  "version": "1.5.11",
  "description": "HTML enhanced for web apps",
  "main": "index.js",
  ...
}
```

```html
<!-- build:js(.) scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/angular/angular.js"></script>
...
<!-- endbower -->
<!-- endbuild -->
```

从某种意义上，bower的这种做法更加简单和便捷，省去的程序员处理依赖的过程。但是Bower本身的能力受限，在[Why we should stop using Bower](https://gofore.com/stop-using-bower/)一文中，提到了bower遇到的一些问题。
1.  Bower不支持嵌套依赖。
2.  Bower本身的冗余性。
3.  Bower的不可靠性。

个人认为，bower本身是有很多问题，例如，bower的publish是任何人都可以发布，没有验证正确性。也可能是因为NPM的后继这Yarn的包管理工具的推出，更多的开发者更愿意在npm/yarn上进行开发。总之，现在的大趋势更趋向于支持npm。

Webpack
---

![webpack.png](http://upload-images.jianshu.io/upload_images/4623363-308c0f8b8d628f8f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 可以通过https://github.com/lishan/OCProject/tree/master/Webpack下载完整例子。

为了用后台的声明依赖的方式进行前端开发，使用webpack来进行打包将是大势所趋。以下是在爬坑中遇到的一些问题。

1. Webpack Config可否支持es6?

使用webpack.config.babel.js代替webpack.config.js即可，这个和gulpfile.babel.js的方式类似。

2. Webpack使用打包文件，如何debug?

Webpack提供一个参数`devtool = 'inline-source-map'`，表示在浏览器上查看的时候是单独的文件所在行，一般应用于dev环境中。

3. Webpack作为一个standalone cli有哪些配置项？

如下是例子项目中提供的一些命令，使用`npm run build`之类的可以运行提供的功能。
--progress 显示进度
--profile 显示build时间
--bail 遇到第一个错误时退出

```json
"scripts": {
    "build": "webpack --bail --progress --profile --config webpack/webpack.prod.babel.js",
    "start": "npm run server",
    "server": "babel-node server/app.js",
    "prod": "webpack-dev-server --inline --content-base ./dist --config webpack/webpack.prod.babel.js"
  },
```

4. 如何直接用node运行es6程序？

可以通过babel-node代替node命令。

5. 常用的Webpack plugin?

通过Webpack plugin可以做gulp plugin类似的工作，所以在引言中提到他们的作用已经越来越相似。

```
new HtmlWebpackPlugin({ //生成入口的html文件，可以通过模板生成，支持ejs, handlebars语法
    template: './app/index.html'
    }),
new ExtractTextPlugin("styles.css")//抽取style-loader中的到单独文件
new CleanWebpackPlugin(['dist']),//删除一个文件夹
new CopyWebpackPlugin([{ //拷贝一些文件
    from: path.resolve(__dirname, '..', 'app', '404.html')
}]),
new UglifyJSPlugin() //JS压缩
```

6. Webpack-dev-server vs webpack-dev-middleware?

这两个扮演的是gulp中一般使用一个express上部署工程。相同的是，他们生成的文件目录都是放在内存中的，不会像运行webpack生成dist目录。

webpack-dev-middleware可以和express结合，我们在示例中采用这样的方式，在express上我们可以配置我们的RESTAPI层。和以前的项目类似。

7. Angular的Controller例子？

给出一段示例代码，需要注意的是$scope这样的注入项必须采用这种AMD方式，否则在uglify中会有Unknow provider的错误。

```js
import angular from 'angular';

export default angular.module('basic').controller('MainCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}]);
```
