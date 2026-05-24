import atribuirEstilo from "../../../utils/tamanhoBotao"

type BotaoProps = {
    sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean, texto:string;
}

export default function BotaoDanger({ sm, md, lg, xl, texto }: BotaoProps) {
    return (
        <button className={`
            bg-[#e05c3e] text-white cursor-pointer
            flex justify-center items-center 
            transition-all duration-200 ease-in-out 
            hover:bg-[#C44D33]
            active:scale-[0.97]
            ${atribuirEstilo(sm, md, lg, xl)}
        `}>
            {texto}
        </button>
    );
}