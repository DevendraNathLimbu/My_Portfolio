export default function Deployment() {
    return (
        <>
        <div className="deploy w-full min-h-[20vh] flex flex-col items-center justify-center py-10 mt-10">
            <h2 className="text-3xl md:text-5xl text-white font-semibold font-['headerFont']">DEPLOYMENT 🚀</h2>
          <div className="w-full flex items-center justify-evenly gap-10 mt-10 flex-wrap overflow-auto">
            <div className="tool bg-[url('./src/assets/icons/netlify.png')] bg-cover bg-center w-50 h-15 md:w-60 md:h-20"></div>
            <div className="tool bg-[url('./src/assets/icons/render.png')] bg-cover bg-center w-50 h-15 md:w-60 md:h-20"></div>

          </div>
        </div>
        </>
    )
}