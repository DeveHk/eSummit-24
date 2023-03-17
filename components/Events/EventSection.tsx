import FeaturedTile from "./FeaturedTile";
import Tile from "./Tile";
const evedet = [
  {
    name: "lorem",
    img: "eve.svg",
    description:
      "];Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique consectetur possimus atque quas ipsum ullam quod dolor nobis reiciendis?",
    date: "Fri, April 7, 2023",
    time: "12:00 PM",
    rule: "lorem",
    hash: ["lorem", "ipsum"],
  },
  {
    name: "lorem",
    img: "eve.svg",
    description:
      "];Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique consectetur possimus atque quas ipsum ullam quod dolor nobis reiciendis?",
    date: "Fri, April 7, 2023",
    time: "12:00 PM",
    rule: "lorem",
    hash: ["lorem", "ipsum"],
  },
  {
    name: "lorem",
    img: "eve.svg",
    description:
      "];Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, similique consectetur possimus atque quas ipsum ullam quod dolor nobis reiciendis?",
    date: "Fri, April 7, 2023",
    time: "12:00 PM",
    rule: "lorem",
    hash: ["lorem", "ipsum"],
  },
];
const EventSection = () => {
  return (
    <div className="p-10">
      <h2
        className="text-center text-6xl mb-10 font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-[#31a0ab]  to-[#DFCFFF]
      "
      >
        Featured Events
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-1  md:grid-cols-2 gap-10 overflow-hidden">
        {evedet.map((eve, i) => {
          return <FeaturedTile key={i} evedet={eve} />;
        })}
      </div>
      <h2
        className="text-center text-6xl mb-10 font-bold
      text-transparent mt-32 bg-clip-text bg-gradient-to-r from-[#31a0ab]  to-[#DFCFFF]
      "
      >
        Events
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-10 overflow-hidden">
        {evedet.map((eve, i) => {
          return <Tile key={i} evedet={eve} />;
        })}
      </div>
    </div>
  );
};

export default EventSection;
