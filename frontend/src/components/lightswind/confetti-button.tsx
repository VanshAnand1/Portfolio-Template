import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { confettiButtonVariants } from "./confetti";
import { CDN_ID, CDN_SRC } from "./confetti";
import type { ConfettiOptions } from "./confetti";
import type { VariantProps } from "class-variance-authority";

export interface ConfettiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof confettiButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  confettiOptions?: ConfettiOptions;
  autoConfetti?: boolean;
  triggerOnHover?: boolean;
  asChild?: boolean;
}

export const ConfettiButton = React.forwardRef<
  HTMLButtonElement,
  ConfettiButtonProps
>(
  (
    {
      className,
      variant,
      size,
      animation,
      children,
      icon,
      iconPosition = "left",
      loading = false,
      confettiOptions = { particleCount: 100, spread: 70 },
      autoConfetti = false,
      triggerOnHover = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const createdScriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      if (window.confetti) {
        setScriptLoaded(true);
        return;
      }
      const existing = document.getElementById(
        CDN_ID
      ) as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", () => setScriptLoaded(true), {
          once: true,
        });
        return;
      }
      const script = document.createElement("script");
      script.id = CDN_ID;
      script.src = CDN_SRC;
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
      createdScriptRef.current = script;
      return () => {
        if (createdScriptRef.current?.parentNode) {
          createdScriptRef.current.parentNode.removeChild(
            createdScriptRef.current
          );
        }
      };
    }, []);

    const triggerConfetti = () => {
      const w = window;
      if (!scriptLoaded || !w.confetti || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      w.confetti({ ...confettiOptions, origin: { x, y } });
    };

    useEffect(() => {
      if (autoConfetti) triggerConfetti();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scriptLoaded, autoConfetti]);

    return (
      <button
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
          buttonRef.current = node;
        }}
        className={cn(
          confettiButtonVariants({ variant, size, animation }),
          className
        )}
        onClick={(e) => {
          if (scriptLoaded) triggerConfetti();
          onClick?.(e);
        }}
        onMouseEnter={triggerOnHover ? triggerConfetti : undefined}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}

        {!loading && icon && iconPosition === "left" && (
          <span className="mr-1">{icon}</span>
        )}
        {children}
        {!loading && icon && iconPosition === "right" && (
          <span className="ml-1">{icon}</span>
        )}
      </button>
    );
  }
);

ConfettiButton.displayName = "ConfettiButton";
export default ConfettiButton;
