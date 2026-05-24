import atribuirEstilo from "../../../utils/tamanhoBotao"

type BotaoProps = {
    sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean, texto:string;
}

export default function BotaoGhost({ sm, md, lg, xl, texto }: BotaoProps) {
    return (
        <button className={`
            bg-[#0D9488] text-white cursor-pointer
            flex justify-center items-center 
            transition-all duration-200 ease-in-out 
            hover:bg-[#0B7A70] hover:shadow-[0_0_20px_rgba(13,148,136,.3)]
            active:scale-[0.97]
            ${atribuirEstilo(sm, md, lg, xl)}
        `}>
            {texto}
        </button>
    );
}