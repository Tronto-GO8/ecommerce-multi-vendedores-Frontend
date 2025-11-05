import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  direcao: "esquerda" | "direita";
  onClick: () => void;
  esconder?: boolean;
}

export function CarouselBtn({
  direcao,
  onClick,
  esconder,
}: CarouselButtonProps) {
  if (esconder) return null;
  const Icon = direcao === "esquerda" ? ChevronLeft : ChevronRight;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      aria-label={direcao === "esquerda" ? "Anterior" : "Próximo"}
      className="p-1 text-white hover:bg-slate-800 transition-all"
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
