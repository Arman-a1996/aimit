// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import third from '../../../../assets/images/third.png';

import styles from './slideComponent.module.scss';

const ThirdSlide = ({ onClick, className }: any) => {
  return (
    <div className={styles.slideWrapper} onClick={onClick}>
      <div className={styles.slider}>
        <div className={className}>
          <div className={styles.wrapper}>
            <div className={styles.businessColumn}>
              <div>
                <h1>My website has been live, but it's taking forever to generate leads?</h1>
                <p>
                  Rose past oh shew roof is song neat. Do depend better praise do friend garden an wonder to. Intention
                  age nay otherwise but breakfast. Around garden beyond to extent by.
                </p>
              </div>
              <div className={styles.buttonWrapper}>
                <button>Consult Now</button>
                <button className={styles.scheduleButton}>Find solution</button>
              </div>
            </div>
            <div className={styles.slideColumn}>
              <img src={third} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlide;
