import { FC } from 'react';

import { Box, LinearProgress, Typography } from '@mui/material';

import { LinearProgressWithLabelProps } from './LinearProgressWithLabel.types';

export const LinearProgressWithLabel: FC<
  LinearProgressWithLabelProps
> = props => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant='determinate'
          {...props}
          color={props.value < 100 ? 'primary' : 'error'}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};
