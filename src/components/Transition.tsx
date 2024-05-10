"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 0.5, delay: delay }}
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
  delay?: number,
  y?: number;
  x?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: y, x: x, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: delay}}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const RouteTransition = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 40, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

