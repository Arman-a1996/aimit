// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import automotive from '../../../assets/images/automotive.png';
import banking from '../../../assets/images/banking.png';
import digital from '../../../assets/images/digital.png';
import eCommerce from '../../../assets/images/eCommerce.png';
import healtcare from '../../../assets/images/healtcare.png';
import hotel from '../../../assets/images/hotel.png';
import logistics from '../../../assets/images/logistics.png';

import styles from './Industries.module.scss';

const Industries = () => {
  return (
    <div className={styles.industriesWrapper} style={{ backgroundRepeat: 'no-repeat' }}>
      <div className={styles.industriesWrapperDark}>
        <div className={styles.heading}>
          <h1>Our Service Expands To A Plethora Of Industries</h1>
          <p>
            Web Expert llc development team specializes in coming up with innovative solutions for customers in a wide
            range of industries. Dedicated Website Designer assisting companies in the travel, hotel, education, and
            healthcare industries, among others...
          </p>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.firstImageWrapper}>
            <div>
              <img src={banking} alt="banking" />
            </div>
            <div>
              <img src={automotive} alt="automotive" />
            </div>
            <div>
              <img src={banking} alt="banking" />
            </div>
            <div>
              <img src={digital} alt="digital" />
            </div>
          </div>

          <div className={styles.secondImageWrapper}>
            <div>
              <img src={healtcare} alt="healtcare" />
            </div>
            <div>
              <img src={hotel} alt="hotel" />
            </div>
            <div>
              <img src={logistics} alt="logistics" />
            </div>
            <div>
              <img src={eCommerce} alt="eCommerce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
