const path = require('path'); //built in node module called path
const HTMLWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: './src/js/index.js', //entry point
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname directly name with where to put the bundle
        filename: 'js/bundle.js' //filename
    },
    devServer: {
        contentBase: './dist/' // ./dist folder will be where live preview will come from 
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ] //creates a final index.html with bundle.js scripted to it in dist using pluggin.
    

   
};