import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-sky-800 p-3">
            <ul className="flex gap-10 items-center">
                <li> <Link href="https://youtube.com/@CatsrielDreemurr"><Image src={"/catsrieldreemurr.png"} alt="catsrieldreemurr" width="200" height="200"></Image></Link></li>
                <li> <Link href="/" className="text-white p-2 rounded-sm hover:bg-sky-700">Information</Link></li>
                <li> <Link href="/generator" className="text-white p-2 rounded-sm hover:bg-sky-700">Generate</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;