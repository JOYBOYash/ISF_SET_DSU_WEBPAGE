"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const ScrollAnimation = ({
  children,
  inAnimation,
  outAnimation,
  delay = 0,
  duration = 0.8
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Component entered viewport
    } else {
      setIsVisible(false); // Component left viewport
    }
  }, [inView]);

  const animations = {
    fadeIn: { opacity: 1, transition: { duration, delay } },
    fadeOut: { opacity: 0, transition: { duration, delay } },
    slideInLeft: { x: 0, opacity: 1, transition: { duration, delay } },
    slideOutLeft: { x: -50, opacity: 0, transition: { duration, delay } },
    slideInRight: { x: 0, opacity: 1, transition: { duration, delay } },
    slideOutRight: { x: 50, opacity: 0, transition: { duration, delay } },
    slideInUp: { y: 0, opacity: 1, transition: { duration, delay } },
    slideOutDown: { y: 50, opacity: 0, transition: { duration, delay } },
    scaleIn: { scale: 1, opacity: 1, transition: { duration, delay } },
    scaleOut: { scale: 1.2, opacity: 0, transition: { duration, delay } }
  };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? animations[inAnimation] : animations[outAnimation]}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
