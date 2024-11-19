import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Stat = {
  percentage: string;
  heading: string;
  image: ImageProps;
  className: any;
};

type Props = {
  tagline?: string;
  heading?: string;
  description?: string;
  stats: Stat[];
  buttons?: { title: string }[];
};

export type Stats1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stats1 = (props: Stats1Props) => {
  const { tagline, heading, description, stats, buttons } = {
    ...Stats1Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <Image 
              src={stat.image.src} 
              alt={stat.image.alt || "Stat Image"} 
              width={stat.image.width} 
              height={stat.image.height} 
              className="mb-4"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className={`absolute top-10 left-10 ${stat.className}`}>{stat.percentage}</h3>
                <h3 className={`absolute bottom-10 right-10 ${stat.className}`}>{stat.heading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Stats1Defaults: Stats1Props = {
  stats: [
    { percentage: "22nd", heading: "Edition", image: { src: "/assets/asset-18.png", alt: "Image 1", width: 280, height: 346 }, className: "stat-1" },
    { percentage: "1000+", heading: "Attendees", image: { src: "/assets/asset-19.png", alt: "Image 2", width: 280, height: 346 }, className: "stat-2" },
    { percentage: "30+", heading: "Panels", image: { src: "/assets/asset-18.png", alt: "Image 3", width: 280, height: 346 }, className: "stat-1" },
    { percentage: "75", heading: "Speakers", image: { src: "/assets/asset-19.png", alt: "Image 3", width: 280, height: 346 }, className: "stat-2" },
  ],
};
