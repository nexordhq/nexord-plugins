const { Logger } = require("nexord-sdk/utils");

module.exports = (error) => {
    Logger.error("Client Error", error);
};
