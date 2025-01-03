declare global {
  interface ImportMetaEnv {

    /**
     * # App version
    */
    VITE_APP_APP_VERSION: string;

    /**
     * # Link for token creation with name and some choices autocomplete
    */
    VITE_APP_TOKEN_CREATION_LINK: string;

    /**
     * # Link to repository for this app
    */
    VITE_APP_APPLICATION_REPO: string;

    /**
     * # Link developer of this app website
    */
    VITE_APP_DEVELOPER_WEBSITE: string;
  }
}

export { };
