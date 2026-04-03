const { Logger } = require("nexord-sdk/utils");

module.exports = (message) => {
    Logger.warn(`Client Warning: ${message}`);
};
