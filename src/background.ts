chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install') {
		chrome.runtime.openOptionsPage();
	}
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo?.status === 'complete') {
		const url = new URL(tab?.url ?? '');

		if (url.hostname === 'github.com') {
			chrome.tabs.sendMessage(tabId, {
				message: 'gloc-extension-page-update',
			});
		}
	}
});
