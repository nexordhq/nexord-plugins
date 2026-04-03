const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    baseDir: __dirname,
    dbService: require("../db.service"),
});
