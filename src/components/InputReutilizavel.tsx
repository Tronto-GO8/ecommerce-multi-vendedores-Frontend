import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { iconeComInput } from "@/styles/variaveisTailwind/Reutilizaveis";

export type InputReutilizavelProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string; // texto opcional exibido acima do input.
    icon?: React.ReactNode; // ícone opcional exibido à esquerda, dentro do input.
    /** Elemento que será posicionado à direita, dentro do mesmo container (ex.: botão eye) */
    rightElement?: React.ReactNode;
    /** classes extras para o container relativo */
    containerClassName?: string;
    isError?: boolean; //aplica estilos de erro (bordas/vermelho).
  };
// Cria o componente usando React.forwardRef, permitindo passar uma ref para o input (útil para integração com React Hook Form, foco automático etc).
// Especifica o tipo da ref (HTMLInputElement) e das props (InputReutilizavelProps).
const InputReutilizavel = React.forwardRef<
  HTMLInputElement,
  InputReutilizavelProps
>(
  //   Desestrutura as props recebidas.
  // ...inputProps garante que todas as props extras do <input> (tipo = "senha", placeholder, etc.) sejam repassadas
  (
    {
      label,
      icon,
      rightElement,
      className,
      containerClassName,
      isError,
      ...inputProps
    },
    ref
  ) => {
    // Função auxiliar que só renderiza o ícone se a prop icon foi passada.
    const renderizarIconeSeFornecido = () => {
      if (!icon) return null;
      return <span className={iconeComInput}>{icon}</span>;
    };
    return (
      <div className="space-y-2">
        {/* Se a prop label existir, renderiza o componente <Label> acima do input. */}
        {label && <Label className="text-sm">{label}</Label>}
        <div className={`relative ${containerClassName ?? ""}`}>
          {/* Se icon existir, é renderizado à esquerda dentro do input. */}
          {renderizarIconeSeFornecido()}
          <Input
            ref={ref}
            className={`w-full pl-10 ${className ?? ""} ${
              // Se isError for true, adiciona borda/vermelho e estilos de foco vermelho.
              isError
                ? "border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            {...inputProps}
          />
          {/* Se rightElement existir, renderiza um container fixado à direita (ex: botão de mostrar/ocultar senha.). */}
          {rightElement && (
            <div className="absolute right-0 top-0 h-full flex items-center pr-2">
              {rightElement}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputReutilizavel.displayName = "InputReutilizavel";
export default InputReutilizavel;
