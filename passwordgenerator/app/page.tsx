import Image from "next/image";
import Navbar from "./components/navbar";
import Footerbar from "./components/footerbar";

export default function Home() {
  return (
    <div className="bg-cyan-900 h-screen bg-cover flex flex-col">
      <Navbar></Navbar>

      <div className="flex flex-1 flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Catsriel's Password Generator V3</h1>
        <h2 className="text-xl sm:text-2xl">The World's Worst Password Generator, 3 Times in a Row</h2>
      </div>
    </div>
  );
}
