import { ReactNode } from "react";

type InfoBoxProps = {
    children?: ReactNode;
}

function InfoBox(props: InfoBoxProps){
    return(
        <div className="pb-5 pr-1 pl-1 bg-gray-800 rounded-lg m-2 text-center sm:w-1/2 sm:pr-5 sm:pl-5">{props.children}</div>
    )
}

export default InfoBox;