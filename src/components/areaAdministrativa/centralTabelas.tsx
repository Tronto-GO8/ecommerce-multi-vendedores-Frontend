import TabelaUsiarios from "./tabelas/tabelaUsuarios";
import { Modulos } from "../ui/modulos";

interface CentralTabelasProps {
  moduloAtivo: Modulos;
  selecionarModulo: (modulo: Modulos) => void;
}

export default function CentralTabelas({moduloAtivo, selecionarModulo }: CentralTabelasProps) {
    const tabelas = {
        usuarios: <TabelaUsiarios moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo}/>,
        estoque: null,
        assistencia: null,
        funcionarios:null,
        vazio: null,
    };

    return (
        <div className="w-full h-full">
            {tabelas[moduloAtivo]}
        </div>
    );
}