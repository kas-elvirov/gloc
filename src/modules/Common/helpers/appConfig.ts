/* tslint:disable:indent */

interface AppConfig {
	/**
	 * base
	 */
	appVersion: string;

	/**
	 * payments
	 */
	paypalUrl: string;
	opencollectiveUrl: string;
}

const appConfig: AppConfig = {
	appVersion: process.env.APP_VERSION as string,
	paypalUrl: process.env.PAYPAL_URL as string,
	opencollectiveUrl: process.env.OPENCOLLECTIVE_URL as string,
};

export default appConfig;