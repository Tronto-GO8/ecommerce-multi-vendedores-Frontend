import { Mail } from "lucide-react";
import InputReutilizavel, {
  InputReutilizavelProps,
} from "../InputReutilizavel";

export default function InputEmail(props: InputReutilizavelProps) {
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
