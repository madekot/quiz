import {useEffect} from 'react';

export const useTick = (cb: (clearStamp: number) => void) => {
  useEffect(() => {
    const clearStamp = setInterval(
      (clearStamp) => {
        return cb(clearStamp);
      },
      1000,
    );

    return () => {
      return clearInterval(clearStamp);
    };
    // eslint-disable-next-line
  }, []);
};
