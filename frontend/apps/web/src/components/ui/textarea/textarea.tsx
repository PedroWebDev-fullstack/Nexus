"use client";

import { useRef } from "react"

export default function Textarea() {
    const referenciaTextarea = useRef<HTMLTextAreaElement>(null) // Captura a variável "referenciaTextarea" como referência enviado pelo textarea 
    const referenciaArquivo = useRef<HTMLInputElement>(null);

    function autoResize():void {
        const textArea = referenciaTextarea.current;

        if (!textArea) return;
        textArea.style.height = "auto";
        textArea.style.height = textArea.scrollHeight + "px";
    }

    function enviarArquivo(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files) return;
        console.log(files); // aqui você trata os arquivos
    }

    return (
        <div className="
        w-4xl
        bg-[#1A1A2E]
        rounded-[12px]
        border-[rgba(255,255,255,.08)]
        flex items-center justify-around
        px-2
        ">
            <textarea 
                ref={referenciaTextarea} // Cria uma referência do textarea pra manipular com DOM no typescript

                rows={1} // Define a quantidade inicial de linhas em 1 

                placeholder="Mensagem em #geral..."

                onInput={autoResize}

                className="
                overflow-hidden
                placeholder:text-[rgba(255,255,255,0.4)] text-white text-[14px]
                py-3 px-4
                w-[95%]
                outline-0 resize-none
                focus:ring-[rgba(108,71,255,.1)]
                "
            />

            <button className="cursor-pointer" onClick={() => referenciaArquivo.current?.click()}><p>📎</p></button>

            <input
              ref={referenciaArquivo}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              className="hidden"
              onChange={enviarArquivo}
            />
        </div>
    )
}