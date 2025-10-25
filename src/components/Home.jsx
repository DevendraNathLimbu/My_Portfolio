
import Hero from "./Hero.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Blogs from "./Blogs.jsx";
import Contact from "./Contact.jsx";
import Guidance from "./Guidance.jsx";
import ScrollToTop from "./ScrollOnTop.jsx";
import { Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";


export default function Home() {
const glowRef = useRef(null);
const ballRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      // Glow (faster follow)
      gsap.to(glowRef.current, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.2,
        ease: "power2.out",
      });

       // Red ball (slower follow)
      gsap.to(ballRef.current, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.35,
        ease: "power3.out",
      });
    };
    

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

    return (
      <>
      <main className="grid grid-cols-1 min-h-[100vh] w-full">

      {/* Glow effect */}
        <div
        ref={glowRef}
        className="pointer-events-none fixed top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[120px] bg-white opacity-35"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

       {/* Red ball */}
      <div
        ref={ballRef}
        className="pointer-events-none hidden md:block fixed top-1/2 left-1/2 w-[20px] h-[20px] rounded-full bg-yellow-100 shadow-[0_0_20px_#ffffff]"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

        <div className="relative container min-h-[100vh] mx-1 md:mx-auto py-5 md:px-0 px-5">
              <Navbar/>
              <ScrollToTop />
            <Routes>
              <Route path="/" element={<> <Hero /> <Body /> </>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/guidance" element={<Guidance />} />
            </Routes>

            </div>
            
            <Footer />
      </main>
        </>
    )
}