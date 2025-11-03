// SubcategoryCarousel.tsx
import { Button } from "@/components/ui/button";

interface SubCategoriaCarouselProps {
  subcategorias: string[];
  selecionadas: string[];
  toggle: (sub: string) => void;
}

export default function SubCategoriaCarousel({
  subcategorias,
  selecionadas,
  toggle,
}: SubCategoriaCarouselProps) {
  return (
    <div className="bg-[#202020] p-3 rounded-md">
      <div className="flex gap-2 flex-wrap">
        {subcategorias.map((sub) => {
          const ativo = selecionadas.includes(sub);
          return (
            <Button
              key={sub}
              variant={ativo ? "default" : "outline"}
              onClick={() => toggle(sub)}
              className={`text-sm ${
                ativo ? "bg-emerald-600 text-white" : "text-white"
              }`}
            >
              {sub}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
