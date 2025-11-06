"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = Array.from({ length: 12 });

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      {beams.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"
          style={{
            left: `${(i + 1) * (100 / (beams.length + 1))}%`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};