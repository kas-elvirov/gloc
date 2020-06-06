const fs = require('fs');
const envfile = require('envfile');

const package = require('../package.json');
const manifest = require('../manifest.json');

// update .env file
const sourcePath = '.env'
let parsedFile = envfile.parse(sourcePath);
parsedFile.APP_VERSION = package.version;
fs.writeFileSync('./.env', envfile.stringify(parsedFile));

// update manifest
manifest.version = package.version;
fs.writeFileSync('./manifest.json', JSON.stringify(manifest, null, 4));

// TODO update readme