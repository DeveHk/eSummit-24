import { Inter } from "@next/font/google";
import Landing from "../components/Landing/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-[100vh]">
      <Landing />
    </div>
  );
}
