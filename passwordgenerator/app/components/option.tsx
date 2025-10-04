"use client";

import { useState } from "react";
import { types } from "util";
import Text from "./text";
import Subheader from "./subheader";

type optionChildren = {
   variant: string,
   optionText:string,
   
}

function Optionbox({variant, optionText}: optionChildren){
    if(variant === "bool"){
        function onClickFunc(){
            setValue(!value)
            console.log(value);
        }
        return(
            <div className="flex p-5 items-center gap-5">
                {value ? 
                <button className="bg-green-400 p-6 pt-3 pb-3 rounded-xl border" onClick={onClickFunc}>Enabled</button> 
                : 
                <button className="bg-red-800 p-6 pt-3 pb-3 rounded-xl border" onClick={onClickFunc}>Disabled</button>}
                <Text>{optionText}</Text>

            </div>
        )
    }
}

export default Optionbox;