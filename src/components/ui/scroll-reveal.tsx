"use client";

import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  as?: "div" | "section" | "span";
};

function getInitial(direction: Direction, distance: number): TargetAndTransition {
  const map: Record<Direction, TargetAndTransition> = {
    up: { opacity: 0, y: distance },
    down: { opacity: 0, y: -distance },
    left: { opacity: 0, x: distance },
    right: { opacity: 0, x: -distance },
    none: { opacity: 0 },
  };
  return map[direction];
}

const visible: TargetAndTransition = { opacity: 1, x: 0, y: 0 };

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
  amount = 0.15,
  as = "div",
}: ScrollRevealProps) {
  const Component = motion[as];
  const transition: Transition = { duration, delay, ease: "easeOut" };

  return (
    <Component
      className={className}
      initial={getInitial(direction, distance)}
      whileInView={visible}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </Component>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function StaggerContainer({
  children,
  className,
  id,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: getInitial(direction, distance),
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
