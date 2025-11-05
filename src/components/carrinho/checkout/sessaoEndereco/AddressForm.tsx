import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Loader2 } from "lucide-react";
import type { Address } from "@/type/ProdutosType";
import InputNome from "@/components/loginCadastro/InputNome";
import {
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputEstado,
  InputNumero,
  InputRua,
} from "./InputsEndereco";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enderecoSchema,
  EnderecoFormSchema as AddressFormType,
} from "@/schemas/enderecoShema";
import InputError from "@/components/InputError";

interface AddressFormProps {
  onAddressSubmit: (address: Address) => void;
  initialAddress?: Address | null;
  compact?: boolean;
}

export function AddressForm({
  onAddressSubmit,
  initialAddress,
  compact = false,
}: AddressFormProps) {
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AddressFormType>({
    resolver: zodResolver(enderecoSchema),
    defaultValues: initialAddress || {
      nome: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  });

  const cepValue = watch("cep");

  // Autofill simulado quando o CEP está completo (8 dígitos)
  useEffect(() => {
    const apenasDigitos = (cepValue || "").replace(/\D/g, "");
    if (apenasDigitos.length === 8) {
      setIsLoadingCep(true);
      // simula busca e preenche campos
      const timer = setTimeout(() => {
        setValue("rua", "Rua das Flores");
        setValue("bairro", "Centro");
        setValue("cidade", "São Paulo");
        setValue("estado", "SP");
        setIsLoadingCep(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [cepValue, setValue]);

  const onSubmit = (data: AddressFormType) => {
    onAddressSubmit(data as unknown as Address);
  };

  const FormContent = (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <InputNome
            {...register("nome")}
            className="bg-zinc-800 border-zinc-700 text-zinc-50 placeholder:text-zinc-500"
            isError={!!errors.nome}
          />
          <InputError message={errors.nome?.message} />
        </div>

        <div className="md:col-span-2">
          <InputCep
            {...register("cep")}
            rightElement={
              isLoadingCep ? <Loader2 className="w-4 h-4 animate-spin" /> : null
            }
            isError={!!errors.cep}
          />
        </div>

        <div className="md:col-span-2">
          <InputRua {...register("rua")} isError={!!errors.rua} />
          <InputError message={errors.rua?.message} />
        </div>

        <div>
          <InputNumero {...register("numero")} isError={!!errors.numero} />
          <InputError message={errors.numero?.message} />
        </div>

        <div>
          <InputComplemento {...register("complemento")} />
          <InputError message={errors.complemento?.message} />
        </div>

        <div>
          <InputBairro {...register("bairro")} isError={!!errors.bairro} />
          <InputError message={errors.bairro?.message} />
        </div>

        <div>
          <InputCidade {...register("cidade")} isError={!!errors.cidade} />
          <InputError message={errors.cidade?.message} />
        </div>

        <div>
          <InputEstado {...register("estado")} isError={!!errors.estado} />
          <InputError message={errors.estado?.message} />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
        disabled={isSubmitting}
      >
        {compact ? "Salvar Endereço" : "Calcular Frete"}
      </Button>
    </form>
  );

  if (compact) {
    return FormContent;
  }

  return (
    <Card className="bg-zinc-900 border-zinc-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-zinc-400" />
        <h2 className="text-xl font-bold text-zinc-50">Endereço de Entrega</h2>
      </div>
      {FormContent}
    </Card>
  );
}
