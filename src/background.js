chrome.runtime.onInstalled.addListener( function( details ) {
    if ( details.reason == 'install' ) {
        chrome.runtime.openOptionsPage();
    } else if ( details.reason == 'update' ) {
        let thisVersion = chrome.runtime.getManifest().version;
        let newFeatures = '\n - translated into German';
        let statusMsg = 'GitHub Gloc updated from ' + details.previousVersion + ' to ' + thisVersion + '.' + newFeatures;
        console.log( statusMsg );
    }
} );
