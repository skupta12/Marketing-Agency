"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface CustomCursorProps {
  isVisible: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isVisible }) => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            x: "-50%",
            y: "-50%",
          }}
        >
          <div className="w-16 h-16 rounded-full border border-white bg-white/10 backdrop-blur-md will-change-transform will-change-[backdrop-filter]" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
