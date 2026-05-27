type Mensagem = {
    texto:string
}

export default function DestinatarioMens({texto}: Mensagem) {
    return (
        <div className="
        bg-[#22213a] 
        rounded-b-[18px] rounded-tl-[2px] rounded-tr-[18px] 
        px-3.5 py-2.5 
        text-white text-[13px] leading-normal text-wrap
        max-w-[65%] 
        ">

            {texto}

        </div>       
    )
}