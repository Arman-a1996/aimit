import { useEffect, useRef } from 'react';

export const useOutsideDetect = <T extends HTMLElement>(setterFunction: (value: boolean) => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event?.target as Node) && setterFunction) {
        setterFunction(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setterFunction]);

  return ref;
};
