import InputSenha from "@/components/loginCadastro/InputSenha";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RedefinirSenhaForm,
  redefinirSenhaSchema,
} from "@/schemas/RedefinirSenhaShema";
import ChecklistSenha from "@/components/loginCadastro/CheckListSenha";
import InputError from "@/components/InputError";

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
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
      <Card className="shadow-black">
        <CardHeader className="space-y-4">
          <Link
            to="/login"
            className="inline-flex items-center text-sm hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao login
          </Link>

          <div>
            <CardTitle className="text-2xl font-bold font-sans">
              Trocar senha
            </CardTitle>
            <CardDescription className="text-sm mt-2">
              Defina uma nova senha para sua conta. Digite e confirme sua nova
              senha abaixo.
            </CardDescription>
          </div>
        </CardHeader>
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
  );
}
