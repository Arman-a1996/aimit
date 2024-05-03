import clsx from 'clsx';

import { ErrorMessage } from '../../../ui/errorMessage/ErrorMessage';

import useCallBackForm from './useCallBackForm';

import styles from './CallBackForm.module.scss';

const CallBackForm = () => {
  const { onInputBlur, onInputChange, errors, watch, onSubmit } = useCallBackForm();
  return (
    <div className={styles.pageTwoWrapper}>
      <div>
        <div>
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
            <ErrorMessage fieldError={errors?.phone} color={'white'} />
          </div>
          <div>
            <textarea
              onBlur={onInputBlur}
              onChange={onInputChange}
              className={`${styles.input} ${styles.noResize}`}
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
  );
};

export default CallBackForm;
