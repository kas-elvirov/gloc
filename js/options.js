const validateToken = ( token ) => {
    var invalidToken;

    if ( typeof token !== 'string' ) {
        invalidToken = 'Access Token should be a String eg: be62d2235c80b8056h103e8ae03398db9d37d1a0';
    } else if ( token.length < 30 ) {
        invalidToken = 'Access Token length appears wrong!';
    } else {
        invalidToken = 'Token is valid';
    }

    if ( invalidToken ) {
        const validationBlock = document.getElementById( 'validation-block' );
        validationBlock.textContent = invalidToken;
    }
};

const saveOptions = () => {
    document.getElementById( 'save-button' ).setAttribute( 'disabled', 'disabled' );
    const token = document.getElementById( 'x-gloc-github-token' ).value;

    chrome.storage.sync.set( {'x-gloc-github-token': token}, function() {
        const statusText = document.getElementById( 'status-text' );
        statusText.textContent = 'Options saved!';
        validateToken( token );
    });
};

const showOptions = () => {
    chrome.storage.sync.get( {'x-gloc-github-token': ''}, function( storedOptions ) {
        const token = storedOptions['x-gloc-github-token'];
        document.getElementById( 'x-gloc-github-token' ).value = token;
        validateToken( token );
    });
};

document.addEventListener( 'DOMContentLoaded', showOptions );
document.getElementById( 'save-button' ).addEventListener( 'click', saveOptions );
