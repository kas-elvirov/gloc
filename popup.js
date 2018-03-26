document.getElementById( 'settings-button' ).addEventListener( 'click', function() {
    chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
});
