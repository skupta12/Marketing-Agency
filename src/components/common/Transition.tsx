"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function OSTransition({
  children,
  className,
  delay,
  scale,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
}) {

  const shouldReduceMotion = useReducedMotion();
  
  return (
      <motion.div
      className={className}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        scale: shouldReduceMotion ? 0 : scale,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 0.4, delay: delay }}
    >
      {children}
    </motion.div>
  );
}

export const YXtransition = ({
  children,
  className,
  delay,
  y,
  x,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : y,
        x: shouldReduceMotion ? 0 : x,
      }}
      transition={{ ease: "easeOut", duration: 0.4, delay: delay }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// export const RouteTransition = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {

//   return (
//     <motion.div
//       className={className}
//       initial={{ y: 40, opacity: 0 }}
//       transition={{ ease: "easeInOut", duration: 0.4, delay: 0 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       {children}
//     </motion.div>
//   );
// };