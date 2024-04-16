const runProcess = (processPath) => {
  const spawn = require("child_process").spawn;
  const spawnedProcess = spawn(`sh`, [processPath], {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  spawnedProcess.stdout?.on("data", function (data) {
    console.log(data.toString());
  });

  spawnedProcess.stderr?.on("data", function (data) {
    console.log(data.toString());
  });

  spawnedProcess.stdout?.pipe(process.stdout);

  spawnedProcess.on("exit", function (code) {
    console.log("" + code.toString());
  });
};

module.exports = {
  runProcess,
};
