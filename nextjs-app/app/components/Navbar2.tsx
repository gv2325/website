"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.EBWidgets.createWidget({
        widgetType: "checkout",
        eventId: "1079303528909",
        modal: true,
        modalTriggerElementId: "eventbrite-widget-modal-trigger-1079303528909",
        onOrderComplete: () => {
          console.log("Order complete!");
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="flex w-full items-center bg-[#E9E4DD] text-[#2E090D] lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-center px-[5%] md:min-h-16 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <Image src={logoTxt.src} alt={logo.alt || "Logo"} width={logoTxt.width} height={logoTxt.height} style={{ width: "auto", height: "auto" }} />
          </a>
          {!isMobile && (
            <>
              <div className="px-0.5"></div> {/* Added padding between images */}
              <a href={logo.url}>
                <Image src={logo.src} alt={logo.alt || "Logo"} width={logo.width} height={logo.height} style={{ width: "auto", height: "auto" }} />
              </a>
            </>
          )}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="md:min-h-1">
              {buttons.map((button, index) => (
                <Button key={index} className="w-full px-2 py-1" style={{ backgroundColor: '#781E26', width: "auto", height: "auto" }} {...button}>
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
        <div className="flex items-center gap-4">
          <noscript>
            <a href="https://www.eventbrite.com/e/techbrew-tickets-1079303528909" rel="noopener noreferrer" target="_blank">
              Buy Tickets on Eventbrite
            </a>
          </noscript>
          <button id="eventbrite-widget-modal-trigger-1079303528909" type="button" className="w-full px-4 py-1" style={{ backgroundColor: '#781E26' }}>
            Buy Tickets
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {navLinks.map((navLink, index) => (
          <div key={index}>
            <a href={navLink.url} className="font-switzerSemibold">{navLink.title}</a>
            {navLink.subMenuLinks && (
              <AnimatePresence>
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
                >
                  {navLink.subMenuLinks.map((subMenuLink, index) => (
                    <a
                      key={index}
                      href={subMenuLink.url}
                      className="block py-3 text-center lg:px-4 lg:py-2 lg:text-left font-switzerSemibold"
                    >
                      {subMenuLink.title}
                    </a>
                  ))}
                </motion.nav>
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export const Navbar2Defaults: Navbar2Props = {
  logoTxt: {
    url: "#",
    src: "/assets/assets-27.png",
    alt: "Logo image",
    width: 48,
    height: 48,
  },
  logo: {
    url: "#",
    src: "/assets/assets-29.png",
    alt: "Logo image",
    width: 163,
    height: 72,
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
