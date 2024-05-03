import clsx from 'clsx';

import { ErrorMessage } from '../../../ui/errorMessage/ErrorMessage';

import useUrgentDevForm from './useUrgentDevForm';

import styles from './UrgentDevForm.module.scss';

const UrgentDevForm = () => {
  const { onInputBlur, onInputChange, errors, watch, onSubmit } = useUrgentDevForm();
  return (
    <div className={styles.pageTwoWrapper}>
      <div className={styles.wrapper}>
        <div
          className={styles.FormWrapper}
          style={{ backgroundImage: `url('/assets/images/girl.jpeg')`, backgroundRepeat: 'no-repeat' }}
        />

        <div className={styles.businessColumn}>
          <h1>Need An Urgent Website Developer for Your Business? Unlock a 23% Discounted Coupon.</h1>
          <div className={styles.form}>
            <div className={styles.nameAddress}>
              <div className={styles.inputWithError}>
                <input
                  onBlur={onInputBlur}
                  onChange={onInputChange}
                  className={clsx(styles.input, { [styles.nameError]: !!errors.name })}
                  type="text"
                  placeholder={'Your Name'}
                  name="name"
                />
                <ErrorMessage fieldError={errors?.name} />
              </div>
              <div className={styles.inputWithError}>
                <input
                  onBlur={onInputBlur}
                  onChange={onInputChange}
                  className={clsx(styles.input, { [styles.emailError]: !!errors.email })}
                  type="text"
                  placeholder={'Email Address'}
                  name="email"
                />
                <ErrorMessage fieldError={errors?.email} />
              </div>
            </div>
            <div className={styles.inputWithError}>
              <input
                onBlur={onInputBlur}
                onChange={onInputChange}
                value={watch('phone')}
                className={clsx(styles.input, { [styles.phoneError]: !!errors.phone })}
                type="text"
                placeholder={'Phone Number'}
                name="phone"
              />
              <ErrorMessage fieldError={errors?.phone} />
            </div>
            <div>
              <input
                onBlur={onInputBlur}
                onChange={onInputChange}
                className={styles.input}
                type="text"
                placeholder={'Your Message'}
                name="message"
              />
            </div>
            <div>
              <button onClick={onSubmit} className={styles.submitButton}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentDevForm;
