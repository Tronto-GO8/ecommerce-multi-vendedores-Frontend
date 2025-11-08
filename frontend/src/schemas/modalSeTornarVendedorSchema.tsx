import z from "zod";

export const modalSeTornarVendedorSchema = z.object({
  nomeDaLoja: z.string().min(1, "Nome da loja é obrigatório").max(100),
  cnpj: z.preprocess(
    (val) => {
      if (typeof val === "string") {
        const digits = val.replace(/\D/g, "");
        return digits === "" ? undefined : digits;
      }
      return val;
    },
    z
      .string()
      .regex(/^\d{14}$/, "CNPJ inválido")
      .optional()
  ),
});
export type modalSeTornarVendedorForm = z.infer<
  typeof modalSeTornarVendedorSchema
>;
