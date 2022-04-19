import React, { ReactNode, ReactElement, FC } from 'react';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[] | string | ReactElement | any;
}

export const Title: FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};
