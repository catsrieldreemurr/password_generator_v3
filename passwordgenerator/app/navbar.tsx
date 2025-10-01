import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-sky-800 p-3">
            <ul className="flex gap-10 align-items-center">
                <li> <Image src={"/catsrieldreemurr.png"} alt="catsrieldreemurr" width="200" height="200"></Image></li>
                <Link href="https://Youtube.com" className="text-white p-2">Information</Link>
            </ul>
        </nav>
    )
}

export default Navbar;