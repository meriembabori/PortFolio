"use client";

import { motion } from "framer-motion";

type SkillMeterProps = {
  name: string;
  value: number;
};

export function SkillMeter({ name, value }: SkillMeterProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800/90">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-[#C06C84] via-[#8F9CCF] to-[#7DB7E8]"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}

