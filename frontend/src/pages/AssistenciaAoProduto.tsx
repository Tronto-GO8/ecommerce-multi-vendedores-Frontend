import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ChatIa from "@/components/assitenciaCliente/chatIA";
import BarraDeAssistencia from "@/components/assitenciaCliente/FaqAndSupport";

export default function Assistencia() {
  const [preMessages, setPreMessages] = useState<string[]>([]);

  function mensagemAoClicar(text: string) {
    setPreMessages((prev) => [...prev, text]);
  }

  return (
    // Grid principal — o header global já existe fora daqui, 
    // então esta parte ocupa apenas o restante da tela
    <div className="grid grid-rows-[auto_1fr] max-h-[100vh]">
      
      {/* Barra superior preta com seta de retorno */}
      <div className="w-full bg-[#303030] flex items-center">
        <Link
          to="/meus-chamados"
          className="p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Conteúdo principal dividido entre FAQ e Chat */}
      <div className="grid grid-cols-[minmax(0,10%)_minmax(0,90%)] 
                      lg:grid-cols-[minmax(0,30%)_minmax(0,70%)] 
                      overflow-hidden">

        <div className="w-full h-full overflow-hidden">
          <BarraDeAssistencia onQuickReply={mensagemAoClicar} />
        </div>

        <div className="w-full h-full overflow-hidden">
          <ChatIa 
            preMessages={preMessages} 
            setPreMessages={setPreMessages} 
          />
        </div>
      </div>
    </div>
  );
}
