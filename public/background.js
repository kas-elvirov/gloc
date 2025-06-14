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
          event_name: payload.eventName,
          website: import.meta.env.VITE_APP_CRASHLYTICS_ID,
          hostname: window.location.hostname,
          language: navigator.language,
          referrer: document.referrer,
          screen: `${window.screen.width}x${window.screen.height}`,
          title: document.title,
          url: window.location.pathname,
          name: 'event-name',
          data: payload.data,
        },
      }),
    }).then(() => {
      console.log('[GLOC] Event sent to crashlytics service');
    }).catch(err => {
      console.error('[GLOC] Failed to send crashlytics service', err);
    });
  }
});
