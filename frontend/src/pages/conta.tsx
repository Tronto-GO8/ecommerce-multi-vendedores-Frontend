import { useState } from "react";
import CentralConta, { ModuloConta } from "../components/minhaConta/CentralConta";

export default function Conta() {
  const [moduloAtivo, setModuloAtivo] = useState<ModuloConta>("minhas-info");

  return (
    <div className="dark:bg-gray-900 flex flex-col min-h-screen font-sans bg-gray-50">
      <header className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 border-b p-5 text-center">
        <h1 className="text-2xl font-semibold">Minha Conta</h1>

        <nav className="mt-2.5 flex w-full border-t dark:border-gray-700 pt-3 justify-between">
          <button
            onClick={() => setModuloAtivo("minhas-info")}
            className={`flex-1 flex justify-center items-center px-4 py-3 rounded-md font-medium ${moduloAtivo === "minhas-info"
                ? "bg-gray-300 dark:bg-gray-700"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className="material-symbols-outlined mr-1">person</span> Informações
          </button>

          <button
            onClick={() => setModuloAtivo("pedidos")}
            className={`flex-1 flex justify-center items-center px-4 py-3 rounded-md font-medium ${moduloAtivo === "pedidos"
                ? "bg-gray-300 dark:bg-gray-700"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className="material-symbols-outlined mr-1">box</span> Pedidos
          </button>

          <button
            onClick={() => setModuloAtivo("chamados")}
            className={`flex-1 flex justify-center items-center px-4 py-3 rounded-md font-medium ${moduloAtivo === "chamados"
                ? "bg-gray-300 dark:bg-gray-700"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className="material-symbols-outlined mr-1">headphones</span> Chamados
          </button>

          <button
            onClick={() => setModuloAtivo("configuracoes")}
            className={`flex-1 flex justify-center items-center px-4 py-3 rounded-md font-medium ${moduloAtivo === "configuracoes"
                ? "bg-gray-300 dark:bg-gray-700"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            <span className="material-symbols-outlined mr-1">settings</span> Configurações
          </button>
        </nav>

      </header>

      <main className="flex-1 p-6">
        <CentralConta moduloAtivo={moduloAtivo} />
      </main>
    </div>
  );
}
