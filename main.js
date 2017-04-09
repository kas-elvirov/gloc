var main = function(){

    /**
     * File extensions which plugin counts
     *
     * https://www.file-extensions.org/filetype/extension/name/source-code-and-script-files
     */
    var acceptableExtensions = [ "as", "asm", "asp", "aspx",
                                "bash", "bat",
                                "c", "cbl", "cc", "cfc", "clj", "cs", "css", "cpp",
                                "dart", "d", "do", "dpr",
                                "el", "ejs",
                                "f90",
                                "gitignore",
                                "h", "hs", "hpp", "html",
                                "java", "js", "json", "jsp",
                                "lisp", "lua",
                                "m", "md", "mk",
                                "pas", "php", "pl", "prl", "pxd", "py", "pyx",
                                "r", "rb",
                                "s", "ss", "scala", "ser", "sh", "sql", "swift", "svg",
                                "ts",
                                "tmpl",
                                "vb",
                                "win",
                                "xml",
                                "yaml", "yml"
                               ];


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

            console.log( link.href + " " + String( loc ) );

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


    // parses only the code file out of [htmlStr] by writing it into shadow DOM
    // and querying for the element with the class "file"
    function get_code( htmlStr ) {

        var tempDiv = document.createElement( "div" );
        tempDiv.style.display = "none";
        var shadow = tempDiv.createShadowRoot();
        shadow.innerHTML = htmlStr;
        var file = shadow.querySelector( ".file" );
        console.log( file );
        var code = file.outerHTML;
        tempDiv.remove();

        return code;
    }

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


    function drawLinesOfCode() {

        var expression = /(https)+[:]+[\//(\w+)]+(github.com)+[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;
        var exprForPartOfUrl = /[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;

        currentURL = window.location.href;

        isGithubRepo = currentURL.match( expression ) ? true : false;

        if ( isGithubRepo ) {
            partOfUrl = currentURL.match( exprForPartOfUrl );

            var apiLink = 'https://api.github.com/repos' + partOfUrl + '/stats/code_frequency';

            fetch( apiLink )
                .then( x=> x.json())
                .then(
                document.getElementById( 'gloc' ) ?
                x=> document.getElementById( "gloc" ).innerHTML = "<span id='gloc' class='text-white state-open rounded-1 ml-2 px-1' style='background: linear-gradient( #E91E63, #00BCD4 ); color: #fff'>" +
                x.reduce( ( total,changes ) => total + changes[1] + changes[2], 0 ) + " lines of code</span>"
                :
                x=> document.getElementsByClassName( "public" )[0].innerHTML += "<span id='gloc' class='text-white state-open rounded-1 ml-2 px-1' style='background: linear-gradient( #E91E63, #00BCD4 ); color: #fff'>" +
                x.reduce( ( total,changes ) => total + changes[1] + changes[2], 0 ) + " lines of code</span>"


            );
        }
    }


    var fileLinks = document.getElementsByClassName( "js-navigation-open" );

    for ( var i = 0; i < fileLinks.length; i++ ) {

        var link = fileLinks[i];
        var title = link.title;

        if ( title === "" || typeof( title ) !== typeof( "str" ) ) continue;

        var fileExt = title.split( "." );

        fileExt = fileExt[fileExt.length - 1];

        if ( acceptableExtensions.indexOf( fileExt ) != -1 ) {
            getLocFromLink( link, fileExt );
        }
    }

    setInterval( function() {
    drawLinesOfCode();
    }, 300 );


};

main();