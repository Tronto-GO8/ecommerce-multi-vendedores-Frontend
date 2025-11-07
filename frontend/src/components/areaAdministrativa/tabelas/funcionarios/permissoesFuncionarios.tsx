export type Cargo = "Gerente" | "Técnico" | "Vendedor";

export type Permissao =
  | "Editar Chamados"
  | "Gerenciar Funcionários"
  | "Visualizar Relatórios"
  | "Cadastrar Produtos";

export const permissoesPorCargo: Record<Cargo, Permissao[]> = {
  Gerente: [
    "Editar Chamados",
    "Gerenciar Funcionários",
    "Visualizar Relatórios",
    "Cadastrar Produtos",
  ],
  Técnico: ["Editar Chamados", "Visualizar Relatórios"],
  Vendedor: ["Cadastrar Produtos"],
};

export function getPermissoesDoCargo(cargo: Cargo): Permissao[] {
  return permissoesPorCargo[cargo];
}
