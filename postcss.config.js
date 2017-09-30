const supportedBrowsers = [
    "last 2 iOS versions",
    "last 1 Android version",
    "last 2 ChromeAndroid versions"
];

module.exports = {
    plugins: {
        'stylelint': {},
        'doiuse': {
            ignore: ['css-appearance'],
            browsers: supportedBrowsers
        },
        'postcss-cssnext': {
            browsers: supportedBrowsers
        },
        'postcss-inline-svg': {},
        'postcss-assets': {}
    }
};