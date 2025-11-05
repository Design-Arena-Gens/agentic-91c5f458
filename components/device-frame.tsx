 "use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type DeviceFrameProps = {
  title: string;
  description: string;
  accent?: boolean;
  children: ReactNode;
};

export function DeviceFrame({
  title,
  description,
  accent,
  children
}: DeviceFrameProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white/60 uppercase tracking-[0.4em]">
          {accent ? "StreamX Signature" : "Screen"}
        </span>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-white/60 max-w-xl">{description}</p>
      </div>
      <motion.div
        className={clsx(
          "relative mx-auto w-[300px] rounded-[48px] border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-transparent p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur"
        )}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        <div className="pointer-events-none absolute inset-[18px] rounded-[36px] border border-white/8" />
        <div className="absolute inset-x-20 top-2 h-4 rounded-b-[12px] bg-black/80 shadow-inner" />
        <div className="absolute left-6 top-[88px] h-6 w-[3px] rounded-full bg-white/10" />
        <div className="absolute right-6 top-[120px] h-10 w-[3px] rounded-full bg-white/10" />
        <div className="relative z-10 h-[620px] w-full overflow-hidden rounded-[36px] border border-white/5 bg-[#050505] shadow-card">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
