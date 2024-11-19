import React from 'react';
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps as RelumeButtonProps } from "@relume_io/relume-ui";
import Image from 'next/image';


type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type ButtonProps = RelumeButtonProps & {
  url?: string;
};

type Props = {
  heading: string;
  tagline: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header1Defaults: Header1Props = {
  heading: 'India Conference',
  tagline: 'Announcing the 22nd edition of',
  description: 'at Harvard',
  buttons: [
    { title: 'Get Tickets'},
  ],
  image: {
    url: "/",
    src: '/assets/assets-01.png',
    alt: 'Conference Image',
    width: 800,
    height: 800,
  },
};

const IconText = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <p className="text-lg subheading3 flex items-center">
    {icon}
    <span className="subheading3 ml-2">{text}</span>
  </p>
);

export const Header1 = (props: Header1Props) => {
  const { heading, tagline, description, buttons, image } = {
    ...Header1Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className="px-[5%] py-4 md:py-16 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="w-560 h-360">
            <p className="subheading1 mb-2 md:mb-2">{tagline}</p>
            <h1 className="heading1 mb-5 md:mb-1">{heading}</h1>
            <p className="subheading1 md:mb-6">{description}</p>
            <div className="subheading3 mt-6 flex flex-wrap gap-2 md:mt-8 text-base md:text-lg">
              <IconText
              icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#781E26" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 5.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              }
              text="15 Feb 2025 - 16 Feb 2025"
              />
              <IconText
              icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#781E26" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              }
              text="Harvard University"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} className="w-78 px-5 py-2" style={{ backgroundColor: '#781E26' }} {...button}>
                <a href={button.url || 'https://www.eventbrite.com/e/india-conference-at-harvard-2025-tickets-1078672762269'}>{button.title}</a>
              </Button>
              ))}
            </div>
          </div>
            <div>
            <Image src={image.src} alt={image.alt || "Logo"} width={image.width} height={image.height} style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
      </div>
    </section>
  );
};
