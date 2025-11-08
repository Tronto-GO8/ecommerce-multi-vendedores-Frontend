import MinhasInfo from "./abasConta/minhasInfo";
import Pedidos from "./abasConta/meusPedidos";
import Chamados from "./abasConta/meusChamados";
import Configuracoes from "./abasConta/configuracoes";

export type ModuloConta = "minhas-info" | "pedidos" | "chamados" | "configuracoes";

interface CentralContaProps {
  moduloAtivo: ModuloConta;
}

export default function CentralConta({ moduloAtivo }: CentralContaProps) {
  const modulos = {
    "minhas-info": <MinhasInfo />,
    pedidos: <Pedidos />,
    chamados: <Chamados />,
    configuracoes: <Configuracoes />,
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto pb-4 p-4">
        {modulos[moduloAtivo]}
      </div>
    </div>
  );
}
