import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import DadosGerais from "@/components/areaAdministrativa/dadosGerais";
import PainelDeControle from "@/components/areaAdministrativa/paneilDecontrole";
import CentralTabelas from "@/components/areaAdministrativa/centralTabelas";
import { Modulos } from "@/components/ui/modulos";

export default function Adiministracao() {
    const [moduloSelecionado, setModuloSelecionado] = useState<Modulos>(window.innerWidth < 640 ? "vazio" : "usuarios");

    //Exibição dos módulos
    useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setModuloSelecionado("vazio");
    } else if (moduloSelecionado === "vazio") {
      setModuloSelecionado("usuarios");
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [moduloSelecionado]);

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
                <div className="grid grid-rows-[60%_40%_0] sm:grid-rows-[1fr_50px_1fr] border flex-1 relative">
                    <DadosGerais />
                    <PainelDeControle selecionarModulo={setModuloSelecionado} moduloAtivo={moduloSelecionado}/>
                    <CentralTabelas selecionarModulo={setModuloSelecionado} moduloAtivo={moduloSelecionado}/>
                </div>
            </div> 
        </>
    );
}