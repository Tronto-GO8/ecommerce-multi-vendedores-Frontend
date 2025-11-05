import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock } from "lucide-react";
import InputReutilizavel, {
  InputReutilizavelProps,
} from "../InputReutilizavel";

type SenhaProps = InputReutilizavelProps & {
  label?: string;
  placeholder?: string;
};

export default function InputSenha({
  label = "Senha",
  placeholder = "Digite sua senha",
  ...props
}: SenhaProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrar = () => setMostrarSenha((s) => !s);

  const rightElement = (
    <Button
      type="button"
      variant="ghost"
      className="h-8 px-2 hover:bg-transparent"
      onClick={toggleMostrar}
      aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
      tabIndex={-1}
    >
      {mostrarSenha ? (
        <Eye className="h-4 w-4 text-muted-foreground" />
      ) : (
        <EyeOff className="h-4 w-4 text-muted-foreground" />
      )}
    </Button>
  );

  return (
    <InputReutilizavel
      label={label}
      icon={<Lock className="h-4 w-4 text-muted-foreground" />}
      type={mostrarSenha ? "text" : "password"}
      placeholder={placeholder}
      className="pr-10"
      containerClassName="w-full"
      rightElement={rightElement}
      {...props}
    />
  );
}
