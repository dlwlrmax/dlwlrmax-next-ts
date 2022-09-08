import { useEffect, useState } from 'react';
import { throttleFunc } from '../util/function';
import { MOUSE_POSITION } from '../util/Interfaces';
import useWindowSize from './useWindowsSize';

export default function useMousePosition(): MOUSE_POSITION {
  const windows_size = useWindowSize();
  const [mousePos, setMousePosition] = useState<MOUSE_POSITION>({
    x: 0,
    y: 0
  });
  const moveHandler = (e: MouseEvent) => {
    setMousePosition({ ...mousePos, x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    if (mousePos.x === 0 && mousePos.y === 0) {
      setMousePosition({
        ...mousePos,
        x: windows_size.width ? windows_size.width / 2 : 0,
        y: windows_size.height ? windows_size.height / 2 : 0
      });
    }
  }, []);
  useEffect(() => {
    document.body.addEventListener(
      'mousemove',
      throttleFunc((e: MouseEvent) => {
        moveHandler(e);
      }, 20)
    );
    // return () => document.body.removeEventListener('mousemove', moveHandler);
  }, []);

  return mousePos;
}
