import { Card, CardTitle } from "../ui/card";
import InputError from "../InputError";
import { useState, useEffect } from "react";
import { Box, Headphones, User, Users, DollarSign, Package } from "lucide-react"


export default function dadosGerais() {
    // Total de Produtos
    const [totalProdutos, setTotalProdutos] = useState(10);
    const [totalProdutosIsLoading, setTotalProdutosIsLoading] = useState(true);
    const [errorTotalProdutos, setErrorTotalProdutos] = useState<string | null>(null);

    //Total de Clientes
    const [totalClientes, setTotalClientes] = useState(53);
    const [totalClientesIsLoading, setTotalClientesIsLoading] = useState(true);
    const [errorTotalClientes, setErrorTotalClientes] = useState<string | null>(null);

    //Total de chamados
    const [chamadosPendentes, setChamadosPendentes] = useState(21);
    const [chamadosPendentesIsLoading, setChamadosPendentesIsLoading] = useState(true);
    const [errorChamadosPendentes, setErrorChamadosPendentes] = useState<string | null>(null);

    //Total de funcionários
    const [totalFuncionarios, setTotalFuncionarios] = useState(5);
    const [totalFuncionariosIsLoading, setTotalFuncionariosIsLoading] = useState(true);
    const [errorTotalFuncionarios, setErrorTotalFuncionarios] = useState<string | null>(null);

    //Receita Total
    const [receitaMensal, setReceitaMensal] = useState(5000);
    const [receitaMensalIsLoading, setReceitaMensalIsLoading] = useState(true);
    const [errorReceitaMensal, setErrorReceitaMensal] = useState<string | null>(null);

    //Pedidos do dia
    const [pedidosDoDia, setPedidosDoDia] = useState(2);
    const [pedidosDoDiaIsLoading, setPedidosDoDiaIsLoading] = useState(true);
    const [errorPedidosDoDia, setErrorPedidosDoDia] = useState<string | null>(null);

    // Função genérica de fetch
    const fetchData = async (url: string, setData: any, setIsLoading: any, setError: any, fallbackMessage: string) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(fallbackMessage);
            }
            const data = await response.json();
            setData(data);
        } catch (err: unknown) {
            if (err instanceof TypeError) {
                setError("Erro de conexão: não foi possível buscar os dados");
            } else {
                setError((err as Error).message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Requisições

    // MUDAR LINKS DEPOIS
    useEffect(() => {
        fetchData("https://api.exemplo.com/produtos", setTotalProdutos, setTotalProdutosIsLoading, setErrorTotalProdutos, "Erro ao buscar total de produtos");
        fetchData("https://api.exemplo.com/clientes", setTotalClientes, setTotalClientesIsLoading, setErrorTotalClientes, "Erro ao buscar total de clientes");
        fetchData("https://api.exemplo.com/chamados", setChamadosPendentes, setChamadosPendentesIsLoading, setErrorChamadosPendentes, "Erro ao buscar chamados pendentes");
        fetchData("https://api.exemplo.com/funcionarios", setTotalFuncionarios, setTotalFuncionariosIsLoading, setErrorTotalFuncionarios, "Erro ao buscar funcionários");
        fetchData("https://api.exemplo.com/receita", setReceitaMensal, setReceitaMensalIsLoading, setErrorReceitaMensal, "Erro ao buscar receita mensal");
        fetchData("https://api.exemplo.com/pedidos", setPedidosDoDia, setPedidosDoDiaIsLoading, setErrorPedidosDoDia, "Erro ao buscar pedidos do dia");
    }, []);

    return (
        <>
        <div className="grid grid-rows-2 gap-3 p-2">
                {/* Primeira linha */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-center">

                    {/* Total de Produtos */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-aut o">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-xs sm:text-base md:text-lg">Total de Produtos</CardTitle>
                            <Box className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        </div>
                        <div className="text-[10px] mt-auto text-xs sm:text-base md:text-lg break-words">
                            {totalProdutosIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorTotalProdutos ? (
                                <InputError message={errorTotalProdutos || undefined} />
                            ) : (
                                <p >{totalProdutos}</p>
                            )}
                            <p>Produtos Cadastrados</p>
                        </div>
                    </Card>

                    {/* Total de Clientes */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-auto">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-sm sm:text-base md:text-lg">Total de Clientes</CardTitle>
                            <Users />
                        </div>
                        <div className="mt-auto text-sm sm:text-base md:text-lg break-words">
                            {totalClientesIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorTotalClientes ? (
                                <InputError message={errorTotalClientes || undefined} />
                            ) : (
                                <p>{totalClientes}</p>
                            )}
                            <p>Clientes Cadastrados</p>
                        </div>
                    </Card>

                    {/* Chamados Pendentes */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-auto">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-sm sm:text-base md:text-lg">Chamados Pendentes</CardTitle>
                            <Headphones />
                        </div>
                        <div className="mt-auto text-sm sm:text-base md:text-lg break-words">
                            {chamadosPendentesIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorChamadosPendentes ? (
                                <InputError message={errorChamadosPendentes || undefined} />
                            ) : (
                                <p>{chamadosPendentes}</p>
                            )}
                            <p>Assistência Técnica</p>
                        </div>
                    </Card>

                </div>

                {/* Segunda linha */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-center">

                    {/* Total de Funcionários */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-auto">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-sm sm:text-base md:text-lg">Total de Funcionários</CardTitle>
                            <User />
                        </div>
                        <div className="mt-auto text-sm sm:text-base md:text-lg break-words">
                            {totalFuncionariosIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorTotalFuncionarios ? (
                                <InputError message={errorTotalFuncionarios || undefined} />
                            ) : (
                                <p>{totalFuncionarios}</p>
                            )}
                            <p>Funcionários Cadastrados</p>
                        </div>
                    </Card>

                    {/* Receita Mensal */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-auto">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-sm sm:text-base md:text-lg">Receita Mensal</CardTitle>
                            <DollarSign />
                        </div>
                        <div className="mt-auto text-sm sm:text-base md:text-lg break-words">
                            {receitaMensalIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorReceitaMensal ? (
                                <InputError message={errorReceitaMensal || undefined} />
                            ) : (
                                <p>R$ {receitaMensal}</p>
                            )}
                            <p>Receita do Mês</p>
                        </div>
                    </Card>

                    {/* Pedidos em Processamento */}
                    <Card className="border border-black p-2 flex flex-col w-full mx-auto">
                        <div className="flex justify-between items-center w-full break-words">
                            <CardTitle className="text-sm sm:text-base md:text-lg">Pedidos em Processamento</CardTitle>
                            <Package />
                        </div>
                        <div className="mt-auto text-sm sm:text-base md:text-lg break-words">
                            {pedidosDoDiaIsLoading ? (
                                <p>Carregando...</p>
                            ) : errorPedidosDoDia ? (
                                <InputError message={errorPedidosDoDia || undefined} />
                            ) : (
                                <p>{pedidosDoDia}</p>
                            )}
                            <p>Pedidos em andamento</p>
                        </div>
                    </Card>

                </div>
            </div>
        </>
    );
}