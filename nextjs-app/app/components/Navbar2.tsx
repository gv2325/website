"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  logoTxt: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
  const { logo, logoTxt, navLinks, buttons } = {
    ...Navbar2Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <nav className="navbar flex w-full items-center bg-[#E9E4DD] text-[#2E090D] lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-center px-[5%] md:min-h-16 lg:min-h-full lg:px-0">
            <a href={logo.url} className="hidden lg:block">
            <Image src={logoTxt.src} alt={logo.alt || "Logo"} width={logoTxt.width} height={logoTxt.height} style={{ width: "auto", height: "auto" }}/>
            </a>
          <div className="px-0.5"></div> {/* Added padding between images */}
            <a href={logo.url} className="pr-[5%]">
            <Image src={logo.src} alt={logo.alt || "Logo"} width={logo.width} height={logo.height} style={{ width: "auto", height: "auto" }}/>
            </a>
          <div className="flex items-center gap-2 lg:hidden">
            <div className="md:min-h-1">
              {buttons.map((button, index) => (
                <Button key={index} className="w-full px-2 py-1" style={{ backgroundColor: '#781E26',  width: "auto", height: "auto" }} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-[#2E090D]"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-[#2E090D]"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-[#2E090D]"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="font-semibold text-[#781E26] overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) => (
            <div key={index} className="first:pt-4 lg:first:pt-0">
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
          <SubMenu navLink={navLink} isMobile={isMobile} />
              ) : (
          <a href={navLink.url} className="block py-3 text-md lg:px-4 lg:py-2 lg:text-base">
            {navLink.title}
          </a>
              )}
            </div>
          ))}
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          {buttons.map((button, index) => (
            <Button key={index} className="px-6 py-2 font-gambarino" style={{ backgroundColor: '#781E26' }} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="bg-[#E9E4DD] lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, index) => (
              <a
                key={index}
                href={subMenuLink.url}
                className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </nav>
  );
};

export const Navbar2Defaults: Navbar2Props = {
  logoTxt: {
    url: "/",
    src: "/assets/assets-27.png",
    alt: "Text Logo",
    width: 48,
    height: 48,
  },
  logo: {
    url: "/",
    src: "/assets/assets-29.png",
    alt: "Text Logo",
    width: 160,
    height: 48,
  },
  navLinks: [
    { title: "Agenda", url: "#" },
    {
      title: "Past Conferences",
      url: "#",
      subMenuLinks: [
        { title: "India Conference 2023", url: "#" },
      ],
    },
    { title: "Past Speakers", url: "#" },
    { title: "Our Team", url: "#" },
    { title: "Contact Us", url: "#" },
  ],
  buttons: [
    {
      title: "Get Tickets",
      size: "sm",
    },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
