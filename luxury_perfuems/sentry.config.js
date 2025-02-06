const modileExports={
    //Your existing Next.js config here
};
const SentryWebpackPluginOptions ={
    silent: true, //suppersses all logs
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);