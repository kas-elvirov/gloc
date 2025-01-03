const fs = require('fs');
const envfile = require('envfile');

const package = require('../package.json');
const manifest = require('../manifest.json');

/**
 * Saved version of env file
 * VITE_APP_APP_VERSION=9.0.7
 * VITE_APP_TOKEN_CREATION_LINK=https://github.com/settings/tokens/new?scopes=repo&description=Github%20GLOC
 * VITE_APP_APPLICATION_REPO=https://github.com/kas-elvirov/gloc
 * VITE_APP_DEVELOPER_WEBSITE=https://kas-elvirov.com
*/

/**
 * Update .env
*/
const env = '.env';
let parsedEnv = envfile.parse(env);
parsedEnv.VITE_APP_APP_VERSION = package.version;
fs.writeFileSync('./.env', envfile.stringify(parsedEnv));

/**
 * Update .env.development
*/
const envDevelopment = '.env.development';
let parsedEnvDevelopment = envfile.parse(envDevelopment);
parsedEnvDevelopment.VITE_APP_APP_VERSION = package.version;
fs.writeFileSync('./.env.development', envfile.stringify(parsedEnvDevelopment));

/**
 * Update .env.production
*/
const envProduction = '.env.production';
let parsedEnvProduction = envfile.parse(envProduction);
parsedEnvProduction.VITE_APP_APP_VERSION = package.version;
fs.writeFileSync('./.env.production', envfile.stringify(parsedEnvProduction));

/**
 * Update manifest
*/
manifest.version = package.version;
fs.writeFileSync('./manifest.json', JSON.stringify(manifest, null, 4));
