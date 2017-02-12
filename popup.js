document.addEventListener( 'DOMContentLoaded', function() {
    var checkPageButton = document.getElementById( 'cnt-button');

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

            var projectName = partOfUrl.toString().split( "/" );
            document.getElementById( 'project-name' ).innerHTML = 'repository: ' + projectName[2];
            document.getElementById( 'project-author' ).innerHTML = 'author: ' + projectName[1];

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
            //.then( lines => ( document.getElementById( 'counter' ).innerHTML = lines ) )
                .then( lines => ( animateValue( "counter", 0, lines, 1000 ) ) )
                .then( setTimeout( function() { document.getElementById( 'loading' ).style.display = 'none' }, 2000) );

        }

        /**
         * Animated counter
         *
         * @param string id - id of the counter in the VIEW
         * @param int start - value of the beggining
         * @param int end - value of the end
         * @param int duration - interval between iterations
         *
         * author http://stackoverflow.com/a/16994725/5124009
         */
        function animateValue(id, start, end, duration) {
            // assumes integer values for start and end

            var obj = document.getElementById(id);
            var range = end - start;
            // no timer shorter than 50ms (not really visible any way)
            var minTimer = 50;
            // calc step time to show all interediate values
            var stepTime = Math.abs(Math.floor(duration / range));

            // never go below minTimer
            stepTime = Math.max(stepTime, minTimer);

            // get current time and calculate desired end time
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer;

            function run() {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - (remaining * range));
                obj.innerHTML = value;
                if (value == end) {
                    clearInterval(timer);
                }
            }

            timer = setInterval(run, stepTime);
            run();
        }



    }, false);
}, false);
