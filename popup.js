document.addEventListener( 'DOMContentLoaded', function() {
    var checkPageButton = document.getElementById( 'check');


    checkPageButton.addEventListener( 'click', function() {
        
        var url;


        chrome.tabs.query( { 'active': true, 'lastFocusedWindow': true }, function ( tabs ) {
           url = tabs[0].url;
        });

        getLinesOfCode();

        function getLinesOfCode() {
            // Line counter
            fetch( 'https://api.github.com/repos/artem-solovev/swap/stats/contributors' )
                .then( response => response.json() )
                .then( contributors => contributors.map( contributor => contributor.weeks.reduce( ( lineCount, week ) => lineCount + week.a - week.d, 0) ) )
                .then( lineCounts => lineCounts.reduce( ( lineTotal, lineCount ) => lineTotal + lineCount) )
            //.then( lines => ( document.getElementById( 'counter' ).innerHTML = lines ) );
                //.then( lines => ( document.getElementById( 'counter' ).innerHTML = window.location.href ) );
                .then( lines => ( document.getElementById( 'counter' ).innerHTML = url ) );
        }
    }, false);
}, false);
