const { BotPlugin } = require("nexord-sdk");

module.exports = new BotPlugin({
    dependencies: [],
    baseDir: __dirname,
    dbService: require("../db.service"),
});
