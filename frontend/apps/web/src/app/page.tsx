import BotaoPrimario from "../components/ui/botao-primario"
import BotaoSecundario from "../components/ui/botao-secundario"
import BotaoGhost from "../components/ui/botao-ghost"
import BotaoDanger from "../components/ui/botao-danger"
import BotaoCta from "../components/ui/botao-cta"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 bg-[#090909]">

     <div className="flex items-center justify-center gap-4">
        <BotaoPrimario sm texto="Primário" /> {/* Botao pequeno */}
        <BotaoPrimario md texto="Primário" /> {/* Botao medio */}
        <BotaoPrimario lg texto="Primário" /> {/* Botao grande */}
        <BotaoPrimario xl texto="Primário" /> {/* Botao extra grande */}
     </div>

      <div className="flex items-center justify-center gap-4">
        <BotaoSecundario sm texto="Secundário" /> {/* Botao pequeno */}
        <BotaoSecundario md texto="Secundário" /> {/* Botao medio */}
        <BotaoSecundario lg texto="Secundário" /> {/* Botao grande */}
        <BotaoSecundario xl texto="Secundário" /> {/* Botao extra grande */}
      </div>

      <div className="flex items-center justify-center gap-4">
        <BotaoGhost sm texto="Ghost" /> {/* Botao pequeno */}
        <BotaoGhost md texto="Ghost" /> {/* Botao medio */}
        <BotaoGhost lg texto="Ghost" /> {/* Botao grande */}
        <BotaoGhost xl texto="Ghost" /> {/* Botao extra grande */}
      </div>

      <div className="flex items-center justify-center gap-4">
        <BotaoDanger sm texto="Danger" /> {/* Botao pequeno */}
        <BotaoDanger md texto="Danger" /> {/* Botao medio */}
        <BotaoDanger lg texto="Danger" /> {/* Botao grande */}
        <BotaoDanger xl texto="Danger" /> {/* Botao extra grande */}
      </div>

      <div className="flex items-center justify-center gap-4">
        <BotaoCta sm texto="Call to Atention" /> {/* Botao pequeno */}
        <BotaoCta md texto="Call to Atention" /> {/* Botao medio */}
        <BotaoCta lg texto="Call to Atention" /> {/* Botao grande */}
        <BotaoCta xl texto="Call to Atention" /> {/* Botao extra grande */}
      </div>
    </div>
  );
}
