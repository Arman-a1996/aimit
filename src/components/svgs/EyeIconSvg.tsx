import React from 'react';
import clsx from 'clsx';

interface IEyeIconProps {
  outlined?: boolean;
}

const EyeIconSvg = ({ outlined = false }: IEyeIconProps) => {
  return (
    <svg
      className={clsx({
        ['noaOutlined']: outlined,
      })}
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.32682 10.6549C10.3129 10.6549 11.1497 10.3112 11.8372 9.6237C12.5247 8.9362 12.8685 8.09939 12.8685 7.11328C12.8685 6.12717 12.5247 5.29036 11.8372 4.60286C11.1497 3.91536 10.3129 3.57161 9.32682 3.57161C8.34071 3.57161 7.50391 3.91536 6.81641 4.60286C6.12891 5.29036 5.78516 6.12717 5.78516 7.11328C5.78516 8.09939 6.12891 8.9362 6.81641 9.6237C7.50391 10.3112 8.34071 10.6549 9.32682 10.6549ZM9.32682 9.44661C8.67405 9.44661 8.12196 9.22092 7.67057 8.76953C7.21918 8.31814 6.99349 7.76606 6.99349 7.11328C6.99349 6.4605 7.21918 5.90842 7.67057 5.45703C8.12196 5.00564 8.67405 4.77995 9.32682 4.77995C9.9796 4.77995 10.5317 5.00564 10.9831 5.45703C11.4345 5.90842 11.6602 6.4605 11.6602 7.11328C11.6602 7.76606 11.4345 8.31814 10.9831 8.76953C10.5317 9.22092 9.9796 9.44661 9.32682 9.44661ZM9.32682 13.3633C7.29905 13.3633 5.46571 12.7869 3.82682 11.6341C2.18793 10.4813 0.965712 8.97439 0.160156 7.11328C0.965712 5.25217 2.18793 3.74523 3.82682 2.59245C5.46571 1.43967 7.29905 0.863281 9.32682 0.863281C11.3546 0.863281 13.1879 1.43967 14.8268 2.59245C16.4657 3.74523 17.6879 5.25217 18.4935 7.11328C17.6879 8.97439 16.4657 10.4813 14.8268 11.6341C13.1879 12.7869 11.3546 13.3633 9.32682 13.3633ZM9.32682 12.1133C11.0074 12.1133 12.5525 11.6584 13.9622 10.7487C15.372 9.83898 16.4449 8.62717 17.181 7.11328C16.4449 5.59939 15.372 4.38759 13.9622 3.47786C12.5525 2.56814 11.0074 2.11328 9.32682 2.11328C7.64627 2.11328 6.10113 2.56814 4.69141 3.47786C3.28168 4.38759 2.20182 5.59939 1.45182 7.11328C2.20182 8.62717 3.28168 9.83898 4.69141 10.7487C6.10113 11.6584 7.64627 12.1133 9.32682 12.1133Z"
        fill="#667695"
      />
    </svg>
  );
};

export default EyeIconSvg;