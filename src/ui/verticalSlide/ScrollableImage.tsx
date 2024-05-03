import React from 'react';

import styles from './ScrollableImage.module.scss';

const ScrollableImage = ({ src, alt = '' }: any) => {
  return (
    <div className="item">
      <div className={styles.parentContainer}>
        <a>
          <img src={src} alt={alt} className={styles.Image} />
        </a>
      </div>
    </div>
  );
};

export default ScrollableImage;
