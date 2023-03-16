import Link from "next/link";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="h-screen py-6 flex flex-col gap-12 bg-[#231F20]">
      <h2
        className="text-center text-7xl font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-[#57EFFE] to-[#DFCFFF]
      "
      >
        Reach out to Us!
      </h2>
      <div className="flex items-center justify-center grow">
        <form className="text-white w-[40%] rounded-md backdrop-blur-md">
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
              className="bg-[#232323] px-4 py-3 rounded w-1/2"
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
          <button
            className="py-2 px-8 text-lg font-bold border rounded-full
          hover:bg-gradient-to-r from-[#57EFFE] to-[#DFCFFF]
            duration-300
            hover:text-black
            "
          >
            Submit
          </button>
        </form>
      </div>
      <nav className="text-gray-400 ml-auto mr-12 text-xl flex items-center gap-8">
        <span>&copy; Ecell-NSUT, 2023</span>
        <Link href="/events" className="cursor-pointer relative group">
          <span>Events</span>
          <span
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-400
           transform scale-x-0 origin-center transition-all duration-300 group-hover:scale-x-100"
          ></span>
        </Link>
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
