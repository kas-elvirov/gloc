var mainJS = document.createElement( 'script' );
var popupJS = document.createElement( 'script' );


mainJS.src = chrome.extension.getURL( 'main.js' );
popupJS.src = chrome.extension.getURL( 'popup.js' );

mainJS.onload = function() {
    this.parentNode.removeChild( this );
};

popupJS.onload = function() {
    this.parentNode.removeChild( this );
};

( document.head || document.documentElement ).appendChild( mainJS );
( document.head || document.documentElement ).appendChild( popupJS );
