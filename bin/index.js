#!/usr/bin/env node

require("node-absolute-path");

const program = require("commander");

const { install } = include("lib/services/framework/genkit");
const { train } = include("lib/services/model/hnsw");
const { setAPIKey, getAPIKey } = include("lib/services/configuration");

program
  .command("install genkit")
  .description("Install Genkit CLI")
  .action(() => {
    install();
  });

program
  .command("train")
  .option("-p, --input <folder-path>", "Trainable input data path")
  .option("-o, --output <folder-path>", "Trainable output data path")
  .description("Train data to HNSW Vector Database")
  .action((options) => {
    train(options);
  });

program
  .command("set")
  .option("-k, --api-key <your-api-key>", "API key path")
  .description("Set an API Key")
  .action((options) => {
    setAPIKey(options);
  });

program
  .command("get api-key")
  .description("Get an API Key")
  .action(() => {
    getAPIKey();
  });

program.parse(process.argv);
