import { useCallback, useEffect, useState } from 'react';

interface IUseDevicePixelRation {
  getValueBasedOnPixelRatio: (pixelValue: number) => number;
}

export const useDevicePixelRatio = (): IUseDevicePixelRation => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio);
  }, []);

  const getValueBasedOnPixelRatio = useCallback(
    (pixelValue: number) => Math.round(pixelValue / devicePixelRatio),
    [devicePixelRatio]
  );
  return { getValueBasedOnPixelRatio };
};
