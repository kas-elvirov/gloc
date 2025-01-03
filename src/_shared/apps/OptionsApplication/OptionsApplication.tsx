import { FC } from 'react';

import { OptionsPage } from '../../../_modules/Options/components/OptionsPage/OptionsPage';
import { AppWrapper } from '../../../_shared/containers/AppWrapper/AppWrapper';

/**
 * # Application for options page
 */
export const OptionsApplication: FC = () => {
  return (
    <AppWrapper>
      <OptionsPage />
    </AppWrapper>
  );
};
