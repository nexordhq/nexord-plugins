const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    baseDir: __dirname,
    icon: "fa-solid fa-people-arrows",
    dbService: require("../db.service"),
});
