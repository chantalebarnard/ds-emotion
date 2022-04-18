import React, { ReactNode, FC } from 'react';
import { Text } from '../../text';
import { Title } from '../../title';
import * as styles from './Hero.styles';

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
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={image} />
      </div>
      <div className={styles.heroContent}>
        <Title>{heading}</Title>
        <Text>{subHeading}</Text>
        {children}
      </div>
    </section>
  );
};
