import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-teal-600 p-4">
            <ul className="flex gap-10 items-center">
                <li> <Link href="https://youtube.com/@CatsrielDreemurr"><Image src={"/catsrieldreemurr.png"} alt="catsrieldreemurr" width="200" height="200"></Image></Link></li>
                <li> <Link href="/" className="text-white p-2 sm:p-4  rounded-sm hover:bg-teal-700 text-xl">Information</Link></li>
                <li> <Link href="/generator" className="text-white p-2 sm:p-4 rounded-sm hover:bg-teal-700 text-xl">Generate</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;