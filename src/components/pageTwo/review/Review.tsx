import styles from './Review.module.scss';

const Review = () => {
  return (
    <div
      className={styles.reviewWrapper}
      style={{ backgroundImage: `url('/assets/images/backgroundOK.jpeg')`, backgroundRepeat: 'no-repeat' }}
    >
      <div className={styles.header}>
        <h1>Why Our Clients Are Happy To Share Reviews?</h1>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={styles.reviewCard}>
          <div className={styles.content}>
            <p>
              I had a fantastic time working with the entire Web Expert llc team. They were knowledgeable, competent,
              and patient with all of our needs. During the building of our website, their procedure was outstanding.
              The Webexpertllc team provided me with what I requested. Based on my own experience, I highly suggest
              Webexpertllc.
            </p>

            <div className={styles.footer}>
              <div className={styles.review}>
                <span>Allan</span>
                <img src="/assets/images/review.jpeg" alt="review" />
              </div>
              <div className={styles.greenReview}>
                <img src="/assets/images/trustpilot.png" alt="trustpilot" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviewCard}>
          <div className={styles.content}>
            <p>
              Web Expert llc crew is always quick to respond. They paved the way for my accomplishment. Our website was
              developed in such a way that it is simple for me to edit. As someone who does not write HTML code, I am
              confident in my ability to complete many of our website improvements without the need for assistance. But
              I know that if I ask for assistance, the Webexpertllc team will make it look excellent and quickly.
            </p>

            <div className={styles.footer}>
              <div className={styles.review}>
                <span>Clark</span>
                <img src="/assets/images/review.jpeg" alt="review" />
              </div>
              <div className={styles.greenReview}>
                <img src="/assets/images/trustpilot.png" alt="trustpilot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
