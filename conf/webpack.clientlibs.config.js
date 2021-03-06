
var webpack = require('webpack');
var path = require('path');

var outputPath = path.resolve(__dirname, '..', 'dist', 'static');

module.exports = {
    entry: {
        clientlibs: [
            'react', 
            'react-dom', 
            'react-router-dom'
        ]
    },

    output: { 
        filename: '[name].js',
        path: outputPath,
        library: '[name]', 
    },
  
    plugins: [ 
        new webpack.DllPlugin({ 
            name: '[name]', 
            path: path.join(outputPath, '[name].json') 
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}