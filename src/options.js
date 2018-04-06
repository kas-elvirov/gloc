const validateToken = ( token ) => {
    var invalidToken;

    if ( typeof token !== 'string' ) {
        invalidToken = chrome.i18n.getMessage( 'optionsTokenMustbeString' ) + ': be62d2235c80b8056h103e8ae03398db9d37d1a0';
    } else if ( token.length < 30 ) {
        invalidToken = chrome.i18n.getMessage( 'optionsTokenWrongLength' );
    } else {
        invalidToken = chrome.i18n.getMessage( 'optionsTokenWalid' );
    }

    if ( invalidToken ) {
        const validationBlock = document.getElementById( 'validation-block' );
        validationBlock.textContent = invalidToken;
    }
};

const saveOptions = () => {
    document.getElementById( 'save-button' ).setAttribute( 'disabled', 'disabled' );
    const token = document.getElementById( 'x-gloc-github-token' ).value;

    chrome.storage.sync.set( {'x-github-token': token}, function() {
        const statusText = document.getElementById( 'status-text' );
        statusText.textContent = chrome.i18n.getMessage( 'optionsSaved' );
        validateToken( token );
    });
};

const showOptions = () => {
    chrome.storage.sync.get( {'x-github-token': ''}, function( storedOptions ) {
        const token = storedOptions['x-github-token'];
        document.getElementById( 'x-gloc-github-token' ).value = token;
        validateToken( token );
    });
};

let optionsTitle = document.getElementById( 'optionsTitle' );
optionsTitle.textContent = chrome.i18n.getMessage( 'optionsTitle' );

let github = document.getElementById( 'github' );
github.textContent = chrome.i18n.getMessage( 'github' );

let shortName = document.getElementById( 'shortName' );
shortName.textContent = chrome.i18n.getMessage( 'shortName' );

let optionsUlDescription = document.getElementById( 'optionsUlDescription' );
optionsUlDescription.textContent = chrome.i18n.getMessage( 'optionsUlDescription' );

let optionsAccess = document.getElementById( 'optionsAccess' );
optionsAccess.textContent = chrome.i18n.getMessage( 'optionsAccess' );

let optionsLimits = document.getElementById( 'optionsLimits' );
optionsLimits.textContent = chrome.i18n.getMessage( 'optionsLimits' );

let optionsInputToken = document.getElementById( 'x-gloc-github-token' );
optionsInputToken.placeholder = chrome.i18n.getMessage( 'optionsInputToken' );

let optionsSaveButton = document.getElementById( 'save-button' );
optionsSaveButton.value = chrome.i18n.getMessage( 'optionsSaveButton' );

let optionsCreateToken = document.getElementById( 'optionsCreateToken' );
optionsCreateToken.textContent = chrome.i18n.getMessage( 'optionsCreateToken' );

document.addEventListener( 'DOMContentLoaded', showOptions );
document.getElementById( 'save-button' ).addEventListener( 'click', saveOptions );
