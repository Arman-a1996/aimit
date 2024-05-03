const SortIconUp = ({ filled }: { filled?: boolean | '' | null }) => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill={filled ? '#C1CADA' : '#667695'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33412 0.246267C6.41339 0.128577 6.58661 0.128576 6.66588 0.246267L12.3522 8.68827C12.4417 8.82111 12.3465 9 12.1863 9H0.813677C0.653506 9 0.558316 8.82111 0.647797 8.68827L6.33412 0.246267Z"
        fill={filled ? '#C1CADA' : '#667695'}
      />
    </svg>
  );
};

export default SortIconUp;
