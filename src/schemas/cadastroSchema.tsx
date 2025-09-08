import { z } from "zod";
import { senhaSchema } from "./senhaSchema";
export const cadastroSchema = z
  .object({
    nome: z
      .string()
      .min(3, { message: "Nome precisa ter pelo menos 3 letras" }),
    email: z
      .email({ message: "Email invalido" })
      .refine(
        (validarFinalDoEmail) =>
          validarFinalDoEmail.endsWith(".com") ||
          validarFinalDoEmail.endsWith(".com.br"),
        { message: "O email deve terminar com .com ou .com.br" }
      ),
    senha: senhaSchema,
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não conferem",
  });

export type CadastroForm = z.infer<typeof cadastroSchema>;
