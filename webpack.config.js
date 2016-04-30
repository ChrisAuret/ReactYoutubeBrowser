var HtmlWebpackPlugin  = require('html-webpack-plugin');
var HTMLWebpackPluginConfig  = new HtmlWebpackPlugin ({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/styles/style.css',
        './app/index.js',
        
    ],
    output: {
        path: __dirname,
        filename: 'index_bundle.js'
    },
    module:{
        loaders:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
            { test: /\.css$/, exclude: /node_modules/, loader: "style!css" }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]  
}