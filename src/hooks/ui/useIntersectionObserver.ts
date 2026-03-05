// Intersection Observer 커스텀 훅
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;
