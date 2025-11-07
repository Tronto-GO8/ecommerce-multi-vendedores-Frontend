import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import InputReutilizavel, {
  InputReutilizavelProps,
} from "../InputReutilizavel";
import { Button } from "../ui/button";
import { useState } from "react";

export function InputNome(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Nome"
      type="text"
      placeholder="Seu nome completo"
      icon={<User className="h-4 w-4 text-muted-foreground" />}
      {...props}
    />
  );
}

export function InputEmail(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="E-mail"
      type="email"
      placeholder="seuemail@exemplo.com"
      icon={<Mail className="h-4 w-4 text-muted-foreground" />}
      {...props}
    />
  );
}

export function InputSenha(props: InputReutilizavelProps) {
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
      label="Senha"
      icon={<Lock className="h-4 w-4 text-muted-foreground" />}
      type={mostrarSenha ? "text" : "password"}
      placeholder="Digite sua senha"
      className="pr-10"
      containerClassName="w-full"
      rightElement={rightElement}
      {...props}
    />
  );
}
export default InputReutilizavel;
