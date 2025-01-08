const fs = require('fs');
const envfile = require('envfile');

const package = require('../package.json');
const manifest = require('../manifest.json');

/**
 * Update .env
*/
const env = '.env';
let parsedEnv = envfile.parse(env);
parsedEnv.VITE_APP_APP_VERSION = package.version;
parsedEnv.VITE_APP_GITHUB_API_FREE_HOURLY_LIMIT = 60;
parsedEnv.VITE_APP_GITHUB_API_TOKENIZED_HOURLY_LIMIT = 5000;
parsedEnv.VITE_APP_TOKEN_CREATION_LINK = 'https://github.com/settings/tokens/new?scopes=repo&description=Github%20GLOC';
parsedEnv.VITE_APP_APPLICATION_REPO = 'https://github.com/kas-elvirov/gloc';
parsedEnv.VITE_APP_DEVELOPER_WEBSITE = 'https://kas-elvirov.com';
parsedEnv.VITE_APP_CHROME_EXTENSION_SETTINGS_LINK_BASE = 'chrome://extensions/?options=';
fs.writeFileSync('./.env', envfile.stringify(parsedEnv));

/**
 * Update .env.development
*/
const envDevelopment = '.env.development';
let parsedEnvDevelopment = envfile.parse(envDevelopment);
parsedEnvDevelopment.VITE_APP_APP_VERSION = package.version;
parsedEnvDevelopment.VITE_APP_GITHUB_API_FREE_HOURLY_LIMIT = 60;
parsedEnvDevelopment.VITE_APP_GITHUB_API_TOKENIZED_HOURLY_LIMIT = 5000;
parsedEnvDevelopment.VITE_APP_TOKEN_CREATION_LINK =
  'https://github.com/settings/tokens/new?scopes=repo&description=Github%20GLOC';
parsedEnvDevelopment.VITE_APP_APPLICATION_REPO = 'https://github.com/kas-elvirov/gloc';
parsedEnvDevelopment.VITE_APP_DEVELOPER_WEBSITE = 'https://kas-elvirov.com';
parsedEnvDevelopment.VITE_APP_CHROME_EXTENSION_SETTINGS_LINK_BASE = 'chrome://extensions/?options=';
fs.writeFileSync('./.env.development', envfile.stringify(parsedEnvDevelopment));

/**
 * Update .env.production
*/
const envProduction = '.env.production';
let parsedEnvProduction = envfile.parse(envProduction);
parsedEnvProduction.VITE_APP_APP_VERSION = package.version;
parsedEnvProduction.VITE_APP_GITHUB_API_FREE_HOURLY_LIMIT = 60;
parsedEnvProduction.VITE_APP_GITHUB_API_TOKENIZED_HOURLY_LIMIT = 5000;
parsedEnvProduction.VITE_APP_TOKEN_CREATION_LINK =
  'https://github.com/settings/tokens/new?scopes=repo&description=Github%20GLOC';
parsedEnvProduction.VITE_APP_APPLICATION_REPO = 'https://github.com/kas-elvirov/gloc';
parsedEnvProduction.VITE_APP_DEVELOPER_WEBSITE = 'https://kas-elvirov.com';
parsedEnvProduction.VITE_APP_CHROME_EXTENSION_SETTINGS_LINK_BASE = 'chrome://extensions/?options=';
fs.writeFileSync('./.env.production', envfile.stringify(parsedEnvProduction));

/**
 * Update manifest
*/
manifest.version = package.version;
fs.writeFileSync('./manifest.json', JSON.stringify(manifest, null, 4));
