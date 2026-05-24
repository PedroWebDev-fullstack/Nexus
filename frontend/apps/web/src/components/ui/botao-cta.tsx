import atribuirEstilo from "../../utils/tamanhoBotao"

type BotaoProps = {
    sm?:boolean, md?:boolean, lg?:boolean, xl?:boolean, texto:string;
}

export default function BotaoCta({ sm, md, lg, xl, texto }: BotaoProps) {
    return (
        <button className={`
            bg-linear-to-br from-[var(--primaria)] to-[var(--secundaria)] text-white cursor-pointer
            flex justify-center items-center 
            transition-all duration-200 ease-in-out
            hover:shadow-[0_0_24px_rgba(108,71,255,.4)]
            active:scale-[0.97]
            ${atribuirEstilo(sm, md, lg, xl)}
        `}>
            {texto}
        </button>
    );
}