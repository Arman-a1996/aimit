import { useState } from 'react';

import { TSlideProp } from './constants/types';

const useSlide = ({ slides }: TSlideProp) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: any, index: number, next: number) => {
    e.stopPropagation();
    const nextIndex = index === 0 && !next ? slides.length - 1 : (next ? index + 1 : index - 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  return {
    currentSlide,
    slides,
    nextSlide,
  };
};

export default useSlide;
