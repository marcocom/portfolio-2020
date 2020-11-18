import {useCallback, useState} from 'react';

export const useCounter = (initialState = 1) => {
  const [count, setCount] = useState(initialState);

  const reset = useCallback(() => setCount(initialState), [initialState]);

  // return useMemo(() => ({count, setCount}));
  return {count, setCount, reset};
};
