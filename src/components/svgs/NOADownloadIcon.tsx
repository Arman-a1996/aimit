import React from 'react';
import clsx from 'clsx';

interface INoaDownloadIconProps {
  onClick?: () => void;
  outlined?: boolean;
}

const NoaDownloadIcon = ({ outlined = true, onClick }: INoaDownloadIconProps) => {
  return (
    <svg
      className={clsx({
        ['noaOutlined']: outlined,
      })}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M1.87891 16.6953C1.47891 16.6953 1.12891 16.5453 0.828906 16.2453C0.528906 15.9453 0.378906 15.5953 0.378906 15.1953V11.6203H1.87891V15.1953H14.8789V11.6203H16.3789V15.1953C16.3789 15.5953 16.2289 15.9453 15.9289 16.2453C15.6289 16.5453 15.2789 16.6953 14.8789 16.6953H1.87891ZM8.37891 12.8703L3.55391 8.04531L4.62891 6.97031L7.62891 9.97031V0.695312H9.12891V9.97031L12.1289 6.97031L13.2039 8.04531L8.37891 12.8703Z"
        fill="var(--blue)"
      />
    </svg>
  );
};

export default NoaDownloadIcon;
