<p align='center'>
    <a href='https://ectpack.github.io/api' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# babel-loader
📦 新语法的JS文件编译成指定版本JS的loader，导入的文本可以是js或者ts等，只是需要配置对应的babel插件

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@etcpack/babel-loader"><img src="https://img.shields.io/npm/dm/@etcpack/babel-loader.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@etcpack/babel-loader"><img src="https://img.shields.io/npm/v/@etcpack/babel-loader.svg" alt="Version"></a>
  <a href="https://github.com/etcpack/babel-loader/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@etcpack/babel-loader.svg" alt="License"></a>
  <a href="https://github.com/etcpack/babel-loader" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/etcpack/babel-loader?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/babel-loader/issues)！

## How to use?

```
npm install --save-dev @etcpack/babel-loader
```

然后在```etcpack.config.js```的```loader```配置项中添加，例如：

```js
loader: [{
    test: /\.js$/,
    handler: ['@etcpack/babel-loader']
}]
```

需要注意的是，此插件依赖```@babel/core```等插件，比如，为了转义js，你需要安装下列插件：

```js
"@babel/core": "^7.0.0"
"@babel/preset-env": "^7.0.0"
```

然后，在项目的根位置新增babel的配置文件```babel.config.js```，并在其中写入下面的内容：

```js
module.exports = {
    "presets": [["@babel/preset-env", {

        // 我不希望import这样的语句被转义
        "modules": false

    }]]
};
```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/babel-loader/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
