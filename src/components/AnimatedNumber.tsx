import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

const AnimatedNumber = ({ value, prefix = '€', suffix = '', className = '' }: AnimatedNumberProps) => {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => {
      setDisplay(Math.round(v).toLocaleString('de-DE'));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span className={`number-display ${className}`}>
      {prefix}{display}{suffix}
    </span>
  );
};

export default AnimatedNumber;
