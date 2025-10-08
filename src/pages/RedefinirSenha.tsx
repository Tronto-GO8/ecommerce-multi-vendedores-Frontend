import InputSenha from "@/components/loginCadastro/InputSenha";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RedefinirSenhaForm,
  redefinirSenhaSchema,
} from "@/schemas/RedefinirSenhaShema";
import ChecklistSenha from "@/components/loginCadastro/CheckListSenha";
import InputError from "@/components/InputError";
import FormCardHeader from "@/components/loginCadastro/FormCardHeader";
import Header from "@/components/loginCadastro/Header";

export default function RedefinirSenha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RedefinirSenhaForm>({
    resolver: zodResolver(redefinirSenhaSchema),
  });

  const [senhaDigitada, setSenhaDigitada] = useState("");
  const [estaCarregando, setEstaCarregando] = useState(false);

  const enviarFormRedifinido = (data: RedefinirSenhaForm) => {
    setEstaCarregando(true);
    const { novaSenha, confirmarSenha, ...dadosSemSenha } = data;
    console.log("Cadastro: ", dadosSemSenha);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <Card className="shadow-black">
          <FormCardHeader
            titulo="Trocar senha"
            descricao="Defina uma nova senha para sua conta. Digite e confirme sua nova
              senha abaixo."
            linkDeVoltar={{ to: "/login", label: "Voltar ao login" }}
          />
          <CardContent className="space-y-6">
            <form
              onSubmit={handleSubmit(enviarFormRedifinido)}
              className="space-y-4"
            >
              <InputSenha
                label="Nova senha"
                {...register("novaSenha")}
                isError={!!errors.novaSenha}
                onChange={(e) => {
                  setSenhaDigitada(e.target.value);
                  register("novaSenha").onChange(e);
                }}
              />
              <ChecklistSenha senha={senhaDigitada} />
              <InputSenha
                label="Confirmar nova senha"
                {...register("confirmarSenha")}
                isError={!!errors.confirmarSenha}
              />
              <InputError message={errors.confirmarSenha?.message} />
              <Button
                type="submit"
                className="w-full  border border-white bg-[#303030] text-white hover:bg-gray-900"
                disabled={estaCarregando}
              >
                {estaCarregando ? "Redefinindo..." : "Confirmar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
