/**
 * https://github.com/artem-solovev/gloc
 *
 * Licensed GPL-2.0 © Artem Solovev
 */

/**
 * Accepted abbreviations
 * - LOC - lines of code
 */

var githubToken;

chrome.storage.sync.get( {'x-github-token': ''}, ( result ) => {
    if ( result && result['x-github-token'] != null ) githubToken = result['x-github-token'];

    insertCounter();

    $( document ).on( 'pjax:complete', function () {
        insertCounter();
    } );
} );

function insertCounter() {
    const $reposMetaContent = $( '.repository-meta-content' );

    if ( $reposMetaContent.length !== 0) {
        $reposMetaContent.append(" <div class='box' style = 'font-size: 0; font-family: Verdana;'><span style = 'background-color: #555555; color: #fff; padding: 2px 6px; font-size: 14px;'>lines</span><span class='github-gloc' style = 'background-color: #44CC11; color: #fff; padding: 2px 6px; font-size: 14px;'></span></div> ");
        const $gloc = $('.github-gloc');

        var repo = location.pathname;
        
        repo = repo.endsWith( '/' ) ? repo.slice( 0, -1 ) : repo;
        
        getGloc( repo, 5 )
            .then( lines => $gloc.text( lines ))
            .catch( e => console.log( e ) );
    }

    $( '.repo-list h3 a' ).each( appendGloc );

    $( '#recommended-repositories-container' ).find( 'h3 a' ).each( appendGloc );
}

function appendGloc() {
    getGloc( $( this ).attr( 'href' ), 5 )
        .then( lines => $( this).append( "<div class='box' style = 'font-size: 0; font-family: Verdana;'><span style = 'background-color: #555555; color: #fff; padding: 2px 6px; font-size: 14px;'>lines</span><span class='github-gloc' style = 'background-color: #44CC11; color: #fff; padding: 2px 6px; font-size: 14px;'>" + lines + "</span></div>" ) )
        .catch( e => console.log( e ) );
}

function getGloc( repo, tries ) {

    if ( !repo ) {
        return Promise.reject( new Error( "No repositories !" ) );
    }

    if ( tries === 0 ) {
        return Promise.reject( new Error( "Too many requests to API !" ) );
    }

    var url = "https://api.github.com/repos" + repo + "/stats/code_frequency";

    if ( githubToken != null ) {
        url += "?access_token=" + githubToken;
    }

    console.log( 'MY URL ' + url );

    return fetch( url )
        .then( x => x.json() )
        .then( x => x.reduce( ( total, changes ) => total + changes[1] + changes[2], 0) )
        .catch( err => getGloc( repo, tries - 1 ) );
}


/**
 * Renders in DOM in front of the each of the acceptable file LOC
 */
const getLocForCurrentDir = () => {
    /**
     * File extensions which plugin counts
     *
     * https://www.file-extensions.org/filetype/extension/name/source-code-and-script-files
     */
    const acceptableExtensions = ['as', 'asm', 'asp', 'aspx',
        'bash', 'bat',
        'c', 'cbl', 'cc', 'cfc', 'clj', 'cs', 'css', 'cpp',
        'dart', 'd', 'do', 'dpr',
        'el', 'ejs',
        'f90',
        'gitignore',
        'h', 'hs', 'hpp', 'html', 'haml',
        'java', 'js', 'json', 'jsp', 'jade', 'jsx',
        'lisp', 'lua', 'less',
        'm', 'md', 'mk',
        'pas', 'php', 'pl', 'prl', 'pxd', 'py', 'pyx',
        'r', 'rb',
        's', 'ss', 'scala', 'ser', 'sh', 'sql', 'swift', 'svg', 'sass', 'scss',
        'ts',
        'tmpl', 'tpl', 'tsx',
        'vb',
        'win',
        'xml',
        'yaml', 'yml'];

    // Get links for files in current directory (swith them into array)
    const nodeList = document.querySelectorAll( 'tbody .js-navigation-open' );
    const fileLinks = Array.prototype.slice.call( nodeList );


    function addOrCreate( dictIn, keyIn, valueIn ) {

        if ( keyIn in dictIn ) {
            dictIn[keyIn] += valueIn;
        } else {
            dictIn[keyIn] = valueIn;
        }
    }

    /**
     * Mapping from file extension to lines of code
     */
    var extToCountMap = {};
    var linkToFileMap = {};


    function httpGetAsync( theUrl, callback ) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {
            if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
                callback( xmlHttp.responseText );
            }
        }

        xmlHttp.open( "GET", theUrl, true );
        xmlHttp.send( null );
    }


    /**
     * Gets lines of code from link
     */
    function getLocFromLink( link, fileExt ) {

        function callback( data ) {
            var loc = data.match( /\d+ lines/g );

            if ( !loc || loc.length == 0 ) {
                console.log( "File " + link + " too big to display lines of code" );

                return;
            }

            var loc = Number( loc[0].replace( "lines", "" ) );

            //console.log( link.href + " " + String( loc ) );

            addOrCreate( extToCountMap, fileExt, loc );

            getLinesOfCodeInCurrentDir();

            // idk why, but this appears to work better than just just setting link.innerHTML
            document.getElementById( link.id ).innerHTML = link.title + " <span style='color:#888'> " + loc + " lines</span>";

            linkToFileMap[link.href] = data;
        }

        httpGetAsync( link.href, callback );
    }

    function stringifyDict( dict ) {
        var strArr = [];

        var totalLoc = 0;

        for ( key in dict ) {
            strArr.push( key + " - " + String( dict[key] ) );
            totalLoc += dict[key];
            strArr.sort();
        }

        return totalLoc + "<br /> <span class='user-mention'>By extensions:</span><br /> &nbsp;"  + strArr.join( ",<br />&nbsp;"  );
    }

    var links = document.getElementsByClassName( "js-navigation-open" );

    var domId = "Gloc-counter";


    /**
     * Shows info about lines of code in current directory
     */
    function getLinesOfCodeInCurrentDir() {
        var commitTease = document.getElementsByClassName( "commit-tease" )[0];
        var locDisplay = document.getElementById( domId );

        if ( !locDisplay ) {
            var locDisplay = document.createElement( "div" );
            locDisplay.id = domId;
            commitTease.appendChild( locDisplay );
        }

        locDisplay.innerHTML = "<hr /><span class='user-mention'>Total lines in the current directory:</span> " + stringifyDict( extToCountMap );
    }

    /**
     * Retrieves file's extension
     * @param {object} link - <a> tag
     * @return {string}
     */
    const getExtension = ( link ) => {
        console.log( link );
        const title = link.title;
        const fileExt = title.split( '.' );

        return fileExt[fileExt.length - 1];
    };

    /**
     * Checks link's object
     * @param {object} link - <a> tag
     * @return {boolean}
     */
    const isAcceptableFile = ( link ) => {
        const fileExt = getExtension( link );
        const hasTitle = link.title !== '';
        const hasProperType = typeof( link.title ) === typeof( 'str' );
        const isAcceptableFile = acceptableExtensions.indexOf( fileExt ) != -1;

        return ( hasTitle || hasProperType ) && ( isAcceptableFile );
    };

    fileLinks.filter( ( link ) => {
        return isAcceptableFile( link );
    } ).map( ( link ) => {
        getLocFromLink( link, getExtension( link ) );
    } );
};

getLocForCurrentDir();
