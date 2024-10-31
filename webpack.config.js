import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { requiredFilePaths } from './jsFileEntries.js';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
export default {
    mode: 'production',
    entry: requiredFilePaths,
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ],
    },
    target: 'web',
    resolve: {
        extensions: ['.js'],
        fallback: {
            // Setting all fallbacks to false to avoid including any polyfills
            path: false,
            fs: false,
            crypto: false,
            stream: false,
            http: false,
            https: false,
            zlib: false,
            os: false,
            url: false,
            util: false,
            querystring: false,
            string_decoder: false
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Apply this rule to CSS files
                exclude: /node_modules/, // Exclude node_modules directory
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // Turns CSS into CommonJS,

                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './dist'),
        clean: true,
    },
    externals: {
        'nodemailer': 'commonjs nodemailer',
        'buffer': 'buffer',
        'async_hooks': 'async_hooks',
        'net': 'net'
    },
}