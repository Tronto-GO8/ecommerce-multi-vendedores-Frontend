import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

type CompactoMobileHeaderProps = {
  total: number;
  onCheckout?: () => void;
  expandido?: () => void;
};

export default function CompactoMobileHeader({
  total,
  onCheckout,
  expandido,
}: CompactoMobileHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="text-sm text-zinc-300">Total</div>
        <div className="text-lg font-bold text-zinc-50">
          R$ {total.toFixed(2)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
          onClick={onCheckout}
        >
          Continuar
        </Button>

        <Button
          aria-label="Abrir resumo"
          onClick={expandido}
          className="w-9 bg-zinc-800 hover:bg-zinc-700"
        >
          <ChevronUp size={18} />
        </Button>
      </div>
    </div>
  );
}
