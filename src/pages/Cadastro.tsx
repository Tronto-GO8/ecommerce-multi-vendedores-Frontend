import InputNome from "@/components/loginCadastro/InputNome";
import InputEmail from "@/components/loginCadastro/InputEmail";
import InputSenha from "@/components/loginCadastro/InputSenha";
import { Button } from "@/components/ui/button";
import OuSeparador from "@/components/ui/OuSeparador";
import LoginSocial from "@/components/loginCadastro/LoginSocial";
import TextoLinkAlternativo from "@/components/ui/TextoLinkAlternativo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import ChecklistSenha from "@/components/loginCadastro/CheckListSenha";
import { CadastroForm, cadastroSchema } from "@/schemas/cadastroSchema";
import InputError from "@/components/InputError";
import FormCardHeader from "@/components/loginCadastro/FormCardHeader";

export default function Cadastrar() {
  const {
    register, //conecta os inputs ao form.
    handleSubmit, //função que processa antes de enviar.
    formState: { errors },
  } = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
  }); // contém os erros de validação gerados pelo zodResolver(cadastroSchema).

  //   Estado local para armazenar a senha conforme o usuário digita.
  // Necessário para atualizar o ChecklistSenha
  const [senhaDigitada, setSenhaDigitada] = useState("");

  const enviarFormCadastro = (data: CadastroForm) => {
    // Separa senha e confirmarSenha do resto dos dados (por segurança, pode ser que você não queira logar/exibir senhas).
    const { senha, confirmarSenha, ...dadosSemSenha } = data;
    // Mostra os dados no console como teste.
    console.log("Cadastro: ", dadosSemSenha);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-black">
          <FormCardHeader titulo="Criar conta" textoCentralizado />
          <CardContent className="space-y-2">
            <form
              className="space-y-4 border-dashed border-l-black"
              onSubmit={handleSubmit(enviarFormCadastro)}
            >
              <InputNome {...register("nome")} isError={!!errors.nome} />
              <InputError message={errors.nome?.message} />
              <InputEmail {...register("email")} isError={!!errors.email} />
              <InputError message={errors.email?.message} />
              <InputSenha
                label="Senha"
                {...register("senha")}
                isError={!!errors.senha}
                onChange={(e) => {
                  setSenhaDigitada(e.target.value);
                  register("senha").onChange(e);
                }} //No onChange, além de atualizar o form, salva o valor em senhaDigitada.
              />
              {/* validando a senha digitada em tempo real. */}
              <ChecklistSenha senha={senhaDigitada} />
              <InputSenha
                label="Confirmar Senha"
                {...register("confirmarSenha")}
                isError={!!errors.confirmarSenha}
              />
              <InputError message={errors.confirmarSenha?.message} />
              <Button type="submit" className="w-full">
                Criar Conta
              </Button>
            </form>
            <OuSeparador />
            <LoginSocial />
            <TextoLinkAlternativo
              texto="Já tem uma conta?"
              textoLink="Entrar"
              to="/login"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
