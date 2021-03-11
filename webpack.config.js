// node的核心模块 path
const path = require('path');
// 模板 html 插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 打包之前先清除
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// vue-loader 插件
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    // 打包入口
    entry: './src/main.js',
    // 打包出口
    output:{
        // filename:'[contenthash].index.js',
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'./',
    },
    // source-map
    devtool: 'inline-source-map',
    // 服务
    devServer: {
        contentBase:'./dist', // 指定服务的根目录
        open: true  // 是否自动打开
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'src'),
            'vue': 'vue/dist/vue.js'
        }
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: '基于node.js + webpack + vue 搭建前端项目',
            filename: 'index.html', // 打包后的名字
            template:'./public/index.html', // html 模板的地址
        }),
        new VueLoaderPlugin()
    ]
}