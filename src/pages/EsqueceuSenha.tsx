import FormCardHeader from "@/components/loginCadastro/FormCardHeader";
import InputEmail from "@/components/loginCadastro/InputEmail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  EsqueceuSenhaForm,
  esqueceuSenhaSchema,
} from "@/schemas/esqueceuSenhaSchema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputError from "@/components/InputError";
import Header from "@/components/loginCadastro/Header";

export default function EsqueceuSenha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EsqueceuSenhaForm>({
    resolver: zodResolver(esqueceuSenhaSchema),
  });
  const [estaCarregando, setEstaCarregando] = useState(false);

  const enviarParaEmail = (data: EsqueceuSenhaForm) => {
    setEstaCarregando(true);
    console.log("Cadastro: ", data);
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <Card className="shadow-black">
          <FormCardHeader
            titulo="Esqueceu sua senha"
            descricao="Digite seu email para receber um link de recuperação"
            linkDeVoltar={{ to: "/login", label: "Voltar ao login" }}
          />
          <CardContent className="space-y-6">
            <form
              onSubmit={handleSubmit(enviarParaEmail)}
              className="space-y-4"
            >
              <InputEmail {...register("email")} isError={!!errors.email} />
              <InputError message={errors.email?.message} />
              <Button
                type="submit"
                className="w-full  border border-white bg-[#150f0f] text-white hover:bg-gray-900"
                disabled={estaCarregando}
              >
                {estaCarregando ? "Enviando..." : "Enviar link de recuperação"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
