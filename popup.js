document.addEventListener( 'DOMContentLoaded', function() {
    var checkPageButton = document.getElementById( 'check');


    checkPageButton.addEventListener( 'click', function() {

        var url;
        var result
        var partOfUrl;

        var expression = /(https)+[:]+[\//(\w+)]+(github.com)+[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;
        var exprForPartOfUrl = /(github.com)+[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;


        chrome.tabs.query( { 'active': true, 'lastFocusedWindow': true }, function ( tabs ) {
            url = tabs[0].url;

            result = url.match( expression ) ? true : false;

            partOfUrl = tabs[0].url.match( expression );
        });

        document.getElementById( 'counter' ).innerHTML = partOfUrl;

        //getLinesOfCode();

        function getLinesOfCode() {
            document.getElementById( 'counter' ).innerHTML = 'https://api.' + partOfUrl + '/stats/contributors';

            // Line counter
            fetch( 'https://api.' + partOfUrl + '/stats/contributors' )
                .then( response => response.json() )
                .then( contributors => contributors.map( contributor => contributor.weeks.reduce( ( lineCount, week ) => lineCount + week.a - week.d, 0) ) )
                .then( lineCounts => lineCounts.reduce( ( lineTotal, lineCount ) => lineTotal + lineCount) )
            //.then( lines => ( document.getElementById( 'counter' ).innerHTML = result ? lines : 'Something went wrong' ) );
                .then( lines => ( document.getElementById( 'counter' ).innerHTML = 'boom' ) );
        }
    }, false);
}, false);
