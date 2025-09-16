import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatIa from "@/components/assitenciaCliente/ChatIA";
import BarraDeAssistencia from "@/components/assitenciaCliente/FaqAndSupport";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Assistencia() {
    const [preMessages, setPreMessages] = useState<string[]>([]);
    const [assistenciaAberto, setAssistenciaAberto] = useState(false)

    function mensgemAoClicar(text: string) {  //pega os valores que estão nos botões da barra de assistência e manda para o chat
        setPreMessages((prev) => [...prev, text]);
    }
    return (
        <>
            <div className="w-full bg-[#303030] flex items-center">
                <Link
                    to="/meus-chamados"
                    className="p-2 rounded-full text-white hover:bg-gray-700"
                >
                    <ArrowLeft className="w-6 h-6" />
                </Link>
            </div>
            <div className="h-screen grid overflow-hidden 
    grid-cols-[minmax(0,10%)_minmax(0,90%)] 
    lg:grid-cols-[minmax(0,30%)_minmax(0,70%)]">
                <div className="w-full h-full overflow-hidden">
                    <BarraDeAssistencia onQuickReply={mensgemAoClicar} />
                </div>
                <div className="w-full h-full overflow-hidden">
                    <ChatIa preMessages={preMessages} setPreMessages={setPreMessages} />
                </div>
            </div>

        </>

    )

}