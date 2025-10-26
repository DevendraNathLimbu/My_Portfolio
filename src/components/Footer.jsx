import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <>
        <footer className="footer bg-[#FFFFFF21] backdrop-blur-[20px] flex flex-wrap gap-2 w-full text-xl py-5 mask-t-from-98%">
            <div className="w-full flex items-center text-white justify-center gap-5">
            <a href="https://github.com/DevendraNathLimbu" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/srijan-limbu-65735533a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://twitter.com/DevendraNathLimbu" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare className="text-3xl" />
            </a>
            </div>
            <div className="w-full text-lg md:text-[1.2pc] flex justify-center">
                <p>&copy; Copyright 2025. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}