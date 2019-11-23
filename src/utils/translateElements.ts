export const translateElements = (ids: string[]) => {
	ids.map(id => {
		const element = document.getElementById(id);
		element.innerHTML = chrome.i18n.getMessage(id);
	});
};
