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
  appVersion: import.meta.env.VITE_APP_APP_VERSION as string,
  paypalUrl: import.meta.env.VITE_APP_PAYPAL_URL as string,
  opencollectiveUrl: import.meta.env.VITE_APP_OPENCOLLECTIVE_URL as string,
};

export default appConfig;
