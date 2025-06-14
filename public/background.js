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
          website: import.meta.env.VITE_APP_CRASHLYTICS_ID,
          event_name: payload.eventName,
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
