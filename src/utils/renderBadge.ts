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
	const fontSize = '12px';

	const commonStyles = `
        padding: ${paddingSize};
        font-size: ${fontSize};
        font-weight: 500;
    `;

	return (
		` <div
            class='box'
            style='font-size: 0;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
            display: inline-flex';
        >
                <span
                    style='
                        ${commonStyles}
                        background-color: ${colors.grey700};
                        color: ${colors.mainWhite};
                        border-top-left-radius: ${defaultRadiusSize};
                        border-bottom-left-radius: ${defaultRadiusSize};
                    '
                >
                    ${chrome.i18n.getMessage('lines')}
                </span>
                <span
                    class='${APP_CLASSNAME}'
                    style='
                        ${commonStyles}
                        background-color: ${getBgColorForLoc(lines)};
                        color: ${colors.mainWhite};
                        border-top-right-radius: ${defaultRadiusSize};
                        border-bottom-right-radius: ${defaultRadiusSize};
                    '
                >
                    ${lines}
                </span>
            </div> `
	);
};