import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiAbstract092, GiComputerFan, GiDividedSquare } from "react-icons/gi";

import { useRouter } from "next/router";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const SideMenu = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  /*  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );*/

  function handleResize() {
    let ele = getWindowDimensions();
    if (ele.width && ele.width >= 1080) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const ani = useScrollAnimation(
    ["opacity-100", "translate-x-[0px]", "rotate-0"],
    ["opacity-0", "translate-x-[10px]", "rotate-45"]
  );
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed left-0 top-0 z-10">
      <div
        className="h-[100px] w-full flex justify-center items-center flex-col absolute bottom-[50px] z-10"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={`${
            toggle ? "rotate-45 translate-y-[10px] h-[3px]" : "rotate-0"
          } transition-[transform,_height] duration-200 w-10 mb-2 h-[2px] bg-white rounded-2xl`}
        ></div>
        <div
          className={`${
            toggle ? "w-2" : "w-10"
          }  mb-2 h-[2px] transition-[width] duration-200 bg-[#EBE2FF] rounded-2xl`}
        ></div>
        <div
          className={`${
            toggle ? "-rotate-45 -translate-y-[10px] h-[3px]" : "rotate-0"
          } w-10 mb-2 h-[2px] transition-[transform,_height] duration-200 bg-white rounded-2xl`}
        ></div>
      </div>
      <div
        className={`${
          !toggle ? "-translate-x-[110%] " : "translate-x-[0]"
        } w-[150px] shadow-lowlit transition-[transform] duration-300 backdrop-blur-[2px] bg-black  h-[100vh] shadow-2xl`}
      >
        {/*bg-[#00435B]*/}
        <div className="h-20 w-20 absolute top-0">
          <Image
            height={100}
            width={100}
            src={"pill.svg"}
            alt={"pill"}
            className="h-full w-full animate-random"
          />
        </div>
        <div className="h-full backdrop-blur-[10px] relative">
          <div
            ref={ani}
            className="opacity-0 rotate-45 origin-top translate-x-[10px] transition-[opacity,_transform] duration-700 w-full  h-full flex-col flex justify-center items-center "
          >
            <Link href="/" className="w-full flex justify-center">
              <div
                className={`${
                  router.asPath.split("/").at(1) === ""
                    ? "bg-gradient-to-r drop-shadow-lightestbold to-[#00435B]  from-[#0CC0FF]"
                    : ""
                } flex flex-col items-center  justify-center w-[80%] h-[100px] rounded-2xl my-10`}
              >
                <GiDividedSquare
                  className="text-[#ECE2FF] h-[60px] w-[60px]
          "
                />
                <div className="text-[#ECE2FF] text-lg font-semibold">HOME</div>
              </div>
            </Link>
            <Link href="/events" className="w-full flex justify-center">
              <div
                className={`${
                  router.asPath.split("/").at(1) === "events"
                    ? "bg-gradient-to-r drop-shadow-lightestbold to-[#00435B]  from-[#0CC0FF]"
                    : ""
                } flex flex-col items-center  justify-center w-[80%] h-[100px] rounded-2xl my-10`}
              >
                <GiAbstract092
                  className="text-[#ECE2FF] h-[60px] w-[60px]
          "
                />

                <div className="text-[#ECE2FF] text-lg font-semibold">
                  EVENTS
                </div>
              </div>
            </Link>
            <Link href="/hackathon" className="w-full flex justify-center">
              <div
                className={`${
                  router.asPath.split("/").at(1) === "hackathon"
                    ? "bg-gradient-to-r drop-shadow-lightestbold to-[#00435B]  from-[#0CC0FF]"
                    : ""
                } flex flex-col items-center  justify-center w-[80%] h-[100px] rounded-2xl my-10`}
              >
                <GiComputerFan
                  className="text-[#ECE2FF] h-[60px] w-[60px]
          "
                />

                <div className="text-[#ECE2FF] text-lg font-semibold">
                  HACKATHON
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
