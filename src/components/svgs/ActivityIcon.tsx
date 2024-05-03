import React from 'react';

const ActivityIcon = ({ active }: { active: boolean }) => {
  return (
    <svg width="41" height="11" viewBox="0 0 41 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.0380859" y="0.556641" width="40" height="10" rx="5" fill={active ? '#34A853' : '#FF5454'} />
    </svg>
  );
};

export default ActivityIcon;
