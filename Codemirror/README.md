## Install Codemirror

```
bower install codemirror --save
```

Edit bower.json file. Add overrides to load theme and mode files if you need.
```
"dependencies": {
    //...
    "codemirror": "^5.27.4"
  },
  
  "overrides": {
      //...
      "codemirror":{
        "main": [
          "lib/codemirror.js",
          "lib/codemirror.css",
          "theme/duotone-light.css",
          "mode/python/python.js"
        ]
      }
    },
```

In html, you can use code below to show a notebook.
```html
<div class="row">
    <div class="col-lg-1">
      <span style="font-size: large" class="pull-right">In [3]:</span>
    </div>
    <div class="col-lg-11">
      <textarea id="code"># import sys
sys.stdout.write('hello world\n')
sys.stdout.flush()
for i in range(3):
    sys.stdout.write('%s\n' % i)
    sys.stdout.flush()
sys.stderr.write('output to stderr\n')
sys.stderr.flush()
sys.stdout.write('some more stdout text\n')
sys.stdout.flush()</textarea>
    </div>
</div>
```

In Controller, use codemirror to init notebook
```js
angular.module('basic').controller('MainCtrl',['$scope', function ($scope) {
    let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      lineNumbers: true,
      smartIndent : true,
      tabSize : 2,
      mode: "python",
      theme: "duotone-light"
    });

}]);
```
