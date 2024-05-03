import PageTwo from '../pageTwo/PageTwo';

import styles from './PageOne.module.scss';

const PageOne = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.logoBlock}>
            <p>Aimit Company </p>
            <div>
              <p>Profits Generates for clients</p>
              <p>$7,555,555</p>
            </div>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.liveChat}>
              <p>img</p>
              <p>live Chat</p>
            </div>
            <div className={styles.phoneNumber}>
              <p>img1</p>
              <p>+2 233-343-2332</p>
            </div>
            <div className={styles.customButtonBlock}>
              <button>Get custom</button>
            </div>
          </div>
        </div>
        <div className={styles.bottomHeader}>
          <p>Custom Website</p>
          <p>E-Commerce Development</p>
          <p>Shopify Development</p>
          <p>Magento Development</p>
          <p>WordPress Development</p>
        </div>
      </div>
      <PageTwo />
    </div>
  );
};

export default PageOne;
