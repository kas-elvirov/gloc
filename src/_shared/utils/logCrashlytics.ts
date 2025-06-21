import { detectBrowser } from 'src/_lib/utils/detectBrowser';

export interface ICrashlyticsLoggerProps {
  eventName:
    | 'gloc_widget_is_ready_to_mount'
    | 'loc_is_negative'
    | 'app_is_disabled'
    | 'something_happened'
    | 'visit'
    | 'visit'
    | 'user_action';

  data: {
    level: 'info' | 'warning' | 'error' | 'success';
    browser: ReturnType<typeof detectBrowser>;
    message: string;
    component: string;
    targetScript: 'background' | 'content' | 'popup' | 'options';
    url?: string;
    repository?: string;
    author?: string;
    loc?: number | string;
  };
}

export const DEFAULT_MESSAGE = 'unknown';

export const DEFAULT_MESSAGE_FOR = {
  EVENT_NAME: DEFAULT_MESSAGE,
  HOSTNAME: DEFAULT_MESSAGE,
  SCREEN: DEFAULT_MESSAGE,
  URL: DEFAULT_MESSAGE,
  LANGUAGE: DEFAULT_MESSAGE,
  REFERRER: DEFAULT_MESSAGE,
  TITLE: DEFAULT_MESSAGE,
};

/**
 * # Crashlytics logger
 */
export const logCrashlytics = (props: ICrashlyticsLoggerProps) => {
  const { eventName, data } = props;

  chrome.runtime.sendMessage({
    type: 'gloc_event',
    payload: {
      eventName: eventName || DEFAULT_MESSAGE_FOR.EVENT_NAME,
      data: {
        ...data,
        env: import.meta.env.MODE,
        version: import.meta.env.VITE_APP_APP_VERSION,
      },
      hostname: window?.location?.hostname || DEFAULT_MESSAGE_FOR.HOSTNAME,
      screen:
        `${window?.screen?.width}x${window?.screen?.height}` ||
        DEFAULT_MESSAGE_FOR.SCREEN,
      url: window?.location?.pathname || DEFAULT_MESSAGE_FOR.URL,
      language: navigator?.language || DEFAULT_MESSAGE_FOR.LANGUAGE,
      referrer: document?.referrer || DEFAULT_MESSAGE_FOR.REFERRER,
      title: document?.title || DEFAULT_MESSAGE_FOR.TITLE,
    },
  });
};
