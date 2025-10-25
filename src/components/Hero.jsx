import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import TiltCard from "./Tilt";

export default function Hero() {
    return (
        <>
        <div className="bio relative w-full flex md:flex-row flex-col">
            <section className="md:w-[55%] py-12 text-[#efefef] md:px-0">
             <div>
                {/* This is a brief introduction about myself */}
                <h1 className="name font-['headerFont'] font-[900] text-3xl md:text-5xl ">Devendra Nath Limbu</h1>
                <span className="title font-['codeFont'] text-gray-400 font-[600] text-xl">Web Developer</span>
             </div>
             <p className="my-6 font-['codeFont'] font-[600] md:text-2xl text-justify">An undergraduate CS student 
                with a dream and passion. Learning, experimenting and breaking things on purpose. Life’s a bit chaotic, the future’s still a mystery, but coding my way through it one bug at a time. I believe in following passion over perfection, dreams over doubts, and enjoying the process of becoming better every single day.
                <br /> <br />
                 Learning to code has been an incredible journey of self-discovery and growth for me. It's not just about writing lines of code; it's about solving problems, thinking critically, and creating something out of nothing. Each project I undertake is a new adventure that challenges me to push my limits and expand my horizons. Through coding, I've learned the value of perseverance, creativity, and continuous learning. I'm excited to see where this journey takes me next!
             </p>

             {/* This is a list of technologies I work with */}
             <div className="w-full md:w-auto flex items-center md:justify-start justify-center gap-3 mt-10">
                <div className="relative flex flex-col items-center">
                    <SiMongodb className="mern text-green-500 text-5xl md:text-6xl cursor-pointer transition-all duration-300"/>
                    <h5 className="txt absolute hidden font-['codeFont'] font-semibold text-xl transition-all duration-300">MongoDB</h5>
                </div>
                <div className="relative flex flex-col items-center">
                    <SiExpress className="mern text-gray-400 text-5xl md:text-6xl cursor-pointer transition-all duration-300"/>
                    <h5 className="txt absolute hidden font-['codeFont'] font-semibold text-xl transition-all duration-300">Express</h5>
                </div>
                <div className="relative flex flex-col items-center">
                    <FaReact className="mern text-blue-500 text-5xl md:text-6xl cursor-pointer transition-all duration-300"/>
                    <h5 className="txt absolute hidden font-['codeFont'] font-semibold text-xl transition-all duration-300">React</h5>
                </div>
                <div className="relative flex flex-col items-center">
                    <IoLogoNodejs className="mern text-green-600 text-5xl md:text-6xl cursor-pointer transition-all duration-300"/>
                    <h5 className="txt absolute hidden font-['codeFont'] font-semibold text-xl transition-all duration-300">Node.js</h5>
                </div>

             </div>
            </section>

               {/* This is a section for my photo */}
            <section className="hidden md:flex py-38 justify-center relative w-[45%] mt-0">
                {/* <div className="picture mt-37 absolute rotate-6 -right-10 w-[60%] h-[60%] bg-[url('./assets/images/flag.png')] bg-cover bg-center z-0"> </div>
               <div className="absolute -left-15 w-[80%] h-[80%] bg-[url('./assets/images/ok.png')] bg-cover bg-center z-2"></div> */}
               <TiltCard>
                   
               </TiltCard>
            </section>
        </div>
        </>
    )
}