/* tslint:disable:indent */

interface AppConfig {
	/**
	 * base url
	 */
	appVersion?: string;
}

const appConfig: AppConfig = {
	appVersion: process.env.APP_VERSION,
};

export default appConfig;