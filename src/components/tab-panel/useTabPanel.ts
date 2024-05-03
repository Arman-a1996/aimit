import { useNavigate } from 'react-router-dom';
import { useDetectedParams } from 'hooks/useDetectedParams';

export const useTabPanel = () => {
  const { searchParams, setSearchParams } = useDetectedParams();
  const { tab } = searchParams;
  const navigate = useNavigate();
  //carriers
  const handleChangeTab = (tabName: string) => {
    if (tab === tabName) return;
    navigate({ pathname: '/not-found' });
  };

  return {
    handleChangeTab,
    tab,
  };
};
