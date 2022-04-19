import React, { ReactNode, FC } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

export const Text: FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};
