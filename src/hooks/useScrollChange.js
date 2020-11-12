import { useEffect, useState } from 'react'
import {initialScrollState} from '../context'


export const useScrollChange = () => {
  const [scrollpoint, setScrollPoint] = useState(initialScrollState);
  const [componentMounted, setComponentMounted] = useState(false);


  useEffect(() => {
    setComponentMounted(true);
  }, []);

  return {ypoint: scrollpoint, isMounted: componentMounted};
};
