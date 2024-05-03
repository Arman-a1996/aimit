import React from 'react';

import styles from './Card.module.scss';

const Card = ({ data }: any) => {
  return (
    <div className={styles.item}>
      <div className={styles.paragraphWrapper}>
        <img src={data.img} alt={data.img} />
        <h1>{data.title}</h1>
        <div>
          <span>{data.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
