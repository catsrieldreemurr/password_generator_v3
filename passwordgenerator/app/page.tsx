import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footerbar from "./components/footerbar";
import Header from "./components/header";
import Text from "./components/text";
import Subheader from "./components/subheader";
import InfoBox from "./components/infobox";

export default function Home() {
  return (
    <div className="bg-cyan-900 bg-cover flex flex-col">
      <Navbar></Navbar>

      <div className="flex flex-1 flex-col justify-center items-center text-center min-h-screen">
        <div className="bg-black/60 p-10 rounded-lg">
        <Header>Catsriel's Password Generator v.3</Header>
        <Text>The World's Worst Password Generator</Text>
        </div>
      </div>
      
      <section id="info" className="bg-gray-900 p-2 sm:flex">
        <InfoBox>
          <Subheader>About The Generator</Subheader>
          <Text>Catsriel's Password Generator is a no-bullshit password generator written in Next.js.</Text>
          <Text>This is the third iteration of a Password Generator, with the goal of being very customizable.</Text>
          <Text>The Generator's code is on Github for anyone that wants to take a look.</Text>
          <Text>Generated Passwords are never saved anywhere.</Text>
          <Text>This is an expanded version of 2 Older Projects of Mine, both of which were written in Vanilla HTML/CSS/JS.</Text>

          <Subheader>Password Manager</Subheader>
          <Text>This Generator is primarily built with Password Manager's in mind.</Text>
          <Text>This is not required, but highly recommended, especially for standard passwords.</Text>
          <Text>Standard Passwords are long strings of random characters, so a Password manager is recommended.</Text>
          <Text>My Personal Recommendation for a Password Manager is Bitwarden, as it's easy to use, and free.</Text>

          <Subheader>Password Types</Subheader>
          <Text>This Generator can currently be used to generate 2 Password Types:</Text>
          <div className="m-10">
            <Text><b> - Standard Password </b></Text>
            <Text>A String of fully Random Characters. (Recommended for most uses)</Text>
          </div>
          <div className="m-10">
            <Text><b> - Readable / Master Passwords </b></Text>
            <Text>A Collection of Randomly choicen Dictionary Words, Random Numbers and A Special Character.</Text>
            <Text>Example: <b> PublishIntensifyPoemIntensify971#</b></Text>
            <Text>These passwords are intended to act as passwords that you need to memorize yourself, such as for Master Passwords.</Text>
            <Text>Readable Passwords should Always be written down and kept somewhere safe.</Text>
          </div>
        </InfoBox>

        <InfoBox>
          <Subheader>Defaults, Limits and Recommendations</Subheader>
          <Text>The Generators has a couple of Limitations:</Text>

          <div className="m-10 text-left">
            <Text> <b> - Standard-Generator has a Maximum of 200 Characters</b> </Text>
            <Text> <b> - Readable-Generator has a Maximum of 20 Words</b> </Text>
          </div>

          <Text>Recommendations:</Text>

          <div className="m-10 text-left">
            <Text> <b> - Standard Passwords should be 20 or more Characters. (Default is 20)</b> </Text>
            <Text> <b> - Readable Passwords should be 6 or more Words (Default is 6)</b> </Text>
          </div>

          <Subheader>Links and Credits</Subheader>
          <div className="text-left">
            <Text> - Created by <Link className="text-red-200" href="https://Youtube.com/@CatsrielDreemurr">@CatsrielDreemurr</Link> </Text>
            <Text> - Version 2 (OLD) - <Link className="text-red-200" href="https://catsrieldreemurr.github.io/CatsrielsPasswordGenerator/index.html">Link</Link></Text>
          </div>


        </InfoBox>
      </section>

      <Footerbar></Footerbar>
    </div>
  );
}
