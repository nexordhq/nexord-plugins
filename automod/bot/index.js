const { BotPlugin } = require("nexord-sdk");
const { cleanupCache } = require("./utils");

module.exports = new BotPlugin({
    baseDir: __dirname,

    onEnable: (_client) => {
        cleanupCache();
    },
});
