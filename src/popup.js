( function() {
    document.getElementById( 'settings-button' ).addEventListener( 'click', function() {
        chrome.tabs.create({url: 'chrome://extensions/?options=' + chrome.runtime.id});
    });

    let addToken = document.getElementById( 'addToken' );
    addToken.innerHTML = chrome.i18n.getMessage( 'addToken' );

    let github = document.getElementById( 'github' );
    github.innerHTML = chrome.i18n.getMessage( 'github' );

    let shortName = document.getElementById( 'shortName' );
    shortName.innerHTML = chrome.i18n.getMessage( 'shortName' );

    let indexWorksOnly = document.getElementById( 'indexWorksOnly' );
    indexWorksOnly.innerHTML = chrome.i18n.getMessage( 'indexWorksOnly' );

    let indexCountsFrom = document.getElementById( 'indexCountsFrom' );
    indexCountsFrom.innerHTML = chrome.i18n.getMessage( 'indexCountsFrom' );

    let indexProjectPage = document.getElementById( 'indexProjectPage' );
    indexProjectPage.innerHTML = chrome.i18n.getMessage( 'indexProjectPage' );

    let indexUserPage = document.getElementById( 'indexUserPage' );
    indexUserPage.innerHTML = chrome.i18n.getMessage( 'indexUserPage' );

    let indexSearchPage = document.getElementById( 'indexSearchPage' );
    indexSearchPage.innerHTML = chrome.i18n.getMessage( 'indexSearchPage' );

    let indexTrandingPage = document.getElementById( 'indexTrandingPage' );
    indexTrandingPage.innerHTML = chrome.i18n.getMessage( 'indexTrandingPage' );

    let indexEtc = document.getElementById( 'indexEtc' );
    indexEtc.innerHTML = chrome.i18n.getMessage( 'indexEtc' );

    let attentionPlease = document.getElementById( 'attentionPlease' );
    attentionPlease.innerHTML = chrome.i18n.getMessage( 'attentionPlease' );

    let translateOurApp = document.getElementById( 'translateOurApp' );
    translateOurApp.innerHTML = chrome.i18n.getMessage( 'translateOurApp' );
})();
