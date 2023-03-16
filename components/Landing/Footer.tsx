import Image from "next/image";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="h-screen py-6 flex flex-col gap-12 bg-[#231F20] relative">
      <div className="drop-shadow-lowGlowtext absolute left-[20%] top-[20%]">
        <div className="w-[150px] absolute top-0 h-[150px] tridoc3">
          <Image
            src={"/layer1.svg"}
            className="w-full h-full"
            alt={""}
            height={100}
            width={100}
          />{" "}
        </div>
        <div className="w-[150px] h-[150px] absolute top-[15px] left-[20px] tridoc2">
          <Image
            src={"/layer2.svg"}
            className="w-full h-full"
            alt={""}
            height={100}
            width={100}
          />{" "}
        </div>
        <div className="w-[150px] h-[150px] absolute top-[30px] left-[40px]  tridoc1">
          <Image
            src={"/layer3.svg"}
            className="w-full h-full"
            alt={""}
            height={100}
            width={100}
          />{" "}
        </div>
      </div>
      <h2
        className="text-center text-7xl font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-[#31a0ab] to-[#DFCFFF]
      "
      >
        Reach out to Us!
      </h2>
      <div className="flex items-center justify-center grow ">
        <form className="text-white w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%] max-w-[600px]  rounded-2xl backdrop-blur-md p-10 bg-opacity-10  bg-[#CCAEFF]">
          <div className="mb-4">
            <label
              htmlFor="contact-name"
              className="font-semibold block mb-2 text-xl"
            >
              Name <span className="text-[#0CC0FF]">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              className="bg-[#232323] px-4 py-3 rounded w-full"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact-email"
              className="font-semibold block mb-2 text-xl"
            >
              Email <span className="text-[#0CC0FF]">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              className="bg-[#232323] px-4 py-3 rounded w-full"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact-message"
              className="font-semibold block mb-2 text-xl"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              className="bg-[#232323] px-4 py-3 rounded w-full overflow-y-auto resize-none"
              placeholder="I would like to..."
              rows={4}
            ></textarea>
          </div>
          <div className="w-full flex justify-center h-full">
            <button
              className="py-2 px-8 w-[50%] text-lg font-bold border rounded-full
          hover:bg-gradient-to-r box-border from-[#a000d2] to-[#ccaeff]
          hover:border-none
            duration-300
            hover:text-black 
            "
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <nav className="text-gray-400  text-xl flex items-center justify-around w-full md:px-[4%] lg:px-[10%]">
        <span>&copy; Ecell-NSUT, 2023</span>
        <a className="cursor-pointer relative group">
          <span>Events</span>
          <span
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400
           transform scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100"
          ></span>
        </a>
        <a className="cursor-pointer relative group">
          <span>Hackathon</span>
          <span
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400
           transform scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100"
          ></span>
        </a>
        <a className="cursor-pointer relative group" onClick={scrollToTop}>
          <span>Back to Top</span>
          <span
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400
           transform scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100"
          ></span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
