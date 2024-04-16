# Genkit Extended CLI

A CLI for more utilities needed with Genkit AI Firebase.

Contribution is welcome.

---

# Upcoming features
- Vector Store HNSW RAG Training
- Prompt optimization management
- Vector Store model deployment and management

# Installation

    $ npm install -g genkit-extended-cli

# Usage
## Install Genkit

    $ genx install genkit

## Data Training

    $ genx train --path="train/*" --output="train/output-model"

This will add knowledges for RAG based on all text resources within the specified folder

## Command Help

    $ genkit-extended --help

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install -g npm

---