import Slide from '../../../ui/slider/Slide';

import FirstSlide from './components/firstSlide';
import SecondSlide from './components/secondSlide';
import ThirdSlide from './components/thirdSlide';

import styles from './Consulting.module.scss';

const Consulting = () => {
  const slides: any = [
    {
      Component: FirstSlide,
    },
    {
      Component: SecondSlide,
    },
    {
      Component: ThirdSlide,
    },
  ];
  return (
    <div className={styles.consultingWrapper}>
      <div className={styles.slideWrapper}>
        <div className={styles.h1Container}>
          <h1 className={styles.heading1}>Want instant solutions for any of these situations?</h1>
        </div>
        <Slide slides={slides} withButtons type="component" />
      </div>
    </div>
  );
};

export default Consulting;
