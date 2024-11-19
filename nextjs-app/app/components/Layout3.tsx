import Image from "next/image";

type ImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  
  type Props = {
    heading: string;
    description: string;
    image: ImageProps;
  };
  
  export type Layout3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout3 = (props: Layout3Props) => {
    const { heading, description, image } = {
      ...Layout3Defaults,
      ...props,
    } as Props;
    return (
      <section id="relume" className="">
        <div className="container1">
          <div className="grid grid-cols-1 gap-y-0 md:grid-cols-2 md:items-center ">
            <div className="bg-[#781E26] p-6" style={{ width: '100%', height: '100%' }}>
              <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {heading}
              </h1>
              <p className="md:text-md">{description}</p>
            </div>
            <div>
              <Image src={image.src} className="w-full object-cover" alt={image.alt || "Image Default"} width={image.width} height={image.height} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout3Defaults: Layout3Props = {
    heading: "Long heading is what you see here in this feature section",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: {
      src: "/assets/asset-32.png",
      alt: "India Conference Splash",
      width: 701,
      height: 800,
    },
  };
  