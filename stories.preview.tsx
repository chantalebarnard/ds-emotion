import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from './all';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = { layout: 'centered' };
