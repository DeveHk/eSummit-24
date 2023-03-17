import Image from "next/image";
import { useState } from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const FeaturedTile = ({ evedet }: any) => {
  const [glow, setGlow] = useState(false);
  const ani = useScrollAnimation(
    ["translate-y-[0px]", "opacity-100"],
    ["translate-y-[100px]", "opacity-0"]
  );
  return (
    <div
      ref={ani}
      className="transition-[transform,_opacity] translate-y-[100px] duration-300 opacity-0 w-full  lg:mx-[10%] lg:w-[80%] flex-col flex  lg:flex-row rounded-2xl overflow-hidden bg-[#D3BAFF] backdrop-blur-[8px] bg-opacity-10 shadow-extrasoft border border-1 border-[#575F8E]"
      onMouseOver={() => {
        setGlow(true);
      }}
      onMouseLeave={() => {
        setGlow(false);
      }}
    >
      <div className=" overflow-hidden">
        <Image
          alt="eveimg"
          src={`/${evedet.img}`}
          height={100}
          width={100}
          className={`${
            glow ? "scale-150" : "scale-100"
          } h-full transition-[transform] duration-[3s] rounded-lg w-full`}
        />
      </div>
      <div className="p-5  text-gray-300">
        <div className="text-lg mt-4 text-[#8F9DBA] tracking-wide ">
          <span className="">{evedet.date}</span>
          <span className="">{evedet.time}</span>
        </div>
        <div className="text-3xl font-semibold mt-4">{evedet.name}</div>
        <div className="text-md mt-4">
          {evedet.description.slice(0, 70)} . . .
        </div>
        <div className="mt-4">
          <button className="text-white bg-gradient-to-r px-10 py-2 text-xl rounded-3xl hover:from-[#2C59A4] hover:to-[#89EBFC]  from-[#2E3495] to-[#22DFE0] transition-[background-image] duration-200 ">
            Event Details
          </button>
        </div>
        <div className="flex mt-7">
          {evedet.hash.map((e: any, i: any) => {
            return (
              <div
                className="mr-5 px-2 py-1 bg-slate-400 bg-opacity-10 rounded-3xl text-gray-400 hover:bg-opacity-[20%] transition-[--tw-bg-opacity] duration-200 "
                key={i}
              >
                #{e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTile;
