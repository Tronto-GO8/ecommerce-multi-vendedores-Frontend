import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import DadosGerais from "@/components/areaAdministrativa/dadosGerais";
import PainelDeControle from "@/components/areaAdministrativa/paneilDecontrole";
import CentralTabelas from "@/components/areaAdministrativa/centralTabelas";
import { Modulos } from "@/components/ui/modulos";

export default function Adiministracao() {
    const [algumModuloCelecionado, setAlgumModuloCelecionado] = useState(false);
    const [moduloSelecionado, setModuloSelecionado] = useState<Modulos>("usuarios");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640 && !algumModuloCelecionado) {
                setModuloSelecionado("vazio");
            } else if (moduloSelecionado === "vazio") {
                setModuloSelecionado("usuarios");
            }
        };

        window.addEventListener("resize", handleResize);
        setAlgumModuloCelecionado(true);

        return () => window.removeEventListener("resize", handleResize);
    }, [moduloSelecionado, algumModuloCelecionado]);

    return (
        <>
            <div className="flex flex-col w-full h-screen max-h-100vh">
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
                <div className="flex flex-col flex-1 border overflow-hidden">
                    <div className=" flex flex-col sm:flex-[0_0_40%] p-2">
                        <DadosGerais />
                    </div>
                    <div className="flex-[0_0_50px] sm:h-[50px]">
                        <PainelDeControle
                            selecionarModulo={setModuloSelecionado}
                            moduloAtivo={moduloSelecionado}
                        />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <CentralTabelas
                            selecionarModulo={setModuloSelecionado}
                            moduloAtivo={moduloSelecionado}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}