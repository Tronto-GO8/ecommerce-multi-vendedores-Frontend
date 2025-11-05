import { CheckCircle, XCircle } from "lucide-react";
import { Cargo, getPermissoesDoCargo, Permissao } from "./permissoesFuncionarios";

const todasPermissoes: Permissao[] = [
  "Editar Chamados",
  "Gerenciar Funcionários",
  "Visualizar Relatórios",
  "Cadastrar Produtos",
];

interface ListaPermissoesCargoProps {
  cargo: Cargo;
}

export function ListaPermissoesCargo({ cargo }: ListaPermissoesCargoProps) {
  const permissoesAtivas = getPermissoesDoCargo(cargo);

  return (
    <div>
      <p className="font-semibold text-gray-700">
        Permissões do cargo: {cargo}
      </p>
      <ul className="space-y-1 mt-2 text-sm">
        {todasPermissoes.map((permissao, idx) => {
          const ativo = permissoesAtivas.includes(permissao);
          return (
            <li
              key={idx}
              className={`flex items-center gap-2 ${
                ativo ? "text-green-600" : "text-gray-400"
              }`}
            >
              {ativo ? (
                <CheckCircle size={16} className="text-green-600" />
              ) : (
                <XCircle size={16} className="text-gray-400" />
              )}
              {permissao}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
