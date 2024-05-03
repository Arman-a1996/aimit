import { Button } from 'antd';

import { ROUTES } from 'components/routes/routes';
import NotFoundIcon from 'components/svgs/NotFoundIcon';

import { SUBJECT } from './constants/constants';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.info}>
        <NotFoundIcon />
        <Button href={ROUTES.HOME}>{SUBJECT.GO_HOME}</Button>
      </div>
    </div>
  );
};

export default NotFound;
