const { DashboardPlugin } = require("nexord-sdk");

module.exports = new DashboardPlugin({
    ownerOnly: true,
    baseDir: __dirname,
    adminRouter: require("./router"),
});
