import { z } from "zod";
import { senhaSchema } from "./senhaSchema";
export const redefinirSenhaSchema = z
  .object({
    novaSenha: senhaSchema,
    confirmarSenha: z.string(),
  })
  .refine((data) => data.novaSenha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não conferem",
  });

export type RedefinirSenhaForm = z.infer<typeof redefinirSenhaSchema>;
