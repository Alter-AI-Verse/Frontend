import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Badge } from "./Badge";

export function Tab({ text, selected, setSelected, discount = false }) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize",
        "text-foreground transition-colors",
        discount && "flex items-center justify-center gap-2.5"
      )}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-blue-200 shadow-sm"
        />
      )}
      {discount && (
        <Badge
          variant="secondary"
          className={cn(
            "relative z-10 whitespace-nowrap shadow-none",
            selected && "bg-muted"
          )}
        >
          Save 35%
        </Badge>
      )}
    </button>
  );
}