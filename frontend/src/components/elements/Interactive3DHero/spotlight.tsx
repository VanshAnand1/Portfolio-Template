"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  color?: string;
};

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 1024px)");

    const update = () => setIsMobile(mql.matches);
    update(); // run once on mount

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function Spotlight({
  className,
  size = 200,
  springOptions = { bounce: 0 },
  color = "rgba(153, 51, 255, .25)",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const isMobile = useIsMobile();

  const spotlightLeft = useTransform(
    mouseX,
    (x: number) => `${x - size / 2}px`
  );
  const spotlightTop = useTransform(mouseY, (y: number) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = "relative";
        parent.style.overflow = "hidden";
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      parentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parentElement, handleMouseMove]);

  return (
    !isMobile && (
      <motion.div
        ref={containerRef}
        className={cn(
          "pointer-events-none absolute rounded-full blur-2xl transition-opacity duration-200",
          "opacity-100",
          "z-[9] mix-blend-screen",
          className
        )}
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          background: `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,.25) 35%, transparent 70%)`,
        }}
      />
    )
  );
}
