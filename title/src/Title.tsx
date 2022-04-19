import React, { ReactNode, ReactElement } from 'react';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[] | string | ReactElement | any;
}

export const Title = ({ children }: Props) => {
  return <h1>{children}</h1>;
};
