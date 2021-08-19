import {useEffect, useState} from "react";
import {IntersectionProps} from "./types";

const initialState: IntersectionProps = {
  inView: false,
  triggered: false,
  entry: undefined
};
const useIntersectionObserver = (ref, {threshold, root, rootMargin}) => {
  const [state, setState] = useState(initialState);

  const observer = new IntersectionObserver((entries, observerInstance) => {
      //check to see if element is intersecting
      if (entries[0].intersectionRatio > 0) {
        // update the state, set trigger to not re-observe element
        setState({
                   inView: true,
                   triggered: true,
                   entry: observerInstance
                 } as IntersectionProps);
        // unobserve element
        observerInstance.unobserve(ref.current);
      }
    }, {
      threshold: threshold || 0,
      root: root || null,
      rootMargin: rootMargin || '0%',
    }
  );

  useEffect(() => {
    // check that element exists and has not already been observed
    if (ref.current && !state.triggered) {
      observer.observe(ref.current);
    }
  });

  return [state.inView, state.entry];
};


export default useIntersectionObserver;
