"use client";

import { useState } from "react";
import { types } from "util";
import Text from "./text";
import Subheader from "./subheader";

type optionChildren = {
   variant: string,
   optionText:string,
   
   value: boolean,
   setValue: React.Dispatch<React.SetStateAction<number>>;
}

function Optionbox({variant, optionText, value, setValue}: optionChildren){
    
}

export default Optionbox;