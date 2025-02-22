"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { SlideNavTabs } from "./ui/nav";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // Ensure the navbar is visible on initial render
  useEffect(() => {
    setVisible(true);
  }, []);

  // Update visibility based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();
      setVisible(direction < 0); // Show on scroll up, hide on scroll down
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 1 }} // Start from y: 0 to avoid initial jump
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          exit={{ y: -100, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed z-40 inset-x-0 mt-0 w-full px-24 text-sm md:flex"
        >
          <SlideNavTabs />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};