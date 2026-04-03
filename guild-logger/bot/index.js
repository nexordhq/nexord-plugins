const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    baseDir: __dirname,
    dependencies: [],
    ownerOnly: true,
    dbService: require("../db.service"),

    onEnable: async (_client) => {},

    onDisable: async () => {},
});
