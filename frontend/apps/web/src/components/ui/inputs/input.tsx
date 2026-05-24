type InputProps = {
    status?: string,
    mensagem?: string,
    placeholder: string,
    tipoInput: string
}

export default function Input({ status, mensagem, placeholder, tipoInput }: InputProps) {
    return (
        <div className="flex flex-col gap-2">

            <input type={tipoInput} placeholder={placeholder} className={`
            w-3xl
            bg-[#22213a] text-[white] text-[14px] placeholder-[rgba(255,255,255,0.4)]
            px-3.5 py-2.5
            border rounded-[12px] outline-none focus:ring-4
            
            ${
            status === "certo" ? "border-[#0d9488] focus:ring-[rgba(108,71,255,.1)]" :
            status === "errado" ? "border-[#e05c3e] focus:ring-[rgba(108,71,255,.1)]" :
            "border-[rgba(255,255,255,.08)] focus:border-[#6c47ff] focus:ring-[rgba(108,71,255,.2)]"}
            ` /* A estrutura acima define a cor da borda dependendo se for aprovado ou der erro ao enviar o inpupt */}
            />

            <p className={`text-[12px] ${status === "certo" ? "text-[#0d9488]" : status === "errado" ? "text-[#e05c3e]" : ""}`}> {/* Essa linha define a cor do texto */}
                {mensagem} {/* Essa linha define a mensagem de erro ou de disponibilidade que aparecerá abaixo do input */}
            </p>

        </div>
    )
}