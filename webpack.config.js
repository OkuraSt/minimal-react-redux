/*
 * el archivo de configracion de webpack exporta un objeto con la
 * configuracion. Defino la  entrada y la salida.
 *
 * */
var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./bundle.js",
        sourceMapFilename: "./bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                query: {
                    plugins: [
                        "transform-runtime",
                        "transform-decorators-legacy"
                    ],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('./app'),
        extenstitons: ['', '.js']
    }
}
