import Image from "next/image";
import Navbar from "./components/navbar";
import Footerbar from "./components/footerbar";

export default function Home() {
  return (
    <div className="bg-cyan-900 h-screen">
      <Navbar></Navbar>

      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">Catsriel's Password Generator V3</h1>
        <h2 className="text-xl text-center sm:text-2xl">The World's Worst Password Generator, 3 Times in a Row</h2>
      </div>
      <Footerbar></Footerbar>
    </div>
  );
}
