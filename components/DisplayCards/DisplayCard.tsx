import Link from "next/link";

type Props = {
  heading?: string;
  brief?: string;
  link?: string;
};

const DisplayCard = (props: Props) => {
  const { heading, brief, link } = props;

  return (
    <div className=" z-[2] flex flex-col md:flex-row  my-6 gap-7 items-center justify-center">
      <div className=" mx-4 image  basis-full  md:basis-2/3 lg:basis-1/2 aspect-video">
        <img src="https://unsplash.it/1600/900" alt="" className="rounded" />
      </div>
      <div className="content flex flex-col gap-5">
        <h2 className="text-white max-w-xs m-auto text-center text-4xl my-4 font-semibold tracking-wide">
          {heading || "Event is Lit"}
        </h2>
        <p className="text-center text-white text-lg max-w-sm m-auto">
          {brief ||
            "Event is very lit Lorem, ipsum dolor. Lorem ipsum dolor sit."}
        </p>
        <div className="btn text-center">
          <Link
            href={link || ""}
            className="text-xl text-white  border-2 rounded-full px-4 py-2"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
