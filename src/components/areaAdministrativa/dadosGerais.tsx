import { Card, CardTitle } from "../ui/card";
import InputError from "../InputError";
import { useState, useEffect } from "react";
import { Box, Headphones, User, Users, DollarSign, Package } from "lucide-react";

export default function DadosGerais() {
  // Estados de dados
  const [totalProdutos, setTotalProdutos] = useState(10);
  const [totalProdutosIsLoading, setTotalProdutosIsLoading] = useState(true);
  const [errorTotalProdutos, setErrorTotalProdutos] = useState<string | null>(null);

  const [totalClientes, setTotalClientes] = useState(53);
  const [totalClientesIsLoading, setTotalClientesIsLoading] = useState(true);
  const [errorTotalClientes, setErrorTotalClientes] = useState<string | null>(null);

  const [chamadosPendentes, setChamadosPendentes] = useState(21);
  const [chamadosPendentesIsLoading, setChamadosPendentesIsLoading] = useState(true);
  const [errorChamadosPendentes, setErrorChamadosPendentes] = useState<string | null>(null);

  const [totalFuncionarios, setTotalFuncionarios] = useState(5);
  const [totalFuncionariosIsLoading, setTotalFuncionariosIsLoading] = useState(true);
  const [errorTotalFuncionarios, setErrorTotalFuncionarios] = useState<string | null>(null);

  const [receitaMensal, setReceitaMensal] = useState(5000);
  const [receitaMensalIsLoading, setReceitaMensalIsLoading] = useState(true);
  const [errorReceitaMensal, setErrorReceitaMensal] = useState<string | null>(null);

  const [pedidosDoDia, setPedidosDoDia] = useState(2);
  const [pedidosDoDiaIsLoading, setPedidosDoDiaIsLoading] = useState(true);
  const [errorPedidosDoDia, setErrorPedidosDoDia] = useState<string | null>(null);

  // Função genérica de fetch
  const fetchData = async (
    url: string,
    setData: any,
    setIsLoading: any,
    setError: any,
    fallbackMessage: string
  ) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(fallbackMessage);
      const data = await response.json();
      setData(data);
    } catch (err: unknown) {
      if (err instanceof TypeError) setError("Erro de conexão: não foi possível buscar os dados");
      else setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("https://api.exemplo.com/produtos", setTotalProdutos, setTotalProdutosIsLoading, setErrorTotalProdutos, "Erro ao buscar total de produtos");
    fetchData("https://api.exemplo.com/clientes", setTotalClientes, setTotalClientesIsLoading, setErrorTotalClientes, "Erro ao buscar total de clientes");
    fetchData("https://api.exemplo.com/chamados", setChamadosPendentes, setChamadosPendentesIsLoading, setErrorChamadosPendentes, "Erro ao buscar chamados pendentes");
    fetchData("https://api.exemplo.com/funcionarios", setTotalFuncionarios, setTotalFuncionariosIsLoading, setErrorTotalFuncionarios, "Erro ao buscar funcionários");
    fetchData("https://api.exemplo.com/receita", setReceitaMensal, setReceitaMensalIsLoading, setErrorReceitaMensal, "Erro ao buscar receita mensal");
    fetchData("https://api.exemplo.com/pedidos", setPedidosDoDia, setPedidosDoDiaIsLoading, setErrorPedidosDoDia, "Erro ao buscar pedidos do dia");
  }, []);

  // Array de cards para simplificar renderização
  const cards = [
    { title: "Total de Produtos", value: totalProdutos, loading: totalProdutosIsLoading, error: errorTotalProdutos, icon: <Box className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Produtos Cadastrados" },
    { title: "Total de Clientes", value: totalClientes, loading: totalClientesIsLoading, error: errorTotalClientes, icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Clientes Cadastrados" },
    { title: "Chamados Pendentes", value: chamadosPendentes, loading: chamadosPendentesIsLoading, error: errorChamadosPendentes, icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Assistência Técnica" },
    { title: "Total de Funcionários", value: totalFuncionarios, loading: totalFuncionariosIsLoading, error: errorTotalFuncionarios, icon: <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Funcionários Cadastrados" },
    { title: "Receita Mensal", value: `R$ ${receitaMensal}`, loading: receitaMensalIsLoading, error: errorReceitaMensal, icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Receita do Mês" },
    { title: "Pedidos em Processamento", value: pedidosDoDia, loading: pedidosDoDiaIsLoading, error: errorPedidosDoDia, icon: <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-8" />, label: "Pedidos em andamento" },
  ];

  return (
    <div className="grid gap-2 sm:gap-3 p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 justify-items-center">
        {cards.map((card, idx) => (
          <Card key={idx} className="border border-black p-2 flex flex-col mx-auto w-[90%] sm:w-full md:w-full max-w-full box-border">
            <div className="flex justify-between items-center w-full break-words">
              <CardTitle className="text-xs sm:text-xs md:text-base break-words">{card.title}</CardTitle>
              {card.icon}
            </div>
            <div className="mt-auto text-sm sm:text-base md:text-lg break-words overflow-hidden">
              {card.loading ? (
                <p>Carregando...</p>
              ) : card.error ? (
                <InputError message={card.error || undefined} />
              ) : (
                <p>{card.value}</p>
              )}
              <p>{card.label}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
