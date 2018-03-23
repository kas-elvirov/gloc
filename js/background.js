chrome.runtime.onInstalled.addListener( function( details ) {
    if ( details.reason == 'install' ) {
        chrome.runtime.openOptionsPage();
    } else if ( details.reason == 'update' ) {
        let thisVersion = chrome.runtime.getManifest().version;
        let statusMsg = 'Updated from ' + details.previousVersion + ' to ' + thisVersion + '.';
        console.log( statusMsg );
    }
} );
