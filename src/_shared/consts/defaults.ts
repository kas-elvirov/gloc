export const SYSTEM_DEFAULTS = {
  STORAGE: {
    /**
     * Is app working or not
     * - true - yes
     * - false - not yes
     */
    APP_MODE: {
      KEY: 'x-app-mode',
      DEFAULT_VALUE: true,
    },
    GITHUB_TOKEN: {
      KEY: 'x-github-token',
      DEFAULT_VALUE: '',
    },
    EVENTS_STAT: {
      REQUESTS_STAT: 'getRepoCodeFrequency',
      KEY: 'x-events-stat',
      DEFAULT_VALUE: {},
    },
  },
  DEBOUNCE: {
    300: 300,
  },
};
