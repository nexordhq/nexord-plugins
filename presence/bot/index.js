const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    dependencies: [],
    ownerOnly: true,
    baseDir: __dirname,
});
