import { z } from "zod";
import { regrasSenha } from "./regrasSenha";
export const senhaSchema = z
  .string()
  .min(8, { error: "A senha é obrigatória." })
  .superRefine((senhaAtribuida, contextoDeErros) => {
    regrasSenha.slice(1).forEach((regra) => {
      if (!regra.regex.test(senhaAtribuida)) {
        contextoDeErros.addIssue({ code: "custom", message: regra.label });
      }
    });
  });
