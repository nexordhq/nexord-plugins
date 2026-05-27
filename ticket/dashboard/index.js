const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    icon: "fa-solid fa-ticket",
    baseDir: __dirname,
    dashboardRouter: require("./router"),
});
