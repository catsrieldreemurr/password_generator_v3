import Link from "next/link";
import React from "react";

function Footerbar(){
    return(
        <footer className="bg-black">
            <p>Created by <Link href="https://youtube.com/@CatsrielDreemurr" className="text-red-200">@CatsrielDreemurr</Link></p>
        </footer>
    );
}

export default Footerbar;