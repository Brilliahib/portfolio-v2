"use client";

import { motion, Variants } from "framer-motion";
import { Children, type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  id?: string;
  wrapChildren?: boolean;
}

const SectionWrapper = ({
  id,
  children,
  className = "flex h-auto w-full grow flex-col",
  staggerDelay = 0.2,
  duration = 0.8,
  wrapChildren = true,
}: SectionWrapperProps) => {
  const childrenArray = Children.toArray(children);
  const isMultipleChildren = childrenArray.length > 1;

  const fadeVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration * 0.3, ease: "easeIn" },
    },
  };

  const containerVariants: Variants = {
    initial: {},
    animate: { transition: { staggerChildren: staggerDelay } },
    exit: {
      transition: { staggerChildren: staggerDelay, staggerDirection: -1 },
    },
  };

  if (!isMultipleChildren) {
    return (
      <motion.section
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ once: true }}
        variants={fadeVariants}
        className={className}
        id={id}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      variants={containerVariants}
      className={className}
      id={id}
    >
      {childrenArray.map((child, index) =>
        wrapChildren ? (
          <motion.div
            key={index}
            variants={fadeVariants}
            className="flex w-full flex-col items-center"
          >
            {child}
          </motion.div>
        ) : (
          <motion.div key={index} variants={fadeVariants}>
            {child}
          </motion.div>
        ),
      )}
    </motion.section>
  );
};

export default SectionWrapper;
