(function() {
    const currentLang = navigator.language.toString().toLowerCase();
    const ruHref = 'https://optipic.io/ru/?my_coupon=P3xVsyOn9LtnHRRrUDwlt1jdr-6YT71x';
    const ruSrc = 'https://optipic.io/uploads/optipic-1.gif';

	const enHref = 'https://optipic.io/en/?my_coupon=P3xVsyOn9LtnHRRrUDwlt1jdr-6YT71x';
	const enSrc = 'https://optipic.io/uploads/optipic-1-en.gif';
	var href = '';
	var src = '';

	switch ( currentLang ) {
		case "ru-ru": href = ruHref; src = ruSrc; break;
		case "en-en": href = enHref; src = enSrc; break;
		default: href = enHref; src = enSrc;
    }

    document.getElementById( 'optipic' ).innerHTML = '<a href="' + href + '" target="_blank"><img src="' + src + '" width="100%" /></a>';
})();
