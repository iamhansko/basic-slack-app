# Basic Slack App

Basic Slack App using Slack Bolt (Javascript)

### Prerequisite
- [node.js](https://nodejs.org/en)
- Fill env file and change its name 
  - (Linux, MacOS) `.sample.env` -> `.env` 
  - (Windows) `sample.env.bat` -> `env.bat`

## Structure
```
.
├──  app.js
├──  package.json
├──  package-lock.json
├──  sample.env.bat
├──  sample.env
├──  Dockerfile
├──  LICENSE
├──  README.md
├──  public
└──  listeners
      ├── actions
      |    └── index.js
      ├── events
      |    └── index.js
      └── index.js
```

### Installation
```bash
npm install

# Linux, MacOS 
source .env

# Windows
call env.bat
```

### Dev Environment
```bash
npm start
```

### Prod Environment
```bash
docker build -t slack-app-docker-image .
docker run -d -p 9000:9000 slack-app-docker-image
```