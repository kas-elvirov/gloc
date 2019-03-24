chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install') {
		chrome.runtime.openOptionsPage();
	} else if (details.reason === 'update') {
		const thisVersion = chrome.runtime.getManifest().version;
		const newFeatures = '\n - small fixes \n - moved into TypeScript';
		const statusMsg = `GitHub Gloc updated from ${details.previousVersion} to ${thisVersion}.
			${newFeatures}`;

		console.info(statusMsg);
	}
});
