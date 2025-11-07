import InputReutilizavel, {
  InputReutilizavelProps,
} from "@/components/InputReutilizavel";
import { formInputEnderecoCarrinho } from "@/styles/variaveisTailwind/Reutilizaveis";
import { MapPin, Home, Hash, Edit3, CornerUpLeft, Globe } from "lucide-react";

const tamanhoIcone = "h-4 w-4 text-muted-foreground";

export function InputCep(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="CEP"
      id="cep"
      placeholder="00000-000"
      className={formInputEnderecoCarrinho}
      icon={<MapPin className={tamanhoIcone} />}
      maxLength={9}
      {...props}
    />
  );
}

export function InputRua(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Rua"
      id="cep"
      placeholder="Nome da rua"
      className={formInputEnderecoCarrinho}
      icon={<Home className={tamanhoIcone} />}
      {...props}
    />
  );
}

export function InputNumero(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Número"
      id="numero"
      placeholder="123"
      className={formInputEnderecoCarrinho}
      icon={<Hash className={tamanhoIcone} />}
      {...props}
    />
  );
}

export function InputComplemento(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Complemento"
      id="complemento"
      placeholder="Apto, bloco, etc"
      className={formInputEnderecoCarrinho}
      icon={<Edit3 className={tamanhoIcone} />}
      {...props}
    />
  );
}

export function InputBairro(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Bairro"
      id="bairro"
      placeholder="Nome do bairro"
      className={formInputEnderecoCarrinho}
      icon={<CornerUpLeft className={tamanhoIcone} />}
      {...props}
    />
  );
}

export function InputCidade(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Cidade"
      id="cidade"
      placeholder="Nome da cidade"
      className={formInputEnderecoCarrinho}
      icon={<Globe className={tamanhoIcone} />}
      {...props}
    />
  );
}

export function InputEstado(props: InputReutilizavelProps) {
  return (
    <InputReutilizavel
      label="Estado"
      id="estado"
      placeholder="UF"
      maxLength={2}
      className={formInputEnderecoCarrinho}
      icon={<Globe className={tamanhoIcone} />}
      {...props}
    />
  );
}
export default InputReutilizavel;
