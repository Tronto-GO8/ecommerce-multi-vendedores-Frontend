import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowDownToLine, Trash2 } from "lucide-react";
import { Modulos } from "@/components/ui/modulos";
import { useEffect, useState } from "react";
import ModalDadosEstoque from "./modalDadosEstoque";
import FiltroItens from "@/components/ui/filtroItens";

// TOKEN
const token = localStorage.getItem("token");

// NESCESSÁRIO PARA RODAR
interface TabelaUsuariosProps {
    moduloAtivo: Modulos;
    selecionarModulo: (modulo: Modulos) => void;
}

// MADELO DE Itens
interface Itens {
    id: number;
    produto: string;
    categoriaPrincipal: string;
    preco: number;
    estoque: number;
}

export default function TabelaEstoque({
    moduloAtivo,
    selecionarModulo,
}: TabelaUsuariosProps) {
    const [mostrarDadosItens, setMostrarDadosItens] = useState(false);
    const [itemSelecionadoId, setitemSelecionadoId] = useState<number | null>();
    const [pesquisa, setPesquisa] = useState("");
    const [loadingTabela, setLoadingTabela] = useState(false);
    const [errorTabela, setErrorTabela] = useState<string | null>(null);
    const [produtos, setprodutos] = useState<Itens[]>([
        {
            id: 1,
            produto: "Notebook Gamer X-15",
            categoriaPrincipal: "Informática",
            preco: 6499.9,
            estoque: 12,
        },
        {
            id: 2,
            produto: "Smartphone Galaxy Z Flip 6",
            categoriaPrincipal: "Celulares",
            preco: 4999.0,
            estoque: 8,
        },
        {
            id: 3,
            produto: "Monitor UltraWide 34'' LG",
            categoriaPrincipal: "Periféricos",
            preco: 2899.99,
            estoque: 15,
        },
        {
            id: 4,
            produto: "Teclado Mecânico RGB HyperX Alloy",
            categoriaPrincipal: "Acessórios",
            preco: 599.9,
            estoque: 32,
        },
        {
            id: 5,
            produto: "Cadeira Gamer ThunderX3 TGC12",
            categoriaPrincipal: "Móveis",
            preco: 1399.0,
            estoque: 5,
        },
    ]);

    // 🔹 Buscar produtos (inicial)
    async function getProdutos() {
        setLoadingTabela(true);
        try {
            const response = await fetch(`/api/produtos`, {
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
            setprodutos(data);
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
        getProdutos();
    }, []);

    // 🔹 Filtrar produtos
    async function filtrarDados() {
        if (!pesquisa.trim()) {
            setErrorTabela("Digite algo para pesquisar.");
            return;
        }

        setLoadingTabela(true);
        try {
            const response = await fetch(
                `/api/produtos?nome=${encodeURIComponent(pesquisa)}`,
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
            setprodutos(data);
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

    // 🔹 Buscar produto por ID (para o modal)
    async function buscarProduto(id: number) {
        try {
            const response = await fetch(`/api/produtos/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) throw new Error("Falha ao buscar produto");
            const data = await response.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    // 🔹 Excluir produto
    async function deletarProduto(id: number) {
        if (!confirm("Tem certeza que deseja excluir este produto?")) return;
        try {
            const response = await fetch(`/api/produtos/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) throw new Error("Erro ao excluir produto");
            setprodutos((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error(err);
            alert("Falha ao excluir o produto.");
        }
    }

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
                            onClick={() => { setMostrarDadosItens(true), setitemSelecionadoId(undefined) }}
                            className="w-auto"
                        >
                            + Adicionar
                        </Button>

                        {/* Filtro */}
                        <div className="max-w-[140px]">
                            <FiltroItens />
                        </div>

                        {/* Select */}
                        <div>
                            <select className="min-w-[150px] border rounded-md px-1 py-2">
                                <option value="" disabled>
                                    Estoque
                                </option>
                                <option value="ordenarMenor">▼ Menor estoque</option>
                                <option value="ordenarMaior">▲ Maior estoque</option>
                            </select>
                        </div>
                    </div>

                    {/* Pesquisa */}
                    <div className="flex flex-row flex-1 gap-2 justify-end w-full sm:w-auto">
                        <Input
                            onChange={(event) => setPesquisa(event.target.value)}
                            placeholder="Pesquisar produto"
                            className="w-full sm:w-[60%] md:w-[50%] dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030] min-w-[180px]"
                        />
                        <Button onClick={filtrarDados} className="w-auto">
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
                    ) : produtos.length === 0 ? (
                        <p className="text-center p-4">Nenhum produto encontrado</p>
                    ) : (
                        <div className="overflow-auto h-full">
                            <table className="min-w-full border-collapse">
                                <thead className="sticky top-0 bg-white z-10">
                                    <tr>
                                        <th className="p-2 text-center">Produto</th>
                                        <th className="p-2 text-center">Categoria</th>
                                        <th className="p-2 text-center">Preço</th>
                                        <th className="p-2 text-center">Estoque</th>
                                        <th className="p-2 text-center">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produtos.map((user) => (
                                        <tr key={user.id}>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.produto}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.categoriaPrincipal}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                R$ {user.preco.toFixed(2)}
                                            </td>
                                            <td className="p-2 text-center text-sm sm:text-base md:text-lg">
                                                {user.estoque}
                                            </td>
                                            <td className="p-2 text-center">
                                                <div className="flex gap-2 justify-center">
                                                    <Button
                                                        className="w-[50%]"
                                                        onClick={() => {
                                                            setitemSelecionadoId(user.id);
                                                            setMostrarDadosItens(true);
                                                        }}
                                                    >
                                                        Editar
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => deletarProduto(user.id)}
                                                    >
                                                        <Trash2 />
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

                {mostrarDadosItens ? (
                    <ModalDadosEstoque
                        idItem={itemSelecionadoId ?? undefined}
                        setMostrarDados={setMostrarDadosItens}
                    />
                ) : null}


            </div>
        </>
    );
}
