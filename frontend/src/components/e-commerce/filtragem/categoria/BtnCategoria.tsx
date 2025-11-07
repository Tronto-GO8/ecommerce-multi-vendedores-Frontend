import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface BtnCategoriaProps {
  mostrarCarousel: () => void;
  quantidadeSelecionada?: number;
}

export default function BtnCategoria({
  mostrarCarousel,
  quantidadeSelecionada = 0,
}: BtnCategoriaProps) {
  return (
    <div className="flex items-center gap-2">
      <Button className="gap-2" onClick={mostrarCarousel}>
        <SlidersHorizontal className="h-4 w-4" />
        Categorias
        {quantidadeSelecionada > 0 && (
          <span className="ml-2 text-xs bg-emerald-600 px-2 py-0.5 rounded-full">
            {quantidadeSelecionada}
          </span>
        )}
      </Button>
    </div>
  );
}
