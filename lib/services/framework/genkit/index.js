require("node-absolute-path");

const { runProcess } = require('../../../utils');

const install = () => {
  const processPath = `./lib/executables/install-genkit.sh`;
  console.log(`Installing Latest Genkit`);
  runProcess(processPath);
};

module.exports = {
  install,
};
