import { User } from "lucide-react";
import InputReutilizavel, {
  InputReutilizavelProps,
} from "../InputReutilizavel";

export default function InputNome(props: InputReutilizavelProps) {
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
