"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[#C06C84] via-[#8F9CCF] to-[#7DB7E8]"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}

