"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    const form = event.currentTarget;
    form.reset();
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          className="rounded-xl border border-white/10 bg-[#182235]/78 px-4 py-3 text-[#F3F6FC] outline-none transition focus:border-[#8F9CCF]"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          className="rounded-xl border border-white/10 bg-[#182235]/78 px-4 py-3 text-[#F3F6FC] outline-none transition focus:border-[#8F9CCF]"
        />
      </div>
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell me about your project"
        className="w-full rounded-xl border border-white/10 bg-[#182235]/78 px-4 py-3 text-[#F3F6FC] outline-none transition focus:border-[#8F9CCF]"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-[#C06C84] via-[#8F9CCF] to-[#7DB7E8] px-5 py-3 font-semibold text-white shadow-[0_10px_22px_rgba(192,108,132,0.32)]"
      >
        Send message
      </button>
      {sent ? (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[#E7C2D0]"
        >
          Message received. I will get back to you soon.
        </motion.p>
      ) : null}
    </form>
  );
}

