> 组件版本: 
> PhantomJS 2.1.1
> Karma v1.7.0
> Jasmine 2.6.0


![Jasmine.png](http://upload-images.jianshu.io/upload_images/4623363-820835a93ca98a5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[示例代码的github地址](https://github.com/lishan/OCProject/tree/master/TestFramework)
[简书地址](http://www.jianshu.com/p/f5c5c911cc8b)

## 单元测试（Jasmine + Karma）
 
Jasmine是一个主流的javascript端测试框架，类似于JUnit之类的框架，支持的功能也类似。Karma是一个Test Runner，可以让测试代码运行在浏览器沙盒里面用来测试其正确性。

下面是一个karma的配置文件中的部分内容，Files是Karma中需要加载的内容，类似于三方的依赖，代码程序和测试程序。Framework填Jasmine框架。Browsers包括主流浏览器和PhantomJS。

>  Phantomjs是一个编程用的浏览器，它没有浏览器页面，但是可以作为浏览器容器交互，很多爬虫程序和测试程序依赖于Phantomjs.

> Warning: Phantomjs Karma的launcher用的是2.1.1的版本，这个版本的Phantomjs不支持es6语法，可能需要Babel编码成es5才能使用。

```js
files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/jquery-ui/jquery-ui.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      //...
      'app/build-scripts/**/*.js',
      'build-tests/spec/**/*.js'
    ],
frameworks: ['jasmine'],
browsers: ['Chrome', 'PhantomJS'],
```

这里给出单元测试的gulp例子。
```js
gulp.task('test', ['es6'] , function (cb) {
    return new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, cb).start();
});
```

## 端到端测试

> 由于我们的项目是基于Angularjs的，在这里Protractor主要支持AngularJS中的端到端的测试.

这里需要打包一个seleniumServer, 给出相应的jar包地址。

```js
'use strict';

exports.config = {
  seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar',
  framework: 'jasmine',
  specs: ['build-tests/e2e/*-spec.js'],
  capabilities: {
    'browserName': 'chrome',
  },
  jasmineNodeOpts: {
    showColors: true
  },
};
```

由于默认的protractor需要手动执行webdriver update的这样的程序来下载selenium依赖，由于我们需要的gulp任务中下载，提供一个gulp的任务如下。另外，这里用gulp来同步执行任务，当所有测试执行结束的时候自动关闭Web Server。

```js
gulp.task('webdriver-update', function (cb) {
    $.protractor.webdriver_update({
        webdriverManagerArgs: ['--ignore_ssl']
    }, cb);
});

gulp.task('webserver', ['es6'], function () {
    $.connect.server({
        root: 'app',
        port: 8001
    });
});

gulp.task('e2e:tests', ['webdriver-update', 'webserver'], function (cb) {
    gulp.src([]).pipe($.protractor.protractor({
        configFile: "protractor.conf.js",
    })).on('error', function (e) {
        throw e;
    }).on('end', cb);
});

gulp.task('e2e', ['e2e:tests'], function (){
    $.connect.serverClose();
});
```

## 小结
请访问[github地址](https://github.com/lishan/OCProject/tree/master/TestFramework)来获取完整的例子。
