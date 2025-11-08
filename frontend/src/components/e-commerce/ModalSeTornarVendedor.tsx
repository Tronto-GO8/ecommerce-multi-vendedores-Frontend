import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  modalSeTornarVendedorForm,
  modalSeTornarVendedorSchema,
} from "@/schemas/modalSeTornarVendedorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

interface ModalSeTornarVendedorProps {
  mostrarModalVendedor: boolean;
  fecharModal: () => void;
  confirmar: (dados: { nomeDaLoja: string; cnpj: string }) => void;
}

export default function ModalSeTornarVendedor({
  mostrarModalVendedor,
  fecharModal,
  confirmar,
}: ModalSeTornarVendedorProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(modalSeTornarVendedorSchema),
    defaultValues: { nomeDaLoja: "", cnpj: "" },
  });

  // quando fechar ou abrir, reseta o formulário
  useEffect(() => {
    if (!mostrarModalVendedor) reset();
  }, [mostrarModalVendedor, reset]);

  const enviar = (data: modalSeTornarVendedorForm) => {
    confirmar({ nomeDaLoja: data.nomeDaLoja.trim(), cnpj: data.cnpj ?? "" });
    reset();
  };
  return (
    <Dialog open={mostrarModalVendedor} onOpenChange={fecharModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Torne-se um Vendedor</DialogTitle>
          <DialogDescription>
            Comece a vender seus produtos em nossa plataforma. Preencha as
            informações abaixo para criar sua loja.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(enviar)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="nomeDaLoja">Nome da Loja *</Label>
            <Input
              id="nomeDaLoja"
              placeholder="Ex: Minha Loja Tech"
              {...register("nomeDaLoja")}
            />
            {errors.nomeDaLoja && (
              <p className="text-sm text-red-500 mt-1">
                {errors.nomeDaLoja.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cnpj">CNPJ (Opcional)</Label>
            <Input
              id="cnpj"
              placeholder="00.000.000/0000-00"
              {...register("cnpj")}
            />
            {errors.cnpj && (
              <p className="text-sm text-red-500 mt-1">{errors.cnpj.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                fecharModal();
                reset();
              }}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Confirmar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
