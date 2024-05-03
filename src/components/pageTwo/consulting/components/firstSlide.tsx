import styles from './slideComponent.module.scss';

const FirstSlide = ({ onClick, className }: any) => {
  console.log(className, 'className');
  return (
    <div className={styles.slideWrapper} onClick={onClick}>
      <div className={styles.slider}>
        <div className={className}>
          <div className={styles.wrapper}>
            <div className={styles.businessColumn}>
              <div>
                <h1>My website has been live, but it's taking forever to generate leads?</h1>
                <p>
                  With Web Expert llc that attract consumers' attention, raise conversion rates, and increase profits,
                  we seek to deliver great profitable success to your business.
                </p>
              </div>
              <div className={styles.buttonWrapper}>
                <button>Consult Now</button>
                <button className={styles.scheduleButton}>Find solution</button>
              </div>
            </div>
            <div className={styles.slideColumn}>
              <img src={'/assets/images/first.png'} alt={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
