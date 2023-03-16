import EventCard from "../../components/Events/EventCard";
import eventsData from "../../public/events.json";

export default function Events() {
  return (
    <div className="py-4 px-20">
      <h1
        className="text-center text-7xl font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-[#57EFFE] to-[#DFCFFF]
      mb-6
      "
      >
        Our Events
      </h1>
      {eventsData.map(({ categoryName, events }) => (
        <div className="mb-8">
          <h3 className="text-white text-2xl mb-6">{categoryName}</h3>
          <div className="grid grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard {...event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
