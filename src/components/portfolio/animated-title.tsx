"use client";

import { motion } from "framer-motion";

type AnimatedTitleProps = {
  text: string;
};

export function AnimatedTitle({ text }: AnimatedTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
    >
      {text}
    </motion.h1>
  );
}
