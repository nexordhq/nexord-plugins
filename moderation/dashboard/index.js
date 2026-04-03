const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    icon: "fa-solid fa-user-shield",
    baseDir: __dirname,
    dashboardRouter: require("./router"),
    dbService: require("../db.service"),
});
