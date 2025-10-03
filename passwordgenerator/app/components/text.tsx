import { ReactNode } from "react";

type TextProps = {
    children?: ReactNode;
}

function Text(props:TextProps){
    return(
        <h1 className="text-xl sm:text-2xl">{props.children}</h1>
    )
}

export default Text;