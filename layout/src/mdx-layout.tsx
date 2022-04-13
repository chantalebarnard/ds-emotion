import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CssLayout } from '@divriots/dockit-react/mdx-layout-css';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../all';

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={{ ...components }}>
      <CssLayout
        logo={
          <img
            style={{ height: '40px' }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Loblaws.svg/2880px-Loblaws.svg.png"
          />
        }
        {...rest}
      />
    </MDXProvider>
  </ThemeProvider>
);
