import SponIcon from "./SponIcon";

const Sponse = () => {
  return (
    <div className="min-h-[80vh] p-10 md:px-20 lg:px-28 w-full flex flex-col  items-center bg-white">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#0FDCE7] via-[#00435B]">
        Our Partners
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4  mt-20 md:mt-32 lg:mt-36 lg:grid-cols-5 w-full h-full">
        {Array.apply(null, Array(10)).map((i, j) => (
          <SponIcon key={i}></SponIcon>
        ))}
      </div>
    </div>
  );
};

export default Sponse;
