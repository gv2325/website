/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
};

export type Layout484Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout484 = (props: Layout484Props) => {
  const { tagline, heading, buttons } = {
    ...Layout484Defaults,
    ...props,
  } as Props;

  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = heading.split(" ");

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h5 ref={headingRef} className="text-5xl font-bold md:text-7xl lg:text-8xl">
          {words.map((word, index) => {
            const start = index * 0.015;
            const end = start + 0.025;
            const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
            return (
              <React.Fragment key={index}>
                <motion.span className="inline-block" style={{ opacity }}>
                  {word}
                </motion.span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            );
          })}
        </h5>
        <div className="mt-2 flex flex-wrap items-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout484Defaults: Layout484Props = {
  heading:
    "The annual global conference on Indian Business, Policy, and Culture is a student-driven platform that explores the rich diversity of India, spotlighting the country’s rise as a major global force. For over 22 years, Harvard students across schools have united to host experts from fields such as business, economics, education, and culture, offering attendees a well-rounded perspective on India’s present landscape and future potential.",
  buttons: [
  ],
};
