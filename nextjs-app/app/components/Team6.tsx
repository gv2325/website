import Image from 'next/image';
import { BiLogoLinkedinSquare, BiLogoDribbble } from 'react-icons/bi';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
};

type Props = {
  teamMembers: TeamMember[];
};

export type Team6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team6Defaults: Team6Props = {
  teamMembers: [
    {
      image: {
        src: "/assets/team-1.png",
        alt: "Relume placeholder image 1",
        width: 230,
        height: 320,
      },
      name: "Full name",
      jobTitle: "Job title",
    },
    {
      image: {
        src: "/assets/team-2.png",
        alt: "Relume placeholder image 2",
        width: 230,
        height: 320,
      },
      name: "Full name",
      jobTitle: "Job title",
    },
    {
      image: {
        src: "/assets/team-3.png",
        alt: "Relume placeholder image 3",
        width: 230,
        height: 320,
      },
      name: "Full name",
      jobTitle: "Job title",
    },
    {
      image: {
        src: "/assets/team-4.png",
        alt: "Relume placeholder image 4",
        width: 230,
        height: 320,
      },
      name: "Full name",
      jobTitle: "Job title",
    },
  ],
};

export const Team6 = (props: Team6Props) => {
  const { teamMembers } = {
    ...Team6Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-16 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
            src={member.image.src}
            alt={member.image.alt || "Team Member Image"}
            width={member.image.width}
            height={member.image.height}
            className="mx-auto mb-4"
              />
              <h3 className="subheading4">{member.name}</h3>
              <p className="subheading5">{member.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};