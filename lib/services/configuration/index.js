const fs = require("fs");

const setAPIKey = ({ apiKey }) => {
  require("child_process").exec(`echo $(npm root -g)`, (_, stdout, __) => {
    const path = stdout.substring(0, stdout.length - 1);
    fs.writeFileSync(`${path}/genkit-extended-cli/data/API_KEY`, apiKey);
    console.log(`API Key ${apiKey} has been set successfully`);
  });
};

const getAPIKey = () => {
  require("child_process").exec(`echo $(npm root -g)`, (_, stdout, __) => {
    const path = stdout.substring(0, stdout.length - 1);
    const apiKey = fs.readFileSync(`${path}/genkit-extended-cli/data/API_KEY`);
    console.log(`API Key : ${apiKey}`);
  });
};

module.exports = { setAPIKey, getAPIKey };
