import atribuirEstilo from "../../utils/tamanhoBotao"

type BotaoProps = {
    sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean, texto:string;
}

export default function BotaoGhost({ sm, md, lg, xl, texto }: BotaoProps) {
    return (
        <button className={`
            bg-transparent text-white cursor-pointer
            flex justify-center items-center 
            transition-all duration-200 ease-in-out 
            border border-[#3D3C52]
            hover:border hover:border-[#6C47FF] hover:text-[#6C47FF]
            active:scale-[0.97]
            ${atribuirEstilo(sm, md, lg, xl)}
        `}>
            {texto}
        </button>
    );
}