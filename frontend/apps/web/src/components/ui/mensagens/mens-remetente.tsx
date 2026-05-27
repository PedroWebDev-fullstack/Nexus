type Mensagem = {
    texto:string
}

export default function RemetenteMens({texto}: Mensagem) {
    return (
        <div className="
        bg-[#6c47ff] 
        rounded-b-[18px] rounded-tl-[18px] rounded-tr-[2px] 
        px-3.5 py-2.5 
        text-white text-[13px] leading-normal text-wrap
        max-w-[65%]
        ">

            {texto}

        </div>       
    )
}