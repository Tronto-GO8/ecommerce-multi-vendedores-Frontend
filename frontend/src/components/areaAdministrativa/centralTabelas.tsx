import TabelaUsiarios from "./tabelas/usuarios/tabelaUsuarios";
import { Modulos } from "../ui/modulos";
import { Card } from "../ui/card";
import TabelaEstoque from "./tabelas/estoque/tabelaEstoque";
import TabelaPedidosdeAssistencia from "./tabelas/assistenciaAoProduto/tabaleAssistenciaProduto";
import TabelaFuncionarios from "./tabelas/funcionarios/tabelaFuncionarios";

interface CentralTabelasProps {
    moduloAtivo: Modulos;
    selecionarModulo: (modulo: Modulos) => void;
}

export default function CentralTabelas({ moduloAtivo, selecionarModulo }: CentralTabelasProps) {
    const tabelas = {
        usuarios: <TabelaUsiarios moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo} />,
        estoque: <TabelaEstoque moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo}/>,
        assistencia: <TabelaPedidosdeAssistencia moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo}/>,
        funcionarios: <TabelaFuncionarios  moduloAtivo={moduloAtivo} selecionarModulo={selecionarModulo} />,
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