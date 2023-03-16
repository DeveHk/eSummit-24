import { useRef } from "react";
import DisplayCard from "./DisplayCard";

type Props = {};

const DisplayCardsSection = (props: Props) => {
  const blobRef = useRef<any>();
  return (
    <div
      className="relative z-[2] py-10 w-full min-h-screen overflow-x-hidden overflow-y-hidden"
      onPointerMove={(e) => {
        const { clientX, clientY } = e;
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY + 100}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }}
    >
      <div className="flex z-[2]   flex-col max-w-7xl m-auto">
        <DisplayCard i={1} />
        <DisplayCard i={2} />
        <DisplayCard i={1} />
      </div>
      <div className="absolute top-0 z-[1] backdrop-blur-[12vmax] h-full w-full bg-[#231F20] bg-opacity-10"></div>
      <div
        ref={blobRef}
        className="origin-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blob aspect-square bg-gradient-to-tr from-blue-300 to-purple-600  h-[50vmax] rounded-full bg-pink-300 opacity-70 animate-rotate"
      ></div>
    </div>
  );
};

export default DisplayCardsSection;
