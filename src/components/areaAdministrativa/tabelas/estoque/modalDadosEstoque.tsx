import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FiltroItens from "@/components/ui/filtroItens";

interface ModalProps {
  idItem?: number;
  setMostrarDados: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DadosProduto {
  id: number;
  Produto: String;
  Quantidade: number;
  valor: number;
  Canal: String;
  Data: String;
}

export default function ModalDadosEstoque({ setMostrarDados, idItem }: ModalProps) {
  const [abaAtiva, setAbaAtiva] = useState<"informacoes" | "imagens">("informacoes");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [categorias, setCategorias] = useState<string[]>([]);
  const [imagens, setImagens] = useState<File[]>([]);
  const [produto, setproduto] = useState<any>({
    nome: "",
    quantidade: 0,
    quantidadeMinima: 0,
    preco: 0,
    descricao: "",
  });

  // Adicionar imagem
  const adicionarImagens = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const novasImagens = Array.from(e.target.files);
      setImagens([...imagens, ...novasImagens]);
    }
  };

  // Remover imagem
  const removerImagem = (index: number) => {
    setImagens(imagens.filter((_, i) => i !== index));
  };

  // Categorias
  const adicionarCategoria = () => {
    if (categoriaSelecionada && !categorias.includes(categoriaSelecionada)) {
      setCategorias([...categorias, categoriaSelecionada]);
      setCategoriaSelecionada("");
    }
  };

  const removerCategoria = (cat: string) => {
    setCategorias(categorias.filter((c) => c !== cat));
  };

  // Buscar dados se necessário
  useEffect(() => {
    if (!idItem) {
      setproduto({
        nome: "",
        quantidade: 0,
        quantidadeMinima: 0,
        preco: 0,
        descricao: "",
        categorias: [],
      });
      setCategorias([]);
      setImagens([]);
      return;
    }

    async function getDadosProduto() {
      setLoading(true);
      try {
        const response = await fetch(`/api/produtos/${idItem}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) throw new Error("Erro ao carregar dados do produto");

        const data = await response.json();
        setproduto(data);
        setCategorias(data.categorias || []);
        setImagens(data.imagens || []);
      } catch (err: unknown) {
        setErro(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    getDadosProduto();
  }, [idItem]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-30">
      <div
        className={`bg-white rounded shadow-lg ${
          abaAtiva == "informacoes"
            ? "w-[90vw] sm:w-[80vw] md:w-[60vw] h-[90vh]"
            : "w-[90vw] sm:w-[70vw] md:w-[50vw] h-[70vh]"
        }`}
      >
        <div className="flex h-full flex-col gap-2 border border-black">
          <div className="flex flex-col flex-grow gap-2 overflow-hidden m-4 h-full">
            {loading ? (
              <p>Carregando dados dos produtos...</p>
            ) : erro ? (
              <p className="text-red-500">{erro}</p>
            ) : (
              <>
                {!loading && !erro && produto && (
                  <>
                    {abaAtiva === "informacoes" ? (
                      <div className="grid grid-rows-[auto_1fr_auto] h-full p-2 gap-2">
                        {/* Título */}
                        <div>
                          <h2 className="text-lg font-semibold">Informações do produto</h2>
                        </div>

                        {/* Área principal */}
                        <div className="grid grid-cols-2 gap-2">
                          {/* Coluna 1 */}
                          <div className="flex flex-col gap-2">
                            <div>
                              <p>Nome do produto</p>
                              <Input
                                className="w-[80%]"
                                value={produto?.nome || ""}
                                onChange={(e) => setproduto({ ...produto, nome: e.target.value })}
                              />
                            </div>
                            <div>
                              <p>Quantidade em estoque</p>
                              <Input
                                className="w-[80%]"
                                type="number"
                                value={produto?.quantidade || ""}
                                onChange={(e) =>
                                  setproduto({ ...produto, quantidade: Number(e.target.value) })
                                }
                              />
                            </div>
                            <div>
                              <p>Quantidade mínima</p>
                              <Input
                                className="w-[80%]"
                                type="number"
                                value={produto?.quantidadeMinima || ""}
                                onChange={(e) =>
                                  setproduto({ ...produto, quantidadeMinima: Number(e.target.value) })
                                }
                              />
                            </div>
                          </div>

                          {/* Coluna 2 */}
                          <div className="flex flex-col gap-2">
                            <div>
                              <p>Preço</p>
                              <Input
                                className="w-[80%]"
                                type="number"
                                value={produto?.preco || ""}
                                onChange={(e) =>
                                  setproduto({ ...produto, preco: Number(e.target.value) })
                                }
                              />
                            </div>

                            <div>
                              <p>Categoria</p>
                              <div className="flex items-center gap-2 text-sm sm:text-md md:text-md">
                                <FiltroItens
                                  value={categoriaSelecionada}
                                  onChange={setCategoriaSelecionada}
                                />
                                <Button onClick={adicionarCategoria}>Add</Button>
                              </div>
                            </div>

                            <div className="flex-1 border border-black rounded-md overflow-y-auto max-h-[120px]">
                              <div
                                className={`flex flex-wrap gap-1 p-2 ${
                                  categorias.length <= 0 ? "justify-center items-center" : ""
                                }`}
                              >
                                {categorias.length > 0 ? (
                                  categorias.map((cat) => (
                                    <div
                                      key={cat}
                                      className="flex items-center text-[10px] px-2 py-0.5 rounded-full bg-black text-white border border-white/10 shrink-0"
                                    >
                                      <span className="truncate">{cat}</span>
                                      <button
                                        onClick={() => removerCategoria(cat)}
                                        className="ml-1 text-[10px] text-gray-300 hover:text-gray"
                                      >
                                        ×
                                      </button>
                                    </div>
                                  ))
                                ) : (
                                  <p className="text-gray-500 text-sm text-center">
                                    Nenhuma categoria adicionada
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Descrição */}
                        <div className="w-full">
                          <p>Descrição do produto</p>
                          <textarea
                            placeholder="Descreva detalhadamente o produto"
                            className="text-lg w-full h-[120px] pl-2 pt-2 pr-2 border border-black rounded-lg text-sm resize-none"
                            value={produto.descricao}
                            onChange={(e) =>
                              setproduto({ ...produto, descricao: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Seção de imagens */}
                        <div className="col-span-2 mt-2 grid grid-rows-[10%_90%] h-full">
                          <div className="flex items-center">
                            <p className="font-semibold text-lg">Imagens do produto</p>
                          </div>

                          <div className="h-full flex justify-center items-center">
                            <div className="flex h-[80%] w-[90%] gap-2 border border-black rounded-md p-2 overflow-y-auto max-h-[400px]">
                              <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-wrap gap-2 justify-center items-center p-2 rounded-md min-h-[150px] w-full border">
                                  {imagens.map((img, index) => (
                                    <div
                                      key={index}
                                      className="relative w-24 h-24 border rounded-md overflow-hidden"
                                    >
                                      <img
                                        src={URL.createObjectURL(img)}
                                        alt={`Imagem ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                      <button
                                        onClick={() => removerImagem(index)}
                                        className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                      >
                                        ×
                                      </button>
                                    </div>
                                  ))}

                                  {imagens.length < 5 && (
                                    <label className="w-24 h-24 border-2 border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                                      <span className="text-2xl text-gray-500">+</span>
                                      <span className="text-xs text-gray-500">Adicionar</span>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={adicionarImagens}
                                        className="hidden"
                                      />
                                    </label>
                                  )}
                                </div>

                                <div className="flex justify-center items-center p-2 bg-gray-50">
                                  <p className="text-gray-500 text-sm text-center">
                                    Selecione ou arraste as imagens aqui (JPG, JPEG) — até 5MB cada
                                    — ({imagens.length}/5)
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>

          {/* Botões */}
          <div className="w-full flex justify-end">
            <div className="w-[40%] grid grid-cols-2 gap-2 mr-4 mb-2">
              <Button onClick={() => setMostrarDados(false)} variant="secondary" className="w-full">
                Cancelar
              </Button>

              <Button
                onClick={async () => {
                  if (abaAtiva === "imagens") {
                    // Validação simples
                    if (!produto.nome || !produto.preco) {
                      alert("Preencha todos os campos obrigatórios!");
                      return;
                    }

                    const metodo = idItem ? "PUT" : "POST";
                    const url = idItem ? `/api/produtos/${idItem}` : "/api/produtos";

                    const formData = new FormData();
                    formData.append("nome", produto.nome);
                    formData.append("quantidade", produto.quantidade.toString());
                    formData.append("quantidadeMinima", produto.quantidadeMinima.toString());
                    formData.append("preco", produto.preco.toString());
                    formData.append("descricao", produto.descricao);
                    categorias.forEach((c) => formData.append("categorias", c));
                    imagens.forEach((img) => formData.append("imagens", img));

                    try {
                      const response = await fetch(url, {
                        method: metodo,
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        body: formData,
                      });

                      if (!response.ok) throw new Error("Erro ao salvar produto");

                      alert(idItem ? "Produto atualizado!" : "Produto criado!");
                      setMostrarDados(false);
                    } catch (err) {
                      console.error(err);
                      alert("Falha ao salvar os dados.");
                    }
                  } else {
                    setAbaAtiva("imagens");
                  }
                }}
              >
                {abaAtiva == "informacoes"
                  ? "Continuar"
                  : idItem
                  ? "Salvar alterações"
                  : "Adicionar produto"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
