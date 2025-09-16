import { z } from "zod";

export const chamadoSchema = z.object({
  nomeProduto: z.string().min(2, "O nome do produto é obrigatório"),
  identificador: z.string().min(5, "Identificador inválido"),
  descricao: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  tipoProduto: z.string().min(1, "Selecione um tipo de produto"), 
});


export type ChamadoForm = z.infer<typeof chamadoSchema>;

export type ChamadoResponse = ChamadoForm & {
  idPedido: string;
  status: string;
};
