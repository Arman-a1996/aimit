import styles from './Industries.module.scss';

const Industries = () => {
  return (
    <div
      className={styles.industriesWrapper}
      style={{ backgroundImage: `url('/assets/images/office.jpeg')`, backgroundRepeat: 'no-repeat' }}
    >
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
              <img src="/assets/images/banking.png" alt="banking" />
            </div>
            <div>
              <img src="/assets/images/automotive.png" alt="automotive" />
            </div>
            <div>
              <img src="/assets/images/banking.png" alt="banking" />
            </div>
            <div>
              <img src="/assets/images/digital.png" alt="digital" />
            </div>
          </div>

          <div className={styles.secondImageWrapper}>
            <div>
              <img src="/assets/images/healtcare.png" alt="healtcare" />
            </div>
            <div>
              <img src="/assets/images/hotel.png" alt="hotel" />
            </div>
            <div>
              <img src="/assets/images/logistics.png" alt="logistics" />
            </div>
            <div>
              <img src="/assets/images/eCommerce.png" alt="eCommerce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
