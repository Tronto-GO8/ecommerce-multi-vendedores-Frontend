import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { iconeComInput } from "@/styles/variaveisTailwind/Reutilizaveis";

export type InputReutilizavelProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
    containerClassName?: string;
    isError?: boolean;
  };

const InputReutilizavel = React.forwardRef<
  HTMLInputElement,
  InputReutilizavelProps
>(
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
    const renderizarIconeSeFornecido = () => {
      if (!icon) return null;
      return <span className={iconeComInput}>{icon}</span>;
    };
    return (
      <div className="space-y-2">
        {label && <Label className="text-sm">{label}</Label>}
        <div className={`relative ${containerClassName ?? ""}`}>
          {renderizarIconeSeFornecido()}
          <Input
            ref={ref}
            className={`w-full pl-10 ${className ?? ""} ${
              isError
                ? "border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            {...inputProps}
          />
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
