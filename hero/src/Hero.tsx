import React, { ReactNode } from 'react';
import * as styles from './Hero.styles';

interface Props {
  /**
   * Child node(s) of the button.
   */
  children?: ReactNode | ReactNode[] | string;
  /**
   * Url to image
   */
  image?: string;
}

export const Hero = ({ children, image }: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={image} />
      </div>
      <div className={styles.heroContent}>{children}</div>
    </section>
  );
};
