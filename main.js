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
    var ext_to_count_map = {};
    var link_to_file_map = {};

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
    function getLocFromLink( link, file_ext ) {

        function callback( data ) {
            var loc = data.match( /\d+ lines/g );

            if ( !loc || loc.length == 0 ) {
                console.log( "File " + url + " too big to display lines of code" );

                return;
            }

            var loc = Number( loc[0].replace( "lines", "" ) );

            console.log( link.href + " " + String( loc ) );

            addOrCreate( ext_to_count_map, file_ext, loc );

            drawLocData();

            // idk why, but this appears to work better than just just setting link.innerHTML
            document.getElementById( link.id ).innerHTML = link.title + " <span style='color:#888'> " + loc + " lines</span>";

            link_to_file_map[link.href] = data;
        }

        httpGetAsync( link.href, callback );
    }

    function stringifyDict( dict ) {
        var str_arr = [];

        var totalLoc = 0;

        for ( key in dict ) {
            str_arr.push( key + " - " + String( dict[key] ) );
            totalLoc += dict[key];
            str_arr.sort();
        }

        return  totalLoc + "<br /> <span class='user-mention'>By extensions:</span><br /> &nbsp;"  + str_arr.join( ",<br />&nbsp;" );
    }

    var links = document.getElementsByClassName( "js-navigation-open" );

    // parses only the code file out of [htmlStr] by writing it into shadow DOM
    // and querying for the element with the class "file"
    function get_code( htmlStr ) {

        var temp_div = document.createElement( "div" );
        temp_div.style.display = "none";
        var shadow = temp_div.createShadowRoot();
        shadow.innerHTML = htmlStr;
        var file = shadow.querySelector( ".file" );
        console.log( file );
        var code = file.outerHTML;
        temp_div.remove();

        return code;
    }

    var display_id = "Gloc-counter";

    function drawLocData() {
        var commit_tease = document.getElementsByClassName( "commit-tease" )[0];
        var locDisplay = document.getElementById( display_id );

        if ( !locDisplay ) {
            var locDisplay = document.createElement( "div" );
            locDisplay.id = display_id;
            commit_tease.appendChild( locDisplay );
        }

        locDisplay.innerHTML = "<hr /><span class='user-mention'>Total lines in the current directory:</span> " + stringifyDict( ext_to_count_map );
    }

    var file_links = document.getElementsByClassName( "js-navigation-open" );

    for ( var i = 0; i < file_links.length; i++ ) {

        var link = file_links[i];
        var title = link.title;

        if ( title === "" || typeof( title ) !== typeof( "str" ) ) continue;

        var file_ext = title.split( "." );

        file_ext = file_ext[file_ext.length - 1];

        if ( acceptableExtensions.indexOf( file_ext ) != -1 ) {
            getLocFromLink( link, file_ext );
        }
    }
};

main();
