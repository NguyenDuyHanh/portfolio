import React, { useState, useRef, useEffect } from "react";

import { cn } from "../../lib/utils";

export const DropdownMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { open, setOpen });
      })}
    </div>
  );
};

export const DropdownMenuTrigger = ({ children, open, setOpen, asChild }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setOpen?.(!open);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        handleClick(e);
      },
    });
  }

  return <button onClick={handleClick}>{children}</button>;
};

export const DropdownMenuContent = ({ children, open, setOpen, align = "end", className }) => {
  if (!open) return null;

  const alignClasses = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0",
  };

  return (
    <div
      className={cn(
        "absolute mt-2 min-w-[8rem] z-50 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg animate-in fade-in-80 duration-150",
        alignClasses[align] || alignClasses.end,
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { setOpen });
      })}
    </div>
  );
};

export const DropdownMenuItem = ({ children, onClick, setOpen, className }) => {
  const handleItemClick = (e) => {
    onClick?.(e);
    setOpen?.(false);
  };

  return (
    <div
      onClick={handleItemClick}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      {children}
    </div>
  );
};
