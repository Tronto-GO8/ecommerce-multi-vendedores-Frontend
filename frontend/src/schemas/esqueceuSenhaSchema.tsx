import { z } from "zod";

export const esqueceuSenhaSchema = z.object({
  email: z
    .email({ message: "Email invalido" })
    .refine(
      (validarFinalDoEmail) =>
        validarFinalDoEmail.endsWith(".com") ||
        validarFinalDoEmail.endsWith(".com.br"),
      { message: "O email deve terminar com .com ou .com.br" }
    ),
});

export type EsqueceuSenhaForm = z.infer<typeof esqueceuSenhaSchema>;
