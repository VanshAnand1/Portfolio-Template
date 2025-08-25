export type ConfettiOptions = {
  particleCount?: number;
  spread?: number;
  origin?: { x: number; y: number };
};

declare global {
  interface Window {
    confetti?: (opts?: ConfettiOptions) => void;
  }
}

import { cva } from "class-variance-authority";

export const confettiButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        sm: "h-8 px-3 py-1 rounded-md text-sm",
        lg: "h-12 px-6 py-3 rounded-md text-lg",
        xl: "h-14 px-8 py-4 rounded-md text-xl",
        icon: "h-10 w-10 rounded-full",
        pill: "h-10 px-6 py-2 rounded-full",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "hover:animate-bounce",
        scale: "active:scale-95",
        shake: "hover:animate-[wiggle_0.3s_ease-in-out]",
        glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
        expand: "active:scale-110 transition-transform",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale",
    },
  }
);

export const CDN_ID = "canvas-confetti-cdn";
export const CDN_SRC =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
