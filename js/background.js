chrome.runtime.onInstalled.addListener( function( details ) {

    if ( details.reason == "install" ) {
        chrome.runtime.openOptionsPage();
    } else if ( details.reason == "update" ) {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log( "Updated from " + details.previousVersion + " to " + thisVersion + "." );
    }
} );
