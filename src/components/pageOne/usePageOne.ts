import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'components/routes/routes';

export const usePageOne = () => {
  const navigate = useNavigate();

  const [xBox, setXBox] = useState(0);
  const [yBox, setYBox] = useState(0);
  const [xArea, setXArea] = useState(0);
  const [yArea, setYArea] = useState(0);

  const [dragState, setDragState] = useState(false);

  const lineElement = useRef<HTMLDivElement>(null);
  const boxElement = useRef<HTMLDivElement>(null);
  const areaElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lineElementPosition = lineElement?.current?.getBoundingClientRect();
    const boxElementPosition = boxElement?.current?.getBoundingClientRect();
    const areaElementPosition = boxElement?.current?.getBoundingClientRect();

    setXBox(lineElementPosition!.left - boxElementPosition!.width / 2);
    setYBox(lineElementPosition!.bottom - boxElementPosition!.height / 2);
    setXArea(lineElementPosition!.right - areaElementPosition!.width / 2);
    setYArea(lineElementPosition!.top + areaElementPosition!.height);
  }, []);

  const handleDragEnd = (event: { pageX: number; pageY: number }) => {
    setXBox(event.pageX);
    setYBox(event.pageY);
    setDragState(true);

    if (xArea - Number(event.pageX) < 160 && yArea - Number(event.pageY) < 160) {
      navigate({ pathname: ROUTES.HOME });
    }
  };

  const handleDragStart = () => {
    setDragState(prev => !prev);
  };

  return {
    xBox,
    yBox,
    xArea,
    yArea,
    dragState,
    boxElement,
    areaElement,
    lineElement,
    handleDragEnd,
    handleDragStart,
  };
};
