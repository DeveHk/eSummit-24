import Link from "next/link";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const DisplayCardDesc = ({ heading, brief, link, key }: any) => {
  const ani = useScrollAnimation(
    ["translate-x-[0]", "opacity-100"],
    ["translate-x-[200px]", "opacity-0"]
  );
  return (
    <div
      ref={ani}
      className="content flex flex-col gap-5 transition-[transform,_opacity] duration-500 translate-x-[200px] opacity-0 "
    >
      <h2 className="text-white max-w-xs m-auto text-center text-4xl my-4 font-semibold tracking-wide">
        {heading || "Event is Lit"}
      </h2>
      <p className="text-center pb-10 text-white text-lg max-w-sm m-auto">
        {brief ||
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat vel natus aliquam quidem optio fugiat odit voluptas? Sed harum labore accusamus quasi numquam dignissimos, maiores ducimus dicta recusandae in neque provident impedit, facilis officiis voluptatibus, cum delectus. Quidem autem odio totam dolore ipsam reiciendis soluta consequatur, nemo earum. Beatae!"}
      </p>
      <div className="btn text-center">
        <Link
          href={link || ""}
          className="text-xl text-white  border-2 rounded-full px-4 py-2"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default DisplayCardDesc;
