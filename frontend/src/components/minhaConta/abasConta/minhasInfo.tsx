import React, { useState, useEffect } from "react";
import { User } from "../types/User";
import { getUser, updateUser, changePassword } from "../services/userService";

export default function MinhasInfo() {
  const [editando, setEditando] = useState(false);
  const [mostraSenha, setMostraSenha] = useState(false);
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    email: "",
    cpf: "",
    endereco: {
      cep: "",
      numero: "",
      cidade: "",
      rua: "",
      complemento: "",
      bairro: "",
      estado: "",
    },
  });

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");


  const token = "TOKEN_DO_USUARIO_AQUI";

  useEffect(() => {
    async function carregarDados() {
      try {
        const dados = await getUser(token);
        setUser(dados);
      } catch (error) {
        console.error(error);
      }
    }
    carregarDados();
  }, [token]);

  async function handleSalvar() {
    if (!user) return;
    try {
      await updateUser(user, token);
      setEditando(false);
      alert("Informações atualizadas com sucesso!");
    } catch (error) {
      alert("Erro ao atualizar informações.");
    }
  }

  async function handleAlterarSenha() {
    if (novaSenha !== confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    try {
      await changePassword(senhaAtual, novaSenha, token);
      alert("Senha alterada com sucesso!");
      setMostraSenha(false);
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmarSenha("");
    } catch {
      alert("Erro ao alterar senha.");
    }


  }

  if (!user) return <p>Carregando...</p>;


  return (
    <main className="dark:bg-gray-900 dark:text-gray-100">
      <section className="border border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-gray-100 rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-3 mb-6">
          <h2 className="text-xl font-semibold">Minhas Informações</h2>
          <button
            onClick={() => setEditando(!editando)}
            className="text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
          >
            {editando ? "Cancelar" : "Editar"}
          </button>
        </div>

        <form className="space-y-5 md:col-span-2">
          <div>
            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              Nome
              <input
                type="text"
                value={user.nome}
                readOnly={!editando}
                onChange={(e) => {
                  if (!user) return;
                  setUser({
                    ...user,
                    nome: e.target.value,
                  });
                }}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>

            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              Email
              <input
                type="text"
                value={user.email}
                readOnly={!editando}
                onChange={(e) => {
                  if (!user) return;
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>

            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              CPF
              <input
                type="text"
                value={user.cpf}
                readOnly={!editando}

                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
          </div>

          <div className="pt-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Endereço
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                CEP
                <input
                  type="text"
                  value={user.endereco.cep}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, cep: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Número
                <input
                  type="text"
                  value={user.endereco.numero}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, numero: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Cidade
                <input
                  type="text"
                  value={user.endereco.cidade}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, cidade: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Rua
                <input
                  type="text"
                  value={user.endereco.rua}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, rua: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Complemento
                <input
                  type="text"
                  value={user.endereco.complemento}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, complemento: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Bairro
                <input
                  type="text"
                  value={user.endereco.bairro}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, bairro: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>

              <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
                Estado
                <input
                  type="text"
                  value={user.endereco.estado}
                  readOnly={!editando}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endereco: { ...user.endereco, estado: e.target.value },
                    })
                  }
                  className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
                />
              </label>
            </div>
          </div>
        </form>

        {editando && (
          <div className="flex flex-row justify-start items-center gap-4 mt-6 w-full">
            <button
              onClick={handleSalvar}
              className="text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
              Salvar
            </button>
            <button
              onClick={() => setMostraSenha(true)}
              className="text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
            >
              Alterar Senha
            </button>
          </div>
        )}

        {mostraSenha && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 dark:text-gray-100 p-6 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50">
            <h3 className="text-lg font-semibold mb-4">Alterar Senha</h3>

            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              Senha atual
              <input
                value={senhaAtual}
                type="password"
                onChange={(e) => setSenhaAtual(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 mb-3 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>

            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              Nova senha
              <input
                value={novaSenha}
                type="password"
                onChange={(e) => setNovaSenha(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 mb-3 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>

            <label className="block font-medium mb-1 text-gray-800 dark:text-gray-200">
              Confirmar senha
              <input
                value={confirmarSenha}
                type="password"
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 mb-4 bg-gray-50 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>

            <div className="flex justify-start gap-2">
              <button
                onClick={() => setMostraSenha(false)}
                className="px-4 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleAlterarSenha}
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700">
                Alterar senha
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
