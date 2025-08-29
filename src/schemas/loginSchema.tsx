import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email({ message: "Email invalido" })
    .refine(
      (validarFinalDoEmail) =>
        validarFinalDoEmail.endsWith(".com") ||
        validarFinalDoEmail.endsWith(".com.br"),
      { message: "O email deve terminar com .com ou .com.br" }
    ),
  senha: z.string().min(1, { message: "A senha é obrigatória." }),
});

export type LoginForm = z.infer<typeof loginSchema>;
