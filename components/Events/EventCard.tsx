import Image from "next/image";
import Link from "next/link";

interface EventCardType {
  eventName: string;
  eventImage: string;
  eventShortDescription: string;
  registrationLink: string;
}

const EventCard: React.FC<EventCardType> = ({
  eventName,
  eventImage,
  eventShortDescription,
  registrationLink,
}) => {
  return (
    <div
      className="bg-[#151515] rounded-md h-[450px] overflow-hidden 
		transition-transform duration-500 hover:scale-105"
    >
      <header className="h-1/2 relative">
        <Image src={eventImage} alt="Event Image" fill />
      </header>
      <div className="px-4 py-4 h-1/2 flex flex-col">
        <h4
          className="text-center mb-2 font-bold text-lg
				text-transparent bg-clip-text bg-gradient-to-r from-[#57EFFE] to-[#DFCFFF] "
        >
          {eventName}
        </h4>
        <p className="text-gray-400 text-sm">{eventShortDescription}</p>
        <div className="mt-auto flex flex-col gap-4">
          <Link
            href={`/events/${eventName}`}
            className="text-sm text-[#DFCFFF] flex items-center gap-2"
          >
            Read more...
          </Link>
          <Link
            href={registrationLink}
            className="text-center duration-300 transition-colors
					bg-gradient-to-r from-[#57EFFE] to-[#DFCFFF] rounded py-1
					font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
