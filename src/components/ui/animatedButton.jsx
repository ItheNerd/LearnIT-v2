import React from "react";
import { cn } from "@/lib/utils.js";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "flex items-center bg-transparent font-medium rounded-lg text-sm text-center bg-[size:160%] p-[3px] list-none hover:bg-gradient-to-r from-blue-700 via-cyan-500 to-white shadow-blue-400 dark:from-blue-500 dark:via-neutral-500 dark:to-sky-500 dark:shadow-blue-400 bg-blend-color-burn drop-shadow-xl hover:animate-transition-background-position group",
        className
      )}
    >
      <span className="flex justify-center w-full p-3 m-auto bg-white rounded-lg group-hover:bg-opacity-90">
        {children}
      </span>
    </button>
  );
};

export default Button;
