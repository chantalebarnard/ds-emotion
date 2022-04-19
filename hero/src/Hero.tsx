import React, { ReactNode, FC } from 'react';
import { Text } from '../../text';
import { Title } from '../../title';

interface Props {
  /**
   * The main title of hero image
   */
  heading: ReactNode | ReactNode[] | string;
  /**
   * The subheading of hero image
   */
  subHeading: ReactNode | ReactNode[] | string;

  /**
   * Child node(s) of the button.
   */
  children?: ReactNode | ReactNode[] | string;
  /**
   * Url to image
   */
  image?: string;
}

export const Hero: FC<Props> = ({ heading, subHeading, children, image }) => {
  return (
    <section>
      <div>
        <img src={image} />
      </div>
      <div>
        <Title>{heading}</Title>
        <Text>{subHeading}</Text>
        {children}
      </div>
    </section>
  );
};
