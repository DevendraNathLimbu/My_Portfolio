import React from "react";
import Skills from "./Skills";
import Tools from "./Tools";
import Deployment from "./Deployment";

const CodeEditorMock = () => {
  return (
    <div className="bg-[#1e1e1e] text-gray-200 rounded-2xl shadow-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto overflow-hidden font-mono border border-[#333] transition-all duration-300 hover:scale-[1.02]">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-[#2d2d2d] px-4 py-2 text-xs sm:text-sm text-gray-400">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <p className="truncate text-[0.65rem] sm:text-xs md:text-sm">
          CodeEditorMock.jsx — VS Code
        </p>
        <div></div>
      </div>

      {/* Code Area */}
      <div className="bg-[#1e1e1e] px-4 sm:px-6 py-4 text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto">
        <pre className="whitespace-pre-wrap">
          <code>
            <span className="text-[#569CD6]">&lt;h1&gt;</span>
            <span className="text-[#CE9178]">Hello World !!!</span>
            <span className="text-[#569CD6]">&lt;/h1&gt;</span>
            {"\n"}
            <span className="text-[#569CD6]">&lt;p&gt;</span>
            <span className="text-[#CE9178]">
              Coding is Fun Until You Dive Deeper!
            </span>
            <span className="text-[#569CD6]">&lt;/p&gt;</span>
          </code>
        </pre>
      </div>
    </div>
  );
};




export default function Body() {
    return (
        <>
        {/* This is a section for my main content */}
        <div className="min-h-[50vh] w-full flex flex-col py-0">
            <div className="title font-['headerFont'] font-bold text-3xl md:text-5xl text-center mt-5 text-[#efefef] space-y-6 whitespace-break-spaces">
                <h2>LET'S  UNITE  &  BUILD</h2>
            <h2>BRING  IDEAS  TO  LIFE</h2>
            </div>

        <div className="min-h-[24vh] w-full flex items-center justify-center">
      <CodeEditorMock />
    </div>

    <Skills />
    <Tools />
    <Deployment />
    
        </div>
        </>
    )
}