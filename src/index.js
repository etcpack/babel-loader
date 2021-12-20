const nodejs = require('@hai2007/nodejs');

module.exports = function (source) {
    if (/node_modules/.test(this.filepath)) return source;

    // 获取@babel/core和配置文件的地址
    let babelCoreUrl = nodejs.fullPath('node_modules/@babel/core', process.cwd());
    let babelConfigUrl = nodejs.fullPath('./babel.config.js', process.cwd());

    // 读取
    const babelCore = require(babelCoreUrl);
    const babelConfig = require(babelConfigUrl);

    return babelCore.transformSync(source, babelConfig).code;
};
