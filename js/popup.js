chrome.storage.sync.get( 'githubToken', function( result ) {
    let githubToken = '';

    if ( result && result.githubToken != null ) githubToken = result.githubToken;

    document.getElementById( 'githubToken' ).value = githubToken;

    document.getElementById( 'save' ).onclick = function() {
        if ( !document.getElementById( 'githubToken' ).value) {
            alert( 'Personal access token required.' );
            return;
        }

        let token = {};
        token['githubToken'] = document.getElementById( 'githubToken' ).value;

        chrome.storage.sync.set( token, function() {
            alert('Personal access token saved.');
        } );
    };
} );
