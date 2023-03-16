import Image from "next/image";
import { useState } from "react";
import { GiAbstract010, GiBeastEye } from "react-icons/gi";
const Slide = () => {
  const [zoom, setZoom] = useState(false);
  const zommp = () => {};
  return (
    <div
      className=" w-full  m-5 h-full"
      onMouseOver={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
    >
      <div className="h-full w-full relative overflow-hidden rounded-2xl">
        <div
          className={` h-full w-full absolute top-0 bg-opacity-20 backdrop-blur-[8px] bg-[#00435B] rounded-2xl p-10 transition-all duration-200 z-10 ${
            zoom ? "opacity-100" : "opacity-0"
          } `}
        >
          <GiBeastEye className="h-20 w-20 text-white drop-shadow-semibold " />
        </div>
        <Image
          className={`h-full w-full rounded-2xl transition-all duration-500 ${
            zoom ? "scale-150" : "scale-100"
          }`}
          height={100}
          width={100}
          src="/camellion.jpg"
          alt="img"
        ></Image>
      </div>
      <div className="h-[50px]  w-full flex items-center ">
        <div className="h-[50px] w-[50px] p-1 ">
          <GiAbstract010 className="w-full  h-full  text-[#ECE2FF] "></GiAbstract010>
        </div>
        <div className="flex flex-col justify-start pl-5 text-white">
          <div className=" text-2xl font-semibold">lorem</div>
          <p className="text-slate-400 "> Lorem, ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
