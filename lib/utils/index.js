require("node-absolute-path");

const { runProcess } = include("lib/utils/processUtils");
const { getAPIKey } = include("lib/utils/configurationUtils");

module.exports = {
  runProcess,
  getAPIKey,
};
