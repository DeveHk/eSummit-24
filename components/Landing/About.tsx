import useScrollAnimation from "../Hooks/useScrollAnimation";

const About = () => {
  {
    /*const aniabt = useScrollAnimation(
    ["opacity-1", "translate-x-[0]"],
    ["opacity-0", "-translate-y-[100px]"]
  );*/
  }
  const anicon = useScrollAnimation(
    ["opacity-1", "translate-x-[0]"],
    ["opacity-0", "translate-y-[100px]"]
  );
  const ani1 = useScrollAnimation(
    ["opacity-1", "translate-x-[0]"],
    ["opacity-0", "-translate-x-[200px]"]
  );
  const ani2 = useScrollAnimation(
    ["opacity-1", "translate-x-[0]"],
    ["opacity-0", "md:translate-y-[200px]", "translate-x-[200px]"]
  );
  const ani3 = useScrollAnimation(
    ["opacity-1", "translate-x-[0]"],
    ["opacity-0", "md:translate-x-[200px]", "-translate-x-[200px]"]
  );
  return (
    <div className="text-white flex justify-center flex-col items-center font-sans py-20 my-10 md:my-32 px-10 md:px-[10%]">
      <h1
        className=" text-6xl font-semibold "
        //'transition-[transform,_opacity] opacity-0 -translate-y-[100px] duration-100' ref={aniabt}
      >
        Lorem, ipsum.
      </h1>
      <div
        ref={anicon}
        className="opacity-0 translate-y-[100px] duration-1000 transition-[transform,_opacity] text-4xl mt-5 text-center px-5 py-10 mb-10 border-white  border-b-[1px]"
      >
        Connecting individuals and communities together in the metaverse,
        enabling the creation and exploration of virtual worlds from any device.
      </div>
      <div className="grid grid-cols-3 text-center">
        <div
          ref={ani1}
          className="md:border-r-[1px] opacity-0 transition-[transform,_opacity]  duration-1000 -translate-x-[200px] border-b-[1px] md:border-b-[0px] py-10 flex flex-col items-center col-span-3 md:col-span-1"
        >
          <h1 className="text-4xl font-bold mb-4 ">WORLD</h1>
          <p className="text-lg px-2 pb-10">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <div className=" border w-[200px] py-2 bg-transparent hover:bg-[#57EFFE] hover:text-black transition-[background-color,_color,_---tw-bg-opacity] duration-500 hover:bg-opacity-80  bg-opacity-100 text-lg rounded-3xl">
            Explore
          </div>
        </div>
        <div
          ref={ani2}
          className="opacity-0 transition-[transform,_opacity] duration-1000 translate-x-[200px]  md:translate-x-[0] md:translate-y-[200px] border-b-[1px] md:border-b-[0px] py-10 flex flex-col items-center col-span-3 md:col-span-1"
        >
          <h1 className="text-4xl font-bold mb-4 ">WORLD</h1>
          <p className="text-lg px-2 pb-10">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <div className=" border w-[200px] py-2 bg-transparent hover:bg-[#57EFFE] hover:text-black transition-[background-color,_color,_---tw-bg-opacity] duration-500 hover:bg-opacity-80  bg-opacity-100 text-lg rounded-3xl">
            Explore
          </div>
        </div>
        <div
          ref={ani3}
          className="opacity-0 transition-[transform,_opacity] -translate-x-[200px]  md:border-l-[1px] duration-1000 md:translate-x-[200px]  flex flex-col items-center col-span-3 py-10 md:col-span-1"
        >
          <h1 className="text-4xl font-bold mb-4 ">WORLD</h1>
          <p className="text-lg px-2 pb-10">
            Explore the diverse worlds within VIVERSE, including exciting
            collaborations and exhibitions with partners.
          </p>
          <div className=" border w-[200px] py-2 bg-transparent hover:bg-[#57EFFE] hover:text-black transition-[background-color,_color,_---tw-bg-opacity] duration-500 hover:bg-opacity-80  bg-opacity-100 text-lg rounded-3xl">
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
