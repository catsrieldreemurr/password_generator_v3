import { ReactNode } from "react";

type InfoBoxProps = {
    children?: ReactNode;
}

function InfoBox(props: InfoBoxProps){
    return(
        <div className="pl-5 pr-5 pb-5 bg-gray-800 rounded-lg m-2 text-center sm:w-1/2">{props.children}</div>
    )
}

export default InfoBox;