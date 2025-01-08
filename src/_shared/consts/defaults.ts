export const SYSTEM_DEFAULTS = {
  STORAGE: {
    /**
     * Is app working or not
     * - true - yes
     * - false - not yes
     */
    APP_MODE: {
      KEY: 'x-app-mode',
      DEFAULT_VALUE: false,
    },
    GITHUB_TOKEN: {
      KEY: 'x-github-token',
      DEFAULT_VALUE: '',
    },
  },
  DEBOUNCE: {
    300: 300,
  },
};
