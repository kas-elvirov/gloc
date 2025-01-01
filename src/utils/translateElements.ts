export const translateElements = (ids: string[]): void => {
  ids.forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      element.innerHTML = chrome.i18n.getMessage(id);
    }
  });
};
