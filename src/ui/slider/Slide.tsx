import clsx from 'clsx';

import { TSlideProp } from './constants/types';
import useSlide from './useSlide';

import styles from './Slide.module.scss';

const Slide = ({ slides, withButtons = true, type = 'img' }: TSlideProp) => {
  const { nextSlide, currentSlide } = useSlide({ slides });
  return (
    <div className={styles.slideWrapper}>
      {withButtons && (
        <span role="button" className={styles.leftButton} onClick={e => nextSlide(e, currentSlide, 0)}>
          &lt;
        </span>
      )}
      <div className={styles.slider}>
        {type === 'img' && (
          <div>
            {slides.map((image: string, index: number) => (
              <img
                key={index}
                className={clsx(styles.slide, { [styles.active]: index === currentSlide })}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={e => (withButtons ? null : nextSlide(e, currentSlide, 1))}
              />
            ))}
          </div>
        )}
        {type === 'component' && (
          <div>
            {slides.map(({ Component }: any, index: number) => (
              <Component
                onClick={(e: any) => (withButtons ? null : nextSlide(e, currentSlide, 1))}
                className={clsx(styles.slide, { [styles.active]: index === currentSlide })}
              />
            ))}
          </div>
        )}
      </div>
      {withButtons && (
        <span role="button" className={styles.rightButton} onClick={e => nextSlide(e, currentSlide, 1)}>
          &gt;
        </span>
      )}
    </div>
  );
};

export default Slide;
