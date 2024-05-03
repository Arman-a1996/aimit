import styles from './WhatSet.module.scss';

const WhatSet = () => {
  return (
    <div
      className={styles.whatSetWrapper}
      style={{ backgroundImage: `url('/assets/images/backgroundOK.jpeg')`, backgroundRepeat: 'no-repeat' }}
    >
      <div className={styles.heading}>
        <h1>What Sets Us Apart To Build Website?</h1>
        <p>
          We put our passion and creativity into every project we work on. Our procedure is straightforward, and our
          coordination ensures that all of our work is done with originality and expertise.
        </p>
      </div>
      <div className={styles.infoPicWrapper}>
        <div className={styles.infoRow}>
          <div className={styles.card}>
            <h1>
              Industry<span> Exposure</span>
            </h1>
            <p>Years of experience offering high-end solutions to a diverse range of businesses.</p>
          </div>
          <div className={styles.card}>
            <h1>
              Client-Oriented<span> Processes</span>
            </h1>
            <p>
              We are aware of the current consumer's requirements. We create customer-centric procedures for businesses
              of all sizes, from small to large.
            </p>
          </div>
          <div className={styles.card}>
            <h1>
              24/7 Client<span> Support</span>
            </h1>
            <p>
              We believe in establishing a relationship with every consumer to whom we offer our services. This aids our
              staff in comprehending our client's problems and thoughts.
            </p>
          </div>
        </div>
        <div className={styles.okPicture}>
          <img src={'/assets/images/okMen.png'} alt={''} />
        </div>
      </div>
    </div>
  );
};

export default WhatSet;
