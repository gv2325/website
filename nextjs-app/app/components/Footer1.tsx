"use client";

import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Links = {
  title: string;
  url: string;
  icon?: React.ReactNode;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer1 = (props: Footer1Props) => {
  const {
    logo,
    newsletterDescription,
    inputPlaceholder,
    button,
    termsAndConditions,
    columnLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer1Defaults,
    ...props,
  } as Props;

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[24vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
            <div className="flex flex-col">
            <a href={logo.url} className="mb-5 md:mb-6">
              <Image src={logo.src} alt={logo.alt || "Logo"} className="inline-block" width={logo.width} height={logo.height} style={{ width: "auto", height: "auto" }}/>
            </a>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            {columnLinks.map((column, index) => (
              <div key={index} className="flex flex-col items-start justify-start">
                <h2 className="mb-3 font-semibold md:mb-4">{column.title}</h2>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-2 text-sm">
                      <a href={link.url} className="flex items-center gap-3">
                        {link.icon && <span>{link.icon}</span>}
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <h1 className="mt-6 md:mt-0">{footerText}</h1>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-2 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer1Defaults: Footer1Props = {
  logo: {
    url: "#",
    src: "/assets/assets-29.png",
    alt: "Logo image",
    width: 163,
    height: 72,
  },
  newsletterDescription: "Join our newsletter to stay up to date.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    size: "sm",
  },
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to with our
    <a href='#' class='underline'>Privacy Policy</a>
    and provide consent to receive updates from our Organization.
  </p>
  `,
  columnLinks: [
    {
      title: "Menu",
      links: [
        { title: "Home", url: "#" },
        { title: "Agenda", url: "#" },
        { title: "Blog", url: "#" },
        { title: "Team", url: "#" },
        { title: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { title: "Facebook", url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
        { title: "Instagram", url: "#", icon: <BiLogoInstagram className="size-6" /> },
        { title: "Youtube", url: "#", icon: <BiLogoYoutube className="size-6" /> },
      ],
    },
  ],
  footerText: "© 2024 India Harvard Conference. All rights reserved.",
  footerLinks: [
    // { title: "Privacy Policy", url: "#" },
  ],
};
