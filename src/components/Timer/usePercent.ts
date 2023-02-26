import {useEffect, useState} from 'react';

export const usePercent = (startSecond: number) => {
  const [counter, setCounter] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const clearStamp = setInterval(
      () => {
        return setCounter((prevCounter) => {
          if (prevCounter === startSecond) {
            clearInterval(clearStamp);
            return prevCounter;
          }
          return prevCounter + 1;
        });
      },
      1000,
    );

    setPercent(100 * counter / startSecond);
    return () => {
      return clearInterval(clearStamp);
    };
  }, [counter, startSecond]);

  return {percent};
};
