import TabelaUsiarios from "./tabelas/usuarios/tabelaUsuarios";
import { Modulos } from "../ui/modulos";
import { Card } from "../ui/card";
import TabelaEstoque from "./tabelas/estoque/tabelaEstoque";

interface CentralTabelasProps {
    moduloAtivo: Modulos;
    selecionarModulo: (modulo: Modulos) => void;
}

export default function CentralTabelas({ moduloAtivo, selecionarModulo }: CentralTabelasProps) {
    const tabelas = {
        usuarios: <TabelaUsiarios moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo} />,
        estoque: <TabelaEstoque moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo}/>,
        assistencia: null,
        funcionarios: null,
        vazio: null,
    };

    return (
        <div className="h-full flex flex-col overflow-hidden">
            <Card className="flex-1 overflow-hidden pb-2">
                {tabelas[moduloAtivo]}
            </Card>
        </div>

    );
}