const path = require('path'); //built in node module called path


module.exports = {
    entry: './src/js/index.js', //entry point
    output: {
        path: path.resolve(__dirname, 'dist/js'), //__dirname directly name with where to put the bundle
        filename: 'bundle.js' //filename
    },
};