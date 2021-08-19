import {useCallback, useState} from 'react';
import {CounterProps} from "./types";

export const useCounter = (initialState = 1): CounterProps => {
  const [count, setCount] = useState(initialState);

  const reset = useCallback(() => setCount(initialState), [initialState]);

  // return useMemo(() => ({count, setCount}));
  return {count, setCount, reset};
};
