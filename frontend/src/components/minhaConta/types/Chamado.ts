export interface Chamado {
  id: number;
  titulo: string;
  descricao?: string;
  dataAbertura: string;
  status: "em_analise" | "concertado" | "cancelado";
}
