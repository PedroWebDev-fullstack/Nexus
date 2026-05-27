import "../../../styles/keyframes.css"

export default function Digitando() {
    return (
        <div className="
        w-fit
        bg-[#22213a] 
        rounded-b-[18px] rounded-tl-[2px] rounded-tr-[18px] 
        px-7.5 py-4
        flex items-center gap-1.5
        ">

            <div className="w-1.5 h-1.5 rounded-full bg-white"   style={{ animation: 'digitando 1.4s ease-in-out infinite', animationDelay: '0ms' }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: 'digitando 1.4s ease-in-out infinite', animationDelay: '200ms' }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: 'digitando 1.4s ease-in-out infinite', animationDelay: '400ms' }}></div>
            
        </div>       
    )
}