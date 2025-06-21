chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'gloc_event') {
    const payload = message.payload;

    console.log('[GLOC] ready to send an event to crashlytics', message);

    fetch(import.meta.env.VITE_APP_CRASHLYTICS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'event',
        payload: {
          data: payload.data,

          website: import.meta.env.VITE_APP_CRASHLYTICS_ID,
          /**
           * Because of snake_case
          */
          // eslint-disable-next-line camelcase
          event_name: payload.eventName,
          name: payload.eventName,
          hostname: payload.hostname,
          language: payload.language,
          referrer: payload.referrer,
          screen: payload.screen,
          title: payload.title,
          url: payload.pathname,
        },
      }),
    }).then(() => {
      console.log('[GLOC] Event sent to crashlytics service');
    }).catch(err => {
      console.error('[GLOC] Failed to send crashlytics service', err);
    });
  }
});
