import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export const useCounter = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setCount(start);
      return;
    }

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
        
        // Easing function: easeOutExpo
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(start + (end - start) * easeOutExpo);

        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [start, end, duration, delay, enabled]);

  return count;
};
