import { FC } from 'react';

import { PopupPage } from '../../../_modules/Popup/components/PopupPage/PopupPage';
import { AppWrapper } from '../../../_shared/containers/AppWrapper/AppWrapper';

/**
 * # Application for popup page
 */
export const PopupApplication: FC = () => {
  return (
    <AppWrapper>
      <PopupPage />
    </AppWrapper>
  );
};
