import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";

type Props = {
  heading?: string;
  brief?: string;
  link?: string;
  i?: number;
};

const DisplayCard = (props: Props) => {
  const { heading, brief, link, i } = props;
  const [glow, setGlow] = useState(false);
  const card = useScrollAnimation(["flip-card-inner-flip"], []);

  return (
    <div className=" z-[2] flex flex-col md:flex-row  my-6 gap-7 items-center justify-center flip-card-head py-10">
      <div
        className=" mx-4 image  basis-full  md:basis-2/3 lg:basis-1/2 aspect-video "
        onMouseOver={() => {
          setGlow(true);
        }}
        onMouseLeave={() => {
          setGlow(false);
        }}
      >
        <div
          className={`flex flex-col items-center bg-transparent  flip-card-inner-${i}`}
        >
          <div
            className={` h-[100%]  flip-card-front flip-card mt-10 flex w-[100%] items-center transition-[filter] duration-150`}
          >
            <div ref={card} className={`flip-card-inner-${i} `}>
              <div className="flip-card-front relative">
                <Image
                  src="https://unsplash.it/1600/900"
                  alt=""
                  className="rounded-xl"
                  width={1100}
                  height={400}
                  quality={1}
                ></Image>
              </div>
            </div>
          </div>
        </div>
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
