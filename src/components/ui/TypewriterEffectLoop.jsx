"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectLoop = ({ words = [], className, cursorClassName, loopDuration = 3 }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, loopDuration * 1000); // Change words every `loopDuration` seconds

    return () => clearInterval(interval);
  }, [words.length, loopDuration]);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        key={wordIndex} // Changing key forces animation reset
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        animate={{ width: "fit-content" }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" style={{ whiteSpace: "nowrap" }}>
          {words[wordIndex].text.split("").map((char, index) => (
            <motion.span
              key={`char-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 * (index + 1) }}
              className={cn("text-white", words[wordIndex].className)}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Blinking Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("block rounded-sm w-[4px] h-4 sm:h-8 xl:h-8 bg-violet-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};
