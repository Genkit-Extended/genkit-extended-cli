require("node-absolute-path");
const { GoogleGenerativeAIEmbeddings } = require("@langchain/google-genai");
const glob = require("glob");
const fs = require("fs");
const { CharacterTextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("langchain/vectorstores");
const { TaskType } = require("@google/generative-ai");

const { getAPIKey } = require('../../../utils');

const train = async (options) => {
  const { input, output } = options;
  const data = [];
  const files = await new Promise((resolve, reject) =>
    glob(input, (err, files) => (err ? reject(err) : resolve(files)))
  );

  for (const file of files) {
    data.push(fs.readFileSync(file, "utf-8"));
  }

  console.log(
    `Added ${files.length} files to data.  Splitting text into chunks...`
  );

  const textSplitter = new CharacterTextSplitter({
    chunkSize: 12720,
    separator: "\n",
  });

  let docs = [];
  for (const d of data) {
    const docOutput = textSplitter.splitText(d);
    docs = [...docs, ...docOutput];
  }

  console.log(docs.length);
  docs = docs.splice(docs.length - 4, 4);
  console.log(docs);

  console.log("Initializing Store...");

  const store = await HNSWLib.fromTexts(
    docs,
    docs.map((_, i) => ({ id: i })),
    new GoogleGenerativeAIEmbeddings({
      apiKey: getAPIKey(),
      model: "embedding-001",
      modelName: "Gemini Model embedding-001",
      taskType: TaskType.RETRIEVAL_DOCUMENT,
      title: "Gemini embedding-001",
    })
  );

  console.clear();
  console.log("Saving Vectorstore");

  store.save(output);

  console.clear();
  console.log(`VectorStore saved to ${output}`);
};

module.exports = {
  train,
};
