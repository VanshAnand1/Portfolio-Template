import Carousel3D, { type Carousel3DItem } from "./lightswind/carousel-3d";

const title = "Title";
const subtitle = "Subtitle";
const tagline = "Tagline";

const items: Carousel3DItem[] = [
  {
    id: 1,
    title: "Title 1",
    brand: "Company",
    description: "Description",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
  {
    id: 2,
    title: "Title 2",
    brand: "Company",
    description: "Description",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
  {
    id: 3,
    title: "Title 3",
    brand: "Company",
    description: "Description",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
  {
    id: 4,
    title: "Title 4",
    brand: "Company",
    description: "Description",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
];

export const Projects = () => {
  return (
    <section className="relative top-80 px-4 md:px-6 py-12 flex justify-center">
      <Carousel3D
        items={items}
        autoRotate
        rotateInterval={4000}
        cardHeight={500}
        isMobileSwipe
        title={title}
        subtitle={subtitle}
        tagline={tagline}
      />
    </section>
  );
};
