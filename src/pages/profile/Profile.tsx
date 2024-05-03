import { Button } from 'antd';

import TabPanel from 'components/tab-panel/TabPanel';

import { SUBJECT } from './constants/constants';
import useProfile from './useProfile';

const Profile = ({ sendAgentsActivityWatchMessage }: any) => {
  const { tab, openMainDrawer, Component } = useProfile({ sendAgentsActivityWatchMessage });

  return (
    <div>
      <TabPanel tabs={[{ id: 'agents', name: 'Agents' }]}>
        <div className="tabPanelButtons">
          <Button onClick={() => openMainDrawer('customize')} />
          <Button
            onClick={() => openMainDrawer('add')}
            children={SUBJECT[tab.toUpperCase() as keyof typeof SUBJECT]}
            className="panelAddButton"
          />
        </div>
      </TabPanel>
      <div>{Component[tab]}</div>
    </div>
  );
};
export default Profile;
