import { Inter } from "@next/font/google";
import DisplayCardsSection from "../components/DisplayCards/DisplayCardsSection";
import Footer from "../components/Landing/Footer";
import Landing from "../components/Landing/Landing";
import Sponse from "../components/Sponser/Sponse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[100vh]">
        <Landing />
      </div>
      <div className="DisplayCards">
        <DisplayCardsSection />
      </div>
      <div className="">
        <Sponse />
      </div>
      <div className="min-h-[100vh]">
        <Footer />
      </div>
    </>
  );
}
