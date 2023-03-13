import { useState } from "react";
import { GiAbstract092, GiComputerFan, GiDividedSquare } from "react-icons/gi";

const SideMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed left-0 top-0">
      <div
        className="h-[100px] w-full flex justify-center items-center flex-col absolute bottom-0 z-10"
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
        } w-[150px] transition-[transform] duration-300 bg-[#00435B] h-[100vh] shadow-2xl`}
      >
        <div className="w-full flex-col flex justify-center">
          <div className="flex flex-col items-center  justify-center m-10">
            <GiDividedSquare
              className="text-[#ECE2FF] h-[60px] w-[60px]
          "
            />
            <div className="text-[#ECE2FF] text-lg font-semibold">HOME</div>
          </div>
          <div className="flex flex-col items-center justify-center mb-10">
            <GiAbstract092
              className="text-[#ECE2FF] h-[60px] w-[60px]
          "
            />

            <div className="text-[#ECE2FF] text-lg font-semibold">EVENTS</div>
          </div>
          <div className="flex flex-col items-center  justify-center ">
            <GiComputerFan
              className="text-[#ECE2FF] h-[60px] w-[60px]
          "
            />

            <div className="text-[#ECE2FF] text-lg font-semibold">
              HACKATHON
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
