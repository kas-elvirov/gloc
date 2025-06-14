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

/**
 * # Crashlytics logger
 */
export const logCrashlytics = (props: ICrashlyticsLoggerProps) => {
  const { eventName, data } = props;

  chrome.runtime.sendMessage({
    type: 'gloc_event',
    payload: {
      // eslint-disable-next-line camelcase
      event_name: eventName,
      data: {
        ...data,
        env: import.meta.env.MODE,
        version: import.meta.env.VITE_APP_APP_VERSION,
      },
    },
  });
};
