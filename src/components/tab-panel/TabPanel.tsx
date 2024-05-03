import MainTab from '../../ui/main-tab/MainTab';

import { ITabPanelProps } from './constants/types';
import { useTabPanel } from './useTabPanel';

import styles from './TabPanel.module.scss';

const TabPanel = ({ children, tabs }: ITabPanelProps) => {
  const { tab, handleChangeTab } = useTabPanel();

  return (
    <div className={styles.tabPanelContainer}>
      {tabs.length ? (
        <div className={styles.tabs}>
          {tabs?.map(({ id, name }) => {
            return <MainTab key={id} activeTab={tab!} title={name} id={id} onClick={handleChangeTab} />;
          })}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default TabPanel;
