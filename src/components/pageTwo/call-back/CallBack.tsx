import CallBackForm from '../call-back-form/CallBackForm';

import styles from './CallBack.module.scss';

const CallBack = () => {
  return (
    <div
      className={styles.industriesWrapper}
      style={{ backgroundImage: `url('/assets/images/discuss.jpeg')`, backgroundRepeat: 'no-repeat' }}
    >
      <div className={styles.industriesWrapperDark}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div>
              <h1>Let's Sign-up For the Best Website Experience.</h1>
            </div>
            <div>
              <p>
                Webexpertllc is a one-stop-shop web design and development agency with a team of highly competent and
                creative developers, marketers, and designers that collaborate to deliver the best possible solutions
                that meet all of the client's business requirements.
              </p>
            </div>
            <div className={styles.address}>
              <p>39899 Balentine Dr, Newark, CA 94560, United States</p>
              <p>aimit@gmail.como</p>
              <p>444-4444-4444</p>
            </div>
            <div className={styles.allRights}>
              <p>2024 AimIt company | ALll rights reserved.</p>
            </div>
          </div>
          <div className={styles.form}>
            <CallBackForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
