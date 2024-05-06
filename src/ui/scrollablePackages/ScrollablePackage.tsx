// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import checked from '../../assets/images/checked.avif';

import styles from './ScrollablePackage.module.scss';

const ScrollablePackage = ({ data }: any) => {
  return (
    <div className={styles.item}>
      <div className={styles.paragraphWrapper}>
        <h1>{data.packageName}</h1>
        <p>$ {data.oldPrice} ONLY</p>
        <p>$ {data.currentPrice} ONLY</p>
        <span>{data.text}</span>
      </div>
      <div className={styles.parentContainer}>
        <div className={styles.scrollableContent}>
          {data.list.map((listItem: any) => {
            return (
              <div className={styles.checkPoint}>
                <div>
                  <img src={checked} alt="checked" />
                </div>
                <div>
                  <span>{listItem}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.orderNowBtn}>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default ScrollablePackage;
