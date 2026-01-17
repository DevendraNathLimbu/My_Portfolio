import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { RiGuideLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);


export default function Navbar() {
      const navRef = useRef();
      const tl = useRef();

      useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(navRef.current, {
        right: "-10%", 
        duration: 0.5,
        ease: "power3.out"
      });
  }, []);

  const openNav = () => {
    tl.current.play();
  };

  const closeNav = () => {
    tl.current.reverse();
  };

    return (<>
     <nav className="left-1/2 -translate-x-1/2 w-[85%] bg-[#FFFFFF22] backdrop-blur-[20px] font-['codeFont'] flex items-center justify-between col h-18 px-5 border-[#aabbcc] border-1 rounded-2xl">
              <Link to="/" className="logo relative h-16 w-16 block border-0 rounded-full">
                <div className="bg-[url('./assets/images/logo.png')] bg-cover bg-center h-[100%] w-[100%]"> </div>
                 </Link>
                     
    
                 <HiMenuAlt1 onClick={openNav} className="menu text-[50px] text-[#ffffffd6] md:hidden" />
                    <ul ref={navRef} className="nav-links bg-[rgb(50,50,50)] backdrop-blur-[20px] rounded-xl md:rounded-0 md:bg-transparent md:backdrop-blur-[-50px] absolute right-[-90%] top-0 md:top-0 md:relative md:right-0 md:h-full text-white text-3xl md:text-4xl md:text-[26px] md:gap-10 md:flex items-center list-none md:p-0 md:m-0 px-4 md:px-5 py-6">
                        <RxCross2 onClick={closeNav} className="text-red-600 absolute right-1 top-0 md:hidden font-bold z-100" />
                        <li className="md:mb-0 mb-4 flex items-center gap-3"><BiHomeAlt className="icon text-white md:hidden" /> <Link to="/">Home</Link></li>
                        <li className="md:mb-0 mb-4 flex items-center gap-3"><FaProjectDiagram className="icon text-white md:hidden" /><Link to="/projects">Projects</Link></li>
                        <li className="md:mb-0 mb-4 flex items-center gap-3"><FaBloggerB className="icon text-white md:hidden" /><Link to="/blogs">Blogs</Link></li>
                        <li className="md:mb-0 mb-4 flex items-center gap-3"><RiGuideLine className="icon text-white md:hidden" /><Link to="/guidance">Guidance</Link></li>
                        <li className="md:mb-0 mb-4 flex items-center gap-3"><IoMdContact className="icon text-white md:hidden" /><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
    </>)
}