import { cn } from "../../lib/utils"; // Assuming cn is a utility for combining class names
import React from "react";

function Wrapper({ children, className }) {
  return (
    <div className={cn(
      "h-full w-full mx-auto max-w-screen-xl px-4 md:px-0",
      className
    )}>
      {children}
    </div>
  );
}

export default Wrapper;
