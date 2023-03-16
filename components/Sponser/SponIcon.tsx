import { GiChemicalBolt } from "react-icons/gi";
import useScrollAnimation from "../Hooks/useScrollAnimation";
const SponIcon = (prop: any) => {
  const ani = useScrollAnimation(
    ["scale-110", "translate-y-[0px]"],
    ["scale-[1%]", "translate-y-[100px]"]
  );
  return (
    <div
      ref={ani}
      className="h-full w-full p-[20%] lg:p-[30%] scale-[1%] translate-y-[100px] transition-[transform] duration-400"
    >
      <GiChemicalBolt className="h-full w-full"> </GiChemicalBolt>
    </div>
  );
};

export default SponIcon;
