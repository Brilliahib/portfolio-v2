"use client";

import { useMouse } from "@/hooks/use-mouse";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import type { ReactNode } from "react";

export const BentoCard = ({
  withArrow = false,
  circleSize = 400,
  className,
  children,
}: {
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative h-full transform-gpu overflow-hidden rounded-xl bg-white/10 p-6 transition-transform hover:scale-[1.01] active:scale-90"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-300 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #9216AE, #a7317b, #9A63F2, #a7317b)",
        }}
      />
      <div className="absolute inset-px rounded-xl bg-neutral-950/80" />
      {children && (
        <div
          className={cn(
            "relative grid overflow-hidden rounded-xl border-neutral-950",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
