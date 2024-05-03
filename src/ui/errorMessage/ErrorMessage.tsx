import { Typography } from 'antd';

import styles from './ErrorMessage.module.scss';

export const ErrorMessage = ({ fieldError }: Partial<any>) =>
  fieldError && <Typography className={styles.error}>{fieldError['message']}</Typography>;
