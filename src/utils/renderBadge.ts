import { APP_CLASSNAME } from '../consts/index';
import { getBgColorForLoc } from './getBgColorForLoc';

/*
* Returns badge container for LOC with LOC
* @param {number | string} lines - LOC | Error
* @return {html}
*/
export const renderBadge = (lines: string) => {
   return (
       ` <div class='box' style='font-size: 0; font-family: Verdana;'>
               <span
                   style='background-color: #555555; color: #fff; padding: 2px 6px; font-size: 14px;'
               >
                   ${chrome.i18n.getMessage('lines')}
               </span>
               <span
                   class='${APP_CLASSNAME}'
                   style='background-color: ${getBgColorForLoc(lines)}; color: #fff; padding: 2px 6px; font-size: 14px;'
               >
                   ${lines}
               </span>
           </div> `
   );
};