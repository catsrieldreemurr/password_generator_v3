import { ReactNode } from "react";

type HeaderProps = {
    children?: ReactNode;
}

function Header(props:HeaderProps){
    return(
        <h1 className="text-4xl font-bold sm:text-5xl">{props.children}</h1>
    )
}

export default Header;