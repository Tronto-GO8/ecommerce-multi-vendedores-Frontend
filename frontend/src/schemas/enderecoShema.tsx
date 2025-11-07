import { z } from "zod";

export const cepRegex = /^\d{5}-\d{3}$|^\d{8}$/;

export const enderecoSchema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome é obrigatório." })
    .max(100, { message: "Nome muito longo." }),
  cep: z
    .string()
    .regex(cepRegex, { message: "CEP inválido. Use 00000-000 ou 00000000." }),
  rua: z.string().min(1, { message: "A rua é obrigatória." }),
  numero: z.string().min(1, { message: "O número é obrigatório." }),
  complemento: z.string().optional().nullable(),
  bairro: z.string().min(1, { message: "O bairro é obrigatório." }),
  cidade: z.string().min(1, { message: "A cidade é obrigatória." }),
  estado: z
    .string()
    .regex(/^[A-Za-z]{2}$/, { message: "UF inválida. Informe 2 letras." })
    .transform((s) => s.toUpperCase()),
});

export type EnderecoFormSchema = z.infer<typeof enderecoSchema>;
