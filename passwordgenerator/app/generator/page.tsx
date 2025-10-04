import Footerbar from "../components/footerbar";
import Navbar from "../components/navbar"
import Optionbox from "../components/option";
import Subheader from "../components/subheader";
import { useState} from "react";

function GeneratePasswords(){
    const [options, setOptions] = useState({
        readablePasswords: false,
        
    })

    return(
    <section className="bg-cyan-900 h-screen bg-cover">
        <Navbar></Navbar>
        
        <div className="sm:flex">
            <div id="settings" className="bg-gray-900 sm:w-1/3">
                <Subheader>Settings</Subheader>
                <Optionbox variant="bool" optionText="Enable Readable Passwords"></Optionbox>
            </div>

            <div id="generator" className="sm:w-1/3">
                <Subheader>Generate</Subheader>
            </div>

            <div id="information" className="sm:w-1/3">
                <Subheader>Statistics</Subheader>
            </div>
        </div>
        
        <Footerbar/>
    </section>
    )
}

export default GeneratePasswords;