require("node-absolute-path");

const { runProcess } = require('../utils/processUtils');

const installGenkit = () => {
  const processPath = `./lib/executables/install-genkit.sh`;
  console.log(`Installing Latest Genkit`);
  runProcess(processPath);
};

module.exports = {
  installGenkit,
};
