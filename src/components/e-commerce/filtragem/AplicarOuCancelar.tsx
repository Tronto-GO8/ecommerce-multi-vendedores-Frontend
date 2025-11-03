import { Button } from "@/components/ui/button";

interface AplicarOuCancelarProps {
  cancelar: () => void;
  aplicar: () => void;
  aplicarLabel?: string;
  cancelarLabel?: string;
  btnAplicarClassName?: string;
  btnCancelarClassName?: string;
  tamanho?: "sm" | "lg" | "md";
  cancelarVariante?: "ghost" | "outline" | "link" | "default";
  className?: string;
}

export default function AplicarOuCancelar({
  aplicar,
  cancelar,
  aplicarLabel,
  cancelarLabel,
  btnAplicarClassName,
  btnCancelarClassName,
  tamanho,
  cancelarVariante,
  className = "",
}: AplicarOuCancelarProps) {
  return (
    <div className={className}>
      <Button
        className={btnCancelarClassName}
        onClick={cancelar}
        size={tamanho as any}
        variant={cancelarVariante}
      >
        {cancelarLabel}
      </Button>
      <Button
        className={btnAplicarClassName}
        onClick={aplicar}
        size={tamanho as any}
      >
        {aplicarLabel}
      </Button>
    </div>
  );
}
