const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    dependencies: [],
    baseDir: __dirname,

    onEnable: (client) => {
        client.giveawaysManager = require("./giveaway")(client);
    },
});
