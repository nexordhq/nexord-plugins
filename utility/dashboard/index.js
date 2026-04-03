const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    icon: "fa-solid fa-screwdriver-wrench",
    baseDir: __dirname,
    adminRouter: require("./router"),
});
