import React, {useState, useEffect} from "react";

const useIntersectionObserver = (ref, {threshold, root, rootMargin}) => {
  const [state, setState] = useState({
       inView: false,
       triggered: false,
       entry: undefined
     });

  const observer = new IntersectionObserver((entries, observerInstance) => {
      //check to see if element is intersecting
      if (entries[0].intersectionRatio > 0) {
        // update the state, set trigger to not re-observe element
        setState({
                   inView: true,
                   triggered: true,
                   entry: observerInstance
                 });
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
/*
const useIntersectionObserver = ({
     target,
     onIntersect,
     threshold = 0.1,
     rootMargin = "0px"
   }) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });

    const current = target.current || target;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  });
};
*/

export default useIntersectionObserver;
