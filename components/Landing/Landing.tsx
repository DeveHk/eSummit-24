import SideMenu from "../SideNavbar/SideMenu";
import About from "./About";
import Header from "./Header";

const Landing = () => {
  return (
    <div className="bg-[#231F20] w-full min-h-[100vh] relative">
      <Header />
      <About />
      <SideMenu />
    </div>
  );
};

export default Landing;
