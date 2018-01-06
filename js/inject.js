var githubToken;

chrome.storage.sync.get( 'githubToken', function ( result ) {
    if ( result && result.githubToken != null ) githubToken = result.githubToken;

    insertCounter();

    $( document ).on( 'pjax:complete', function () {
        insertCounter();
    } );
} );

function insertCounter() {
    const $reposMetaContent = $( '.repository-meta-content' );

    if ( $reposMetaContent.length !== 0) {
        $reposMetaContent.append("<span class='github-gloc' style='background: #282e34; color: #fff'></span>");
        const $gloc = $('.github-gloc');

        getGloc( location.pathname, 5 )
            .then( lines => $gloc.text( lines + " lines of code"))
            .catch( e => console.log( e ) );
    }

    $( '.repo-list h3 a' ).each( appendGloc );

    $( '#recommended-repositories-container' ).find( 'h3 a' ).each( appendGloc );
}

function appendGloc() {
    getGloc( $( this ).attr( 'href' ), 5 )
        .then( lines => $( this).append( "<span style='background: #282e34; color: #fff'>(" + lines + " lines of code)</span>" ) )
        .catch( e => console.log( e ) );
}

function getGloc( repo, tries ) {

    if ( !repo ) {
        return Promise.reject( new Error( "No repositories !" ) );
    }

    if ( tries === 0 ) {
        return Promise.reject( new Error( "Too many requests to API !" ) );
    }

    let url = "https://api.github.com/repos" + repo + "/stats/code_frequency";

    if ( githubToken != null ) {
        url += "?access_token=" + githubToken;
    }

    return fetch( url )
        .then( x => x.json() )
        .then( x => x.reduce( ( total, changes ) => total + changes[1] + changes[2], 0) )
        .catch( err => getGloc( repo, tries - 1 ) );
}



