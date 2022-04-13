import React, { FC } from 'react';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
}

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};
