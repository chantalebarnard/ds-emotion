import React, { FC } from 'react';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
}

export const Title = ({ children }: Props) => {
  return <h1>{children}</h1>;
};
