import { useState } from "react";
import ChatIa from "@/components/assitenciaCliente/chatIA";
import BarraDeAssistencia from "@/components/assitenciaCliente/FaqAndSupport";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Assistencia() {
  const [preMessages, setPreMessages] = useState<string[]>([]);

  function mensgemAoClicar(text: string) {
    setPreMessages((prev) => [...prev, text]);
  }

  return (
    // grid pai: header já existe fora daqui, então esta parte ocupa o restante
    <div className="grid grid-rows-[auto_1fr] max-h-[calc(100vh-60px)]">
      {/* Barra preta com seta */}
      <div className="w-full bg-[#303030] flex items-center">
        <Link
          to="/meus-chamados"
          className="p-2 rounded-full text-white hover:bg-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Conteúdo ajustado para ocupar apenas o espaço restante */}
      <div className="grid grid-cols-[minmax(0,10%)_minmax(0,90%)] lg:grid-cols-[minmax(0,30%)_minmax(0,70%)] overflow-hidden">
        <div className="w-full h-full overflow-hidden">
          <BarraDeAssistencia onQuickReply={mensgemAoClicar} />
        </div>
        <div className="w-full h-full overflow-hidden">
          <ChatIa preMessages={preMessages} setPreMessages={setPreMessages} />
        </div>
      </div>
    </div>
  );
}
