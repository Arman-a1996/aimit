import React from 'react';
import clsx from 'clsx';

import { IMainTabProps } from './constants/types';

import styles from './MainTab.module.scss';

const MainTab = ({ title, activeTab, onClick, id, ...props }: IMainTabProps) => {
  const currentTab = id;
  return (
    <div
      className={clsx(styles.mainTab, { [styles.mainTabActive]: activeTab === currentTab })}
      onClick={() => onClick(currentTab)}
      {...props}
    >
      <span>{title}</span>
    </div>
  );
};

export default MainTab;
