import React, { ReactNode, FC } from 'react';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children: ReactNode | ReactNode[];
}

export const Text: FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};
