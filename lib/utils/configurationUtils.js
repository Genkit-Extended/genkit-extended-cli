const fs = require("fs");

const getAPIKey = () => {
  const dir = __dirname.split("/");
  dir.pop();
  dir.pop();
  dir.push("data");
  const apiKeyPath = dir.join("/");
  const apiKey = fs.readFileSync(`${apiKeyPath}/API_KEY`).toString();
  return apiKey;
};

module.exports = { getAPIKey };
