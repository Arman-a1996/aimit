import { useDetectedParams } from 'hooks/useDetectedParams';
import { IComponent } from 'pages/profile/constants/constants';

import Agent from './tabs/agent/Agent';

const useProfile = ({ sendAgentsActivityWatchMessage }: any) => {
  const { searchParams, setSearchParams } = useDetectedParams();
  const { tab } = searchParams;
  const openMainDrawer = (mode: string) => {
    setSearchParams({
      ...searchParams,
      mode,
      open: 'true',
    });
  };

  const Component: IComponent = {
    agents: <Agent sendAgentsActivityWatchMessage={sendAgentsActivityWatchMessage} />,
  };

  return {
    tab,
    openMainDrawer,
    Component,
  };
};
export default useProfile;
