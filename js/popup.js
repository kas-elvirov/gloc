chrome.storage.sync.get( 'githubToken', function ( result ) {
    var githubToken = "";

    if ( result && result.githubToken != null ) githubToken = result.githubToken;

    document.getElementById( 'githubToken' ).value = githubToken;

    document.getElementById( 'save' ).onclick = function () {
        if ( !document.getElementById( 'githubToken' ).value) {
            alert( 'Personal access token required.' );
            
            return;
        }

        chrome.storage.sync.set( { 'githubToken' : document.getElementById( 'githubToken' ).value }, function () {

            alert('Personal access token saved.');
        } );
    };
} );