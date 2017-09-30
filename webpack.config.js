"use strict";

let PATH = require('path');

/* browserlist configuration (https://github.com/ai/browserslist) */
const supportedBrowsers = null;

module.exports = {

    // Entrypoint; the starting point of the tree of modules to resolve and 
    // bundle. Relative to context.
    entry: './src/archery/main.js',

    // output configuration; the path and the resulting filename
    output: {
        path: PATH.resolve(__dirname, 'out', 'debug'),
        filename: 'bundle.js'
    },

    // Teach webpack to resolve files with the following extensions. note that
    // the star string is important
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },

    devServer: {
        proxy: {
            "/api": "http://localhost:5000"
        }
    },

    module: {
        rules: [
            // Configures webpack to run the files matching 'test' and 'include'
            // through babel transformations
            {
                test: /\.js.?$/,
                include: /src/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // Tell webpack how to load CSS files
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1} },
                    'postcss-loader'
                ]
            },
            // Enable image loader
            {
                test: /\.svg$/,
                use: [ 'babel-loader',
                    {
                        loader: 'react-svg-loader',
                        query: {
                            svgo: {
                                plugins: [
                                    // Turn off ALL plugins because the SVGs are being run through svgo-loader first.
                                    // When react-svg-loader is updated to use svgo 7.x, we can change this to only the ones we care about.
                                    { removeDoctype: false },
                                    { removeXMLProcInst: false },
                                    { removeComments: false },
                                    { removeMetadata: false },
                                    { removeXMLNS: false },
                                    { removeEditorsNSData: false },
                                    { cleanupAttrs: false },
                                    { minifyStyles: false },
                                    { convertStyleToAttrs: false },
                                    { cleanupIDs: false },
                                    { removeRasterImages: false },
                                    { removeUselessDefs: false },
                                    { cleanupNumericValues: false },
                                    { cleanupListOfValues: false },
                                    { convertColors: false },
                                    { removeUnknownsAndDefaults: false },
                                    { removeNonInheritableGroupAttrs: false },
                                    { removeUselessStrokeAndFill: false },
                                    { removeViewBox: false },
                                    { cleanupEnableBackground: false },
                                    { removeHiddenElems: false },
                                    { removeEmptyText: false },
                                    { convertShapeToPath: false },
                                    { moveElemsAttrsToGroup: false },
                                    { moveGroupAttrsToElems: false },
                                    { collapseGroups: false },
                                    { convertPathData: false },
                                    { convertTransform: false },
                                    { removeEmptyAttrs: false },
                                    { removeEmptyContainers: false },
                                    { mergePaths: false },
                                    { removeUnusedNS: false },
                                    { transformsWithOnePath: false },
                                    { sortAttrs: false },
                                    { removeTitle: false },
                                    { removeDesc: false },
                                    { removeDimensions: false },
                                    { removeAttrs: false },
                                    { removeElementsByAttr: false },
                                    { addClassesToSVGElement: false },
                                    { removeStyleElement: false },
                                    { addAttributesToSVGElement: false }
                                ]
                            }
                        }
                    },
                    // Run through svgo-loader first because react-svg-loader is using an old version of svgo.
                    // When react-svg-loader is updated to svgo 7.x, this can be removed.
                    {
                        loader: 'svgo-loader',
                        query: {
                            plugins: [
                                { removeXMLNS: true },
                                { cleanupIDs: { minify: false } }
                            ]
                        }
                    }
                ],
            },
            // Enable loading JSON files
            {
                test: /\.json?$/,
                use: [ "json-loader" ]
            },
            {
                // convert all pngs to data urls
                test: /\.png$/,
                loader: "url-loader"
            }
        ]
    }
};
