"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavItem } from "@/data/portfolio";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [active, setActive] = useState(items[0]?.id ?? "hero");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1200px,92%)] rounded-2xl border border-white/10 bg-[#182235]/78 px-3 py-2 backdrop-blur-xl">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <a href="#hero" className="px-3 text-sm font-semibold tracking-wide text-[#E7C2D0]">
          MERIEM.B
        </a>
        <div className="flex flex-wrap gap-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                active === item.id ? "text-slate-100" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {active === item.id ? (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-indigo-900/45"
                  transition={{ type: "spring", stiffness: 360, damping: 34 }}
                />
              ) : null}
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

