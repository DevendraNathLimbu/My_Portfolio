import { CgArrowLongRightC } from "react-icons/cg";
import { CgArrowLongLeftC } from "react-icons/cg";


export default function Tools() {
    return (
        <>
        {/* This is a section for my tools */}
        <div className="toolbar min-h-[20vh] w-full flex flex-col items-center justify-center py-5">
            <h2 className="font-['headerFont'] text-3xl md:text-5xl text-white">TOOLS ⚙️</h2>

        <div className="tools w-full flex md:flex-row flex-col items-center justify-center md:justify-around gap-2 md:gap-4 mt-4 flex-nowrap">
          <div className="min-w-[20vw] flex flex-col items-center justify-center gap-2">
             <div className="tool bg-[url('./src/assets/icons/Git.png')] bg-cover bg-center w-15 h-15 md:w-20 md:h-20"></div>
             <h3 className="text-3xl font-['headerFont'] md:text-4xl text-white">Git</h3>
          </div>
          <div><CgArrowLongRightC className="text-6xl md:block hidden"/></div>
          <div className="mockup-code w-90 overflow-x-hidden md:w-150 shadow-lg shadow-gray-400/40  hover:scale-102 transition-all duration-300 text-[10px] md:text-[14px]">
  <pre data-prefix="$"><code>git init</code> <span className="px-4 text-green-400">// Initialize a new Git repository</span></pre>
  <pre data-prefix="$"><code>git status</code> <span className="px-4 text-green-400">// Check the status of the repository</span></pre>
  <pre data-prefix="$"><code>git add .</code> <span className="px-4 text-green-400">// Stage all changes for commit</span></pre>
  <pre data-prefix="$"><code>git commit -m "Initial commit"</code> <span className="px-4 text-green-400">// Commit the staged changes</span></pre>
  <pre data-prefix="$"><code>git push origin main</code> <span className="px-4 text-green-400">// Push changes to the remote repository</span></pre>
</div>
            </div>

         <div className="tools w-full flex items-baseline md:items-center justify-center md:justify-evenly gap-4 mt-10 flex-wrap">
            <div className="h-50 w-90 md:h-60 md:w-120 rounded-xl bg-[url('./src/assets/icons/gh.png')] bg-cover bg-center shadow-lg shadow-gray-400/40  hover:scale-102 transition-all duration-300"></div>
            <div><CgArrowLongLeftC className="text-6xl md:block hidden"/></div>
            <div className="min-w-[20vw] order-[-1] md:order-0 flex flex-col items-center justify-center gap-2">
                 <div className="tool bg-[url('./src/assets/icons/GitHub.png')] bg-cover bg-center h-15 w-15 md:w-20 md:h-20"></div>
                    <h3 className="text-3xl font-['headerFont'] md:text-4xl text-white">GitHub</h3>
         </div>
            </div>

            <div className="tools w-full flex items-center justify-center md:justify-evenly gap-4 mt-10 flex-wrap">
          <div className="min-w-[20vw] flex flex-col items-center justify-center gap-2">
            <div className="tool bg-[url('./src/assets/icons/Postman.png')] bg-cover bg-center h-15 w-15 md:w-20 md:h-20"></div>
            <h3 className="text-3xl font-['headerFont'] md:text-4xl text-white">Postman</h3>
          </div>
          <div><CgArrowLongRightC className="text-6xl md:block hidden"/></div>
           <div className="h-50 w-90 md:h-60 md:w-120 rounded-xl bg-[url('./src/assets/icons/pm.png')] bg-cover bg-center shadow-lg shadow-gray-400/40  hover:scale-102 transition-all duration-300"></div>
            </div>
        </div>
        </> 
    )
}