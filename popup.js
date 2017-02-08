document.addEventListener( 'DOMContentLoaded', function() {
    var checkPageButton = document.getElementById( 'check');


    checkPageButton.addEventListener( 'click', function() {

        var url;
        var result
        var partOfUrl;

        var expression = /(https)+[:]+[\//(\w+)]+(github.com)+[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;
        var exprForPartOfUrl = /[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;


        chrome.tabs.query( { 'active': true, 'lastFocusedWindow': true }, function ( tabs ) {
            url = tabs[0].url;

            result = url.match( expression ) ? true : false;
            partOfUrl = tabs[0].url.match( exprForPartOfUrl );

            getLinesOfCode( partOfUrl );

        });

        /* "https://api.github.com/repos/artem-solovev/artfolio" */

        function getLinesOfCode( link ) {
            var apiLink = 'https://api.github.com/repos' + link + '/stats/contributors';

            document.getElementById( 'counter' ).innerHTML = '...';
            document.getElementById( 'loading' ).style.display = 'block';



            fetch( apiLink )
                .then( response => response.json() )
                .then( contributors => contributors.map( contributor => contributor.weeks.reduce( ( lineCount, week ) => lineCount + week.a - week.d, 0) ) )
                .then( lineCounts => lineCounts.reduce( ( lineTotal, lineCount ) => lineTotal + lineCount) )
                .then( lines => ( document.getElementById( 'counter' ).innerHTML = lines ) )
                .then( setTimeout( function() { document.getElementById( 'loading' ).style.display = 'none' }, 2000) );

        }
    }, false);
}, false);
