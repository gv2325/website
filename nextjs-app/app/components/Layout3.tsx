import Image from "next/image";

type ImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};
  
type Props = {
    heading: string;
    description: string[];  // Changed to array of strings
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
            <div className="container">
                <div className="grid grid-cols-1 gap-y-0 md:grid-cols-2 md:items-center">
                    <div className="bg-[#781E26] p-8 md:p-24" style={{ width: '100%', height: '100%' }}>
                        <h1 className="h2">
                            {heading}
                        </h1>
                        <div className="space-y-4">
                            {description.map((paragraph, index) => (
                                <p key={index} className="body-large">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Image 
                            src={image.src} 
                            className="w-full object-cover" 
                            alt={image.alt || "Image Default"} 
                            width={image.width} 
                            height={image.height} 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
  
export const Layout3Defaults: Layout3Props = {
    heading: "Conference Theme",
    description: [
        "In a world marked by rapid technological, economic and geopolitical shifts, India's role on the international stage has never been more significant. Our theme this year, celebrates India's journey as a global contributor and explores how Indian innovations, ideas and voices are shaping pathways for shared peace and prosperity worldwide.",
        "The India Conference will bring together visionary leaders and prominent voices to discuss India's distinctive perspectives on critical issues that affect the world: technology, climate action, economic growth, democracy, diplomacy, cultural exchange, and more. Through these conversations, we aim to highlight the unique learnings from India's journey that resonate far beyond its borders."
    ],
    image: {
        src: "/assets/asset-32.png",
        alt: "India Conference Splash",
        width: 701,
        height: 800,
    },
};