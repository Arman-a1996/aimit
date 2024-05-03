import clsx from 'clsx';

import styles from './Goals.module.scss';

const buttons = [
  'All',
  'Beauty',
  'Auto',
  'Real Estate',
  'E-Commerce',
  'CBD',
  'Education',
  'Fitness',
  'Food',
  'Health',
  'Non Profit',
];
const Goals = ({ active, setActive }: any) => {
  const handleChangeTab = (tab: string) => {
    setActive(tab);
  };
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.slider}>
        <div>
          <div className={styles.wrapper}>
            <div className={styles.businessColumn}>
              <div>
                <h1>Web Expert Llc Are Proud To Share Its Portfolio.</h1>
                <p>
                  Our goal is to provide businesses with high-quality digital marketing, web design, and development
                  services at affordable prices. We've helped several companies and businesses by delivering exceptional
                  website design and development bound to significantly improve the overall client experience.
                </p>
              </div>
            </div>
            <div className={styles.slideColumn}>
              <div className={styles.buttonWrapper}>
                <button className={styles.discussButton}>Let's Discuss</button>
                <button className={styles.scheduleButton}>+374 23-32-23</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tabButtonWrapper}>
          <div className={styles.buttonWrapper}>
            {buttons.map(button => (
              <button
                onClick={() => handleChangeTab(button)}
                className={clsx(styles.tabButton, { [styles.active]: button === active })}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
