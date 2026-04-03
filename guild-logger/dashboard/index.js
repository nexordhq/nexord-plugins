const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    baseDir: __dirname,
    adminRouter: require("./router"),
});
