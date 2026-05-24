import atribuirEstilo from "../../../utils/tamanhoBotao"

type BotaoProps = {
    sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean, texto:string;
}

export default function BotaoGhost({ sm, md, lg, xl, texto }: BotaoProps) {
    return (
        <button className={`
            bg-[#6c47ff] text-white cursor-pointer
            flex justify-center items-center 
            transition-all duration-200 ease-in-out 
            hover:bg-[#5a38e0] hover:shadow-[0_0_24px_rgba(108,71,255,.35)]
            active:scale-[0.97]
            ${atribuirEstilo(sm, md, lg, xl)}
        `}>
            {texto}
        </button>
    );
}