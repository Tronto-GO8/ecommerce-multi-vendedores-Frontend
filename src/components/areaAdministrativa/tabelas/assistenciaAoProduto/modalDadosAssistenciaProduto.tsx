
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputError from "@/components/InputError";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface ModalProps {
  idItem?: number;
  setMostrarDados: React.Dispatch<React.SetStateAction<boolean>>;
  atualizarLista: () => void;
}

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

export default function ModalDadosAssistenciaProduto({
  idItem,
  setMostrarDados,
  atualizarLista,
}: ModalProps) {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [chamado, setChamado] = useState<Chamados>({
    id: 0,
    produto: "",
    status: "Na loja",
    dataDoPedido: new Date(),
    descricao: "",
    nomeCliente: "",
    emailCliente: "",
    telefoneCliente: 0,
  });

  const [erros, setErros] = useState({
    produto: "",
    descricao: "",
    nomeCliente: "",
    emailCliente: "",
    telefoneCliente: "",
  });

  // 🟦 Validação
  const validarCampos = () => {
    const novosErros = {
      produto: chamado.produto.trim() === "" ? "O produto é obrigatório." : "",
      descricao: chamado.descricao.trim() === "" ? "A descrição é obrigatória." : "",
      nomeCliente: chamado.nomeCliente.trim() === "" ? "O nome do cliente é obrigatório." : "",
      emailCliente: chamado.emailCliente.trim() === "" ? "O e-mail é obrigatório." : "",
      telefoneCliente:
        !chamado.telefoneCliente || chamado.telefoneCliente.toString().length < 8
          ? "Telefone inválido."
          : "",
    };
    setErros(novosErros);
    return Object.values(novosErros).every((erro) => erro === "");
  };

  // 🟦 Buscar dados se for edição
  useEffect(() => {
    if (!idItem) return;
    async function getChamado() {
      setLoading(true);
      try {
        const response = await fetch(`/api/chamados/${idItem}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!response.ok) throw new Error("Erro ao carregar dados do chamado");
        const data = await response.json();
        setChamado({
          ...data,
          dataDoPedido: new Date(data.dataDoPedido),
        });
      } catch (err) {
        setErro(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    getChamado();
  }, [idItem]);

  // 🟦 Salvar (novo ou edição)
  const salvarChamado = async () => {
    if (!validarCampos()) return;

    const metodo = idItem ? "PUT" : "POST";
    const url = idItem ? `/api/chamados/${idItem}` : "/api/chamados";

    try {
      const response = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(chamado),
      });

      if (!response.ok) throw new Error("Erro ao salvar o chamado");
      alert(idItem ? "Chamado atualizado com sucesso!" : "Chamado criado com sucesso!");
      setMostrarDados(false);
      atualizarLista();
    } catch (err) {
      alert("Falha ao salvar os dados.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-30">
      <div className="bg-white rounded-lg shadow-lg w-[90vw] sm:w-[70vw] md:w-[50vw] h-[85vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-2">
          <div>
            <h2 className="text-lg font-semibold">
              {idItem ? "Editar Chamado" : "Criar Novo Chamado"}
            </h2>
            <p>{idItem ? "" : "Registre um novo pedido de assistencia técnica"}</p>
          </div>
        </div>

        <div className="h-full overflow-auto p-2 ">
          {loading ? (
            <p>Carregando...</p>
          ) : erro ? (
            <p className="text-red-500">{erro}</p>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 grid-rows-3 gap-2 p-2 rounded-md">
                <div>
                  <p>Produto</p>
                  <Input
                    value={chamado.produto}
                    onChange={(e) => {
                      setChamado({ ...chamado, produto: e.target.value });
                      setErros({ ...erros, produto: "" });
                    }}
                  />
                  <InputError message={erros.produto} />
                </div>
                <div>
                  <p>Status</p>
                  <select
                    className="w-full rounded-md p-2"
                    value={chamado.status}
                    onChange={(e) =>
                      setChamado({ ...chamado, status: e.target.value as Chamados["status"] })
                    }
                  >
                    <option value="Na loja">Na loja</option>
                    <option value="Fora da loja">Fora da loja</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Finalizado">Finalizado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                </div>

                <div>
                  <p>Nome do Cliente</p>
                  <Input
                    value={chamado.nomeCliente}
                    onChange={(e) => {
                      setChamado({ ...chamado, nomeCliente: e.target.value });
                      setErros({ ...erros, nomeCliente: "" });
                    }}
                  />
                  <InputError message={erros.nomeCliente} />
                </div>

                <div>
                  <p>Email do Cliente</p>
                  <Input
                    type="email"
                    value={chamado.emailCliente}
                    onChange={(e) => {
                      setChamado({ ...chamado, emailCliente: e.target.value });
                      setErros({ ...erros, emailCliente: "" });
                    }}
                  />
                  <InputError message={erros.emailCliente} />
                </div>

                <div>
                  <p>Telefone</p>
                  <Input
                    type="number"
                    value={chamado.telefoneCliente || ""}
                    onChange={(e) => {
                      setChamado({ ...chamado, telefoneCliente: Number(e.target.value) });
                      setErros({ ...erros, telefoneCliente: "" });
                    }}
                  />
                  <InputError message={erros.telefoneCliente} />
                </div>
              </div>
              <div className="flex flex-col h-[150px]">
                <p>Descrição do problema</p>
                <textarea
                  value={chamado.descricao}
                  onChange={(e) => {
                    setChamado({ ...chamado, descricao: e.target.value });
                    setErros({ ...erros, descricao: "" });
                  }}
                  className="flex-1 text-lg w-full p-2 border border-black rounded-lg text-sm resize-none"
                />
                <InputError message={erros.descricao} />
              </div>
            </div>
          )}
        </div>

        <div className="border-t p-4 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setMostrarDados(false)}>
            Cancelar
          </Button>
          <Button onClick={salvarChamado}>
            {idItem ? "Salvar alterações" : "Adicionar chamado"}
          </Button>
        </div>
      </div>
    </div>
  );
}
