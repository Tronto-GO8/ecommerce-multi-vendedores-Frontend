import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DadosGerais from "@/components/areaAdministrativa/dadosGerais";

export default function Adiministracao() {
    return (
        <>
            <div className="flex flex-col w-full h-screen max-h-[calc(100vh-60px)]">
                {/* Cabeçalho */}
                <div className="w-full bg-[#303030] flex items-center">
                    <Link
                        to="/meus-chamados"
                        className="p-2 rounded-full text-white hover:bg-gray-700"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid principal */}
                <div className="grid grid-rows-[3fr_2fr_50px] border flex-1 gap-2">
                    <DadosGerais/>
                    <div className="border bg-green-200">2</div>
                    <div className="border bg-blue-200">3</div>
                </div>
            </div>
        </>
    );
}