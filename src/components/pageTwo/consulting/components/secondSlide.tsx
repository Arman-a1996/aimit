// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import second from '../../../../assets/images/second.png';

import styles from './slideComponent.module.scss';

const SecondSlide = ({ onClick, className }: any) => {
  return (
    <div className={styles.slideWrapper} onClick={onClick}>
      <div className={styles.slider}>
        <div className={className}>
          <div className={styles.wrapper}>
            <div className={styles.businessColumn}>
              <div>
                <h1>My website has been live, but it's taking forever to generate leads?</h1>
                <p>
                  Are own design entire former get should. Advantages boisterous day excellence boy. Out between our two
                  waiting wishing.
                </p>
              </div>
              <div className={styles.buttonWrapper}>
                <button>Consult Now</button>
                <button className={styles.scheduleButton}>Find solution</button>
              </div>
            </div>
            <div className={styles.slideColumn}>
              <img src={second} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
