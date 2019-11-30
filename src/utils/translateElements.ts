export const translateElements = (ids: string[]) => {
	ids.map(id => {
		const element = document.getElementById(id);

		if (element) {
			element.innerHTML = chrome.i18n.getMessage(id);
		}
	});
};
