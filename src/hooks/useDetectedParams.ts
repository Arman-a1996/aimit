import { useSearchParams } from 'react-router-dom';

export const useDetectedParams = (): any => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Global
  const tab = searchParams.get('tab') || '';
  const id = searchParams.get('id') || '';

  return {
    searchParams: {
      ...(tab && { tab }),
      ...(id && { id }),
    },
    setSearchParams,
  };
};
