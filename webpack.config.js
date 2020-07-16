// const path = require('path')
// module.exports = {
//     mode: "production",
//     entry: './src/index.tsx',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     // Enable sourcemaps for debugging webpack's output.
//     devtool: "source-map",

//     resolve: {
//         // Add '.ts' and '.tsx' as resolvable extensions.
//         extensions: [".ts", ".tsx"]
//     },

//     module: {
//         rules: [{
//                 test: /\.ts(x?)$/,
//                 exclude: /node_modules/,
//                 use: [{
//                     loader: "ts-loader"
//                 }]
//             },
//             // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//             {
//                 enforce: "pre",
//                 test: /\.js$/,
//                 loader: "source-map-loader"
//             }
//         ]
//     },

//     // When importing a module whose path matches one of the following, just
//     // assume a corresponding global variable exists and use that instead.
//     // This is important because it allows us to avoid bundling all of our
//     // dependencies, which allows browsers to cache those libraries between builds.
//     // externals: {
//     //     "react": "React",
//     //     "react-dom": "ReactDOM"
//     // }
// };


const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
                loader: "url-loader?limit=100000"
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' })
    ]
}