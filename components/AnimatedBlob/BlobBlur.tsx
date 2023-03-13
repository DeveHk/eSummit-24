import { useRef } from "react";

type Props = {};

const BlobBlur = (props: Props) => {
  const blobRef = useRef<any>();
  return (
    <>
      <div
        className="absolute top-0 z-[1] backdrop-blur-[12vmax] h-full w-full bg-black bg-opacity-10"
        onPointerMove={(e) => {
          const { clientX, clientY } = e;
          blobRef.current.animate(
            {
              left: `${clientX}px`,
              top: `${clientY}px`,
            },
            { duration: 3000, fill: "forwards" }
          );
        }}
      ></div>
      <div
        ref={blobRef}
        className="origin-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blob aspect-square bg-gradient-to-tr from-blue-300 to-purple-600  h-[34vmax] rounded-full bg-pink-300 opacity-70 animate-rotate"
      ></div>
    </>
  );
};

export default BlobBlur;
