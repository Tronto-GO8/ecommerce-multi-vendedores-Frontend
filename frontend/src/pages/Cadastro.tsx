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
import Header from "@/components/loginCadastro/Header";
import { useNavigate } from "react-router-dom";
import {
  InputNome,
  InputEmail,
  InputSenha,
} from "@/components/loginCadastro/InputsLoginCadastro";
import { useAuth } from "@/contexts/AuthContext";
import { useSubmitStatus } from "@/hooks/useSubmitStatus";

export default function Cadastrar() {
  const {
    register,
    handleSubmit,
    formState: { errors }, setValue
  } = useForm<CadastroForm>({
    resolver: zodResolver(cadastroSchema),
  });

  const [senhaDigitada, setSenhaDigitada] = useState("");
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const {
    status,
    serverError,
    startLoading,
    handleSuccess,
    handleError,
    getButtonContent,
    getButtonStyles,
  } = useSubmitStatus({
    onSuccess: () => navigate("/login"),
  });

  const enviarFormCadastro = async (data: CadastroForm) => {
    startLoading();

    try {
      const response = await fetch("http://localhost:8080/Techventory/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          senha: data.senha,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        handleError(result.message ?? "Erro ao criar conta");
        return;
      }
      handleSuccess(); // isso redireciona para /login
    } catch (error) {
      handleError("Erro de conexão com o servidor");
    }
  };

  return (
    <div>
      <Header />
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
                    setValue("senha", e.target.value, { shouldValidate: true });
                  }}
                />
                <ChecklistSenha senha={senhaDigitada} />
                <InputSenha
                  label="Confirmar Senha"
                  {...register("confirmarSenha")}
                  isError={!!errors.confirmarSenha}
                />
                <InputError message={errors.confirmarSenha?.message} />

                {serverError && (
                  <p className="text-sm text-red-400">{serverError}</p>
                )}

                <Button
                  type="submit"
                  className={getButtonStyles()}
                  disabled={status !== "idle"}
                >
                  {getButtonContent() || "Criar Conta"}
                </Button>
              </form>
              <OuSeparador strVisivel={true} />
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
    </div>
  );
}
