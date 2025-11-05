import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowDownToLine, Trash2 } from "lucide-react";
import { Modulos } from "@/components/ui/modulos";
import { useEffect, useState } from "react";
import ModalDadosAssistenciaProduto from "./modalDadosAssistenciaProduto";
import FiltroItens from "@/components/ui/filtroItens";

// TOKEN
const token = localStorage.getItem("token");

// NESCESSÁRIO PARA RODAR
interface TabelaUsuariosProps {
    moduloAtivo: Modulos;
    selecionarModulo: (modulo: Modulos) => void;
}

// MADELO DE chamados
interface Chamados {
    id: number;
    produto: string;
    status: "Na loja" | "Fora da loja" | "Finalizado" | "cancelado" | "Em andamento";
    dataDoPedido: Date;
    descricao: string;
    nomeCliente: string;
    emailCliente: string;
    telefoneCliente: number;
}

export default function TabelaPedidosdeAssistencia({
    moduloAtivo,
    selecionarModulo,
}: TabelaUsuariosProps) {
    const [mostrarDadoschamados, setmostrarDadoschamados] = useState(false);
    const [itemSelecionadoId, setitemSelecionadoId] = useState<number | null>(null);
    const [pesquisarChamado, setpesquisarChamado] = useState("");
    const [erropesquisarChamado, setErropesquisarChamado] = useState<string | null>(null);
    const [loadingTabela, setLoadingTabela] = useState(false);
    const [errorTabela, setErrorTabela] = useState<string | null>(null);
    const [filtroStatus, setFiltroStatus] = useState<string>("");
    const [valorFiltro, setValorFiltro] = useState<string>("");
    const [pedidos, setpedidos] = useState<Chamados[]>([
        {
    id: 1,
    produto: "Notebook Gamer X-15",
    status: "Em andamento",
    dataDoPedido: new Date("2025-10-20"),
    descricao: "Cliente relatou superaquecimento durante jogos pesados. Foi feita a limpeza interna e troca de pasta térmica.",
    nomeCliente: "Lucas Andrade",
    emailCliente: "lucas.andrade@email.com",
    telefoneCliente: 11987654321,
  },
  {
    id: 2,
    produto: "Smartphone Galaxy S22",
    status: "Na loja",
    dataDoPedido: new Date("2025-10-25"),
    descricao: "Tela trincada após queda. Aguardando aprovação de orçamento para substituição da tela e calibração do touch.",
    nomeCliente: "Beatriz Souza",
    emailCliente: "beatriz.souza@email.com",
    telefoneCliente: 11999887766,
  },
  {
    id: 3,
    produto: "Headset HyperSound V2",
    status: "Finalizado",
    dataDoPedido: new Date("2025-09-28"),
    descricao: "Problema de som no lado esquerdo resolvido após substituição do cabo interno. Testado e entregue ao cliente.",
    nomeCliente: "Marcos Pereira",
    emailCliente: "marcos.pereira@email.com",
    telefoneCliente: 11988776655,
  },
    ]);
    
    const [chamadosFiltrados, setChamadosFiltrados] = useState<Chamados[]>(pedidos);

    // 🔹 Buscar pedidos (inicial, quando a tela é carregada)
    async function getpedidos() {
        setLoadingTabela(true);
        try {
            const response = await fetch(`/api/pedidos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) throw new Error("Falha ao buscar dados");

            const data = await response.json();
            if (data.length === 0) {
                setErrorTabela("Nenhum produto encontrado.");
                return;
            }
            setpedidos(data);
            setChamadosFiltrados(data);
            setErrorTabela(null);
        } catch (err: unknown) {
            if (err instanceof TypeError) {
                setErrorTabela("Erro de conexão: não foi possível buscar os dados.");
            } else {
                setErrorTabela((err as Error).message);
            }
        } finally {
            setLoadingTabela(false);
        }
    }

    useEffect(() => {
            getpedidos();
        }, []);

    // 🔹 Buscar produto por nome
    async function getDadosNome() {
        if (!pesquisarChamado.trim()) {
            setErropesquisarChamado(null);
            setChamadosFiltrados(pedidos);
            return;
        }

        setLoadingTabela(true);
        try {
            const response = await fetch(
                `/api/pedidos?nome=${encodeURIComponent(pesquisarChamado)}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (!response.ok) throw new Error("Falha ao buscar dados");

            const data = await response.json();
            if (data.length === 0) {
                setErrorTabela("Nenhum produto encontrado.");
                return;
            }
            setpedidos(data);
            setChamadosFiltrados(data);
            setErrorTabela(null);
        } catch (err: unknown) {
            if (err instanceof TypeError) {
                setErrorTabela("Erro de conexão: não foi possível buscar os dados.");
            } else {
                setErrorTabela((err as Error).message);
            }
        } finally {
            setLoadingTabela(false);
        }
    }

    // 🔹 Filtrar itens

    useEffect(() => {
  const filtrados = pedidos
    .filter((chamado) => {
      if (!valorFiltro) return true;
      const busca = valorFiltro.toLowerCase();
      return (
        chamado.nomeCliente.toLowerCase().includes(busca) ||
        chamado.id.toString().includes(busca)
      );
    })
    .filter((chamado) => {
      if (!filtroStatus || filtroStatus === "todos") return true;
      return chamado.status.toLowerCase() === filtroStatus.toLowerCase();
    })
    .sort((a, b) => {
      const ordemStatus: Chamados["status"][] = [
        "Na loja",
        "Fora da loja",
        "Em andamento",
        "Finalizado",
        "cancelado",
      ];

      const indexA = ordemStatus.indexOf(a.status);
      const indexB = ordemStatus.indexOf(b.status);
      return indexA - indexB;
    });

  setChamadosFiltrados(filtrados);
}, [valorFiltro, filtroStatus, pedidos]);


    

    return (
        <>
            <div className="flex flex-col gap-2 h-full absolute sm:top-0 top-[0px] left-0 right-0 bottom-0 z-50 sm:relative sm:z-auto bg-white">
                <Card className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between items-center w-full p-2 gap-3 border border-black">
                    {/* Botão à esquerda (aparece só no mobile) */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full justify-start">
                        <Button
                            onClick={() => selecionarModulo("vazio")}
                            className="block sm:hidden w-auto"
                        >
                            <ArrowDownToLine />
                        </Button>

                        {/* Botão adicionar */}
                        <Button
                            onClick={() => { setmostrarDadoschamados(true), setitemSelecionadoId(null) }}
                            className="w-auto"
                        >
                            + Novo chamado
                        </Button>
                        {/* Select */}
                        <div>
                            <select className="min-w-[150px] border rounded-md px-1 py-2"
                                value={filtroStatus}
                                onChange={(e) => setFiltroStatus(e.target.value)}

                            >
                                <option value="todos">Todos os chamados</option>
                                <option value="Na loja">Na loja</option>
                                <option value="Fora da loja">Fora da loja</option> 
                                <option value="Finalizado">Finalizado</option>
                                <option value="cancelado">Cancelado</option>
                                <option value="Em andamento">Em andamento</option>
                            </select>
                        </div>
                    </div>

                    {/* Pesquisa */}
                    <div className="flex flex-row flex-1 gap-2 justify-end w-full sm:w-auto">
                        <Input
                            onChange={(event) => {
                                setpesquisarChamado(event.target.value);
                                if (erropesquisarChamado) setErropesquisarChamado(null);
                            }}
                            placeholder="Digite o código ou cliente"
                            className={`w-full dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030] min-w-[500px] ${erropesquisarChamado ? "border-red-500 focus:ring-red-500" : ""
                                }`}
                        />
                        <Button onClick={getDadosNome} className="w-auto">
                            <Search />
                        </Button>
                    </div>
                </Card>

                <Card
                    className={`w-full p-2 gap-2 border border-black flex-1 overflow-hidden ${loadingTabela || errorTabela
                        ? "flex justify-center items-center"
                        : ""
                        }`}
                >
                    {loadingTabela ? (
                        <p className="text-center p-4">Carregando...</p>
                    ) : errorTabela ? (
                        <p className="text-center p-4 text-red-500">{errorTabela}</p>
                    ) : pedidos.length === 0 ? (
                        <p className="text-center p-4">Nenhum produto encontrado</p>
                    ) : (
                        <div className="overflow-auto h-full">
                            <table className="min-w-full border-collapse">
                                <thead className="sticky top-0 bg-white z-10">
                                    <tr>
                                        <th className="p-2 text-center">Chamado</th>
                                        <th className="p-2 text-center">Cliente</th>
                                        <th className="p-2 text-center">Produto</th>
                                        <th className="p-2 text-center">Status</th>
                                        <th className="p-2 text-center">Visualizar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chamadosFiltrados.map((user) => (
                                        <tr key={user.id}>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.id}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.nomeCliente}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                R$ {user.produto}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.status}
                                            </td>
                                            <td className="p-2 text-center">
                                                <div className="flex gap-2 justify-center">
                                                    <Button
                                                        className="w-[50%]"
                                                        onClick={() => {
                                                            setitemSelecionadoId(user.id);
                                                            setmostrarDadoschamados(true);
                                                        }}
                                                    >
                                                        Ver
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Card>

                {mostrarDadoschamados ? (
                    <ModalDadosAssistenciaProduto
                        idItem={itemSelecionadoId ?? undefined}
                        setMostrarDados={setmostrarDadoschamados}
                        atualizarLista={getpedidos} 
                    />
                ) : null}

            </div>
        </>
    );
}
