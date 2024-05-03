const SortIconDown = ({ filled }: { filled?: boolean | '' | null }) => {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill={filled ? '#C1CADA' : '#F0F2F5'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66588 9.14045C6.58661 9.25814 6.41339 9.25814 6.33412 9.14045L0.647798 0.698451C0.558317 0.565605 0.653506 0.386718 0.813678 0.386718L12.1863 0.386719C12.3465 0.386719 12.4417 0.565605 12.3522 0.698451L6.66588 9.14045Z"
        fill={filled ? '#C1CADA' : '#F0F2F5'}
      />
    </svg>
  );
};

export default SortIconDown;
