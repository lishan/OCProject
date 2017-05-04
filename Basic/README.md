## Data new born

## Install

Node version: v6.9.1

Bower version: 1.8.0

Gulp version: CLI version 1.2.2

At first, run `npm install` and `bower install` to install 3rd packages.

## Configuration

The default config file is in server/config.js. Change env to "prod" to run zipped js file.

```
"use strict";
module.exports = {
  dev: {
    dist: 'app',
    port: 8900
  },
  prod: {
    dist: 'dist',
    port: 9000
  },
  env: "dev"
};
```

## Start

Use `gulp serve` to start express server.

Use `gulp` to build static dist directory.

Use `gulp war` to build a war package.
