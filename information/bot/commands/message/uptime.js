const { MiscUtils } = require("nexord-sdk/utils");

/**
 * @type {import('nexord-sdk').CommandType}
 */
module.exports = {
    name: "uptime",
    description: "information:BOT.SUB_UPTIME_DESC",
    botPermissions: ["EmbedLinks"],
    command: {
        enabled: true,
    },

    async messageRun({ message }) {
        await message.replyT("information:BOT.UPTIME", {
            time: MiscUtils.timeformat(process.uptime()),
        });
    },
};
