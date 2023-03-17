import SideMenu from "../SideNavbar/SideMenu";
import EventSection from "./EventSection";

const Event = () => {
  return (
    <div className="bg-[#231F20] w-full min-h-[100vh] relative">
      <SideMenu />
      <EventSection />
    </div>
  );
};

export default Event;
