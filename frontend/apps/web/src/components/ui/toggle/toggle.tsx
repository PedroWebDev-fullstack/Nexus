"use client";

import { useState } from "react"

type toggleProps = {
    estaAtivo: boolean
}

export default function Toggle({ estaAtivo }: toggleProps) {
    const [ativo, setAtivo] = useState(estaAtivo)

    return (
        <div className="w-15 h-[33px] relative">

            <input id="checkbox" type="checkbox" checked={ativo} onChange={() => {setAtivo(!ativo)}}  // Quando marcado
            className="absolute z-10 left-0 top-0 h-full opacity-0 cursor-pointer inset-0"/>


            <span id="bolinha" className={`
            inset-0 absolute transition
            duration-300
            bg-[#2A2846]
            rounded-full
            
            before:content-[''] before:absolute
            before:w-6.5 before:h-6.5 before:top-1 before:left-[5px]
            before:bg-white
            before:rounded-full
            before:transition before:duration-250
            ${ativo ? "bg-[#6c47ff] before:translate-x-[24px]" : ""}
            `}></span>

        </div>
    )
}