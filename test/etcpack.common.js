module.exports = {

    // 打包入口
    entry: './src/main.js',

    // 打包出口
    output: 'build/main.js',

    redirect: {},

    loader: [{
        test: /\.(js|ts)$/,
        handler: ['../src/index.js']
    }]
};
