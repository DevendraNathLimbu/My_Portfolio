import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Card({ title, description, techStack, githubLink, liveLink }) {
    return(
        <>
        {/* This is a project card */}
        <div className="relative p-1 rounded-xl overflow-hidden hover:scale-101 transition-transform duration-300">
            <div className="card absolute -left-20 h-50 w-200 z-4"></div>
                <div className="h-full card_detail relative z-5 rounded-xl p-2">
                <h3 className="text-2xl md:text-3xl font-['codeFont'] font-semibold w-full text-center">{title}</h3>
            <div className="w-full flex gap-2 md:gap-4 text-[12px] md:text-[15px] font-['codeFont'] font-semibold py-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-1 text-gray-400 bg-gray-800 rounded-xl">{tech}</span>
                ))}
            </div>
            <p className="w-full text-[1em] md:text-[1.4em] font-['codeFont'] font-semibold text-justify py-4">{description}</p>
            <div className="w-full btns flex gap-4 text-xl md:text-2xl font-['codeFont'] font-semibold">
               <a href={githubLink}> <button className="rounded-xl flex items-center gap-2 px-3 py-1 cursor-pointer hover:scale-101 bg-gray-800 text-white shadow-md"><FaGithub />GitHub</button></a>
                <a href={liveLink}> <button className="rounded-xl flex items-center gap-2 px-3 py-1 cursor-pointer hover:scale-101 bg-gray-800 text-white shadow-md">Live <BsBoxArrowUpRight /></button></a>
            </div>
            </div>
        </div>
        </>
    )
}