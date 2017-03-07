document.addEventListener( 'DOMContentLoaded', function() {
    var checkPageButton = document.getElementById( 'cnt-button');


    checkPageButton.addEventListener( 'click', function() {
        var currentURL;
        var isGithubRepo;
        var partOfUrl;

        var expression = /(https)+[:]+[\//(\w+)]+(github.com)+[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;
        var exprForPartOfUrl = /[\/]+([A-Za-z0-9-_])+[\/]+([A-Za-z0-9-_])+/igm;


        chrome.tabs.query( { 'active': true, 'lastFocusedWindow': true }, function ( tabs ) {
            currentURL = tabs[0].url;

            isGithubRepo = currentURL.match( expression ) ? true : false;

            if ( isGithubRepo ) {
                partOfUrl = tabs[0].url.match( exprForPartOfUrl );

                var projectName = partOfUrl.toString().split( "/" );

                var urlWithProjectInfo = 'https://api.github.com/repos/' + projectName[1] + '/' + projectName[2];

                fetch( urlWithProjectInfo ).then( function( response ) {
                    return response.json();
                }).then(function( response ) {

                    if ( undefined === response.full_name ) {
                        document.getElementById( 'project-info' ).innerHTML = errWrongPage();
                    } else {
                        document.getElementById( 'project-info' ).innerHTML = '~/' + response.full_name;
                    }
                });

                drawLinesOfCodeByUrl( partOfUrl, "counter" );
            } else {
                document.getElementById('project-info').innerHTML = errWrongPage();
            }
        });


        /**
         * Draw lines of code in needed place
         *
         * @param string link - part of the url in format ( /username/repos )
         * @param string id - element's id ( where to insert info about lines of code )
         */
        function drawLinesOfCodeByUrl( link, id ) {
            var apiLink = 'https://api.github.com/repos' + link + '/stats/code_frequency';

            document.getElementById( id ).innerHTML = '...';
            displayElementById( 'loading', 'block' );

            fetch( apiLink ) 
                .then( x=> x.json())
                .then( x=> animateValue( id, 0,  parseInt( x.reduce( ( total,changes ) => total + changes[1] + changes[2], 0 ) ), 1000 ) )
                .then( setTimeout( function() {
                displayElementById( 'loading', 'none' );
            }, 980 ) );
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
        function animateValue( id, start, end, duration ) {
            // assumes integer values for start and end
            var obj = document.getElementById( id );

            var range = end - start;

            // no timer shorter than 50ms (not really visible any way)
            var minTimer = 50;

            // calc step time to show all interediate values
            var stepTime = Math.abs( Math.floor( duration / range ) );

            // never go below minTimer
            stepTime = Math.max( stepTime, minTimer );

            // get current time and calculate desired end time
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer;

            function run() {
                var now = new Date().getTime();
                var remaining = Math.max( ( endTime - now ) / duration, 0 );
                var value = Math.round( end - ( remaining * range ) );
                obj.innerHTML = value;

                if ( value == end ) {
                    clearInterval( timer );
                }
            }

            timer = setInterval(run, stepTime);
            run();
        }


        /**
         * Returns error text about Wrong page
         *
         * @return string(html) - text about Wrong page
         */
        function errWrongPage() {
            return '<span class="error-text"><br />Oops ^_^<br />Wrong page. Try this later.</span>';
        }


        /**
         * Shows or hides element by ID
         *
         * @param string id - element's id
         * @param string display - display property
         */
        function displayElementById( id, display ) {
            document.getElementById( id ).style.display = display;
        }
    }, false);
}, false);
