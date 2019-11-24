import { APP_CLASSNAME } from '../consts/index';
import { colors } from '../theme/colors';

import { getBgColorForLoc } from './getBgColorForLoc';

/*
* Returns badge container for LOC with LOC
* @param {number | string} lines - LOC | Error
* @return {html}
*/
export const renderBadge = (lines: string) => {
    const defaultRadiusSize = '4px';
    const paddingSize = '2px 6px';
    const fontSize = '14px';

    return (
        ` <div class='box' style='font-size: 0; font-family: Verdana;'>
                <span
                    style='
                        background-color: ${colors.mainGrey};
                        color: ${colors.mainWhite};
                        padding: ${paddingSize};
                        font-size: ${fontSize};
                        border-top-left-radius: ${defaultRadiusSize};
                        border-bottom-left-radius: ${defaultRadiusSize};
                    '
                >
                    ${chrome.i18n.getMessage('lines')}
                </span>
                <span
                    class='${APP_CLASSNAME}'
                    style='
                        background-color: ${getBgColorForLoc(lines)};
                        color: ${colors.mainWhite};
                        padding: ${paddingSize};
                        font-size: ${fontSize};
                        border-top-right-radius: ${defaultRadiusSize};
                        border-bottom-right-radius: ${defaultRadiusSize};
                    '
                >
                    ${lines}
                </span>
            </div> `
    );
};