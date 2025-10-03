import { ReactNode } from "react";

type SubheaderProps = {
    children?: ReactNode;
}

function Subheader(props:SubheaderProps){
    return(
        <h2 className="text-4xl font-bold text-center p-10">{props.children}</h2>
    )
}

export default Subheader;