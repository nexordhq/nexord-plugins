const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    baseDir: __dirname,
    dependencies: [],
    ownerOnly: true,

    onEnable: async (_client) => {},

    onDisable: async () => {},
});
