import React, { useState } from "react";

import { cn } from "../../lib/utils";

export const Tooltip = ({ children, title, side = "top", className }) => {
  const [visible, setVisible] = useState(false);

  if (!title) return children;

  const sideClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-xs shadow-md transition-all duration-150 pointer-events-none",
            sideClasses[side] || sideClasses.top,
            className
          )}
        >
          {title}
        </div>
      )}
    </div>
  );
};
