import Link from "next/link";
import React from "react";

function Footerbar(){
    return(
        <footer className="bg-black text-lg text-center p-10">
            <p>Created by <Link href="https://youtube.com/@CatsrielDreemurr" className="text-red-200 font-bold">@CatsrielDreemurr</Link></p>
            <p>View the Source Code <Link className="text-red-200 font-bold" href={"https://github.com/twomuchCatsriel/password_generator_v3"}>Here</Link> :D</p>
        </footer>
    );
}

export default Footerbar;