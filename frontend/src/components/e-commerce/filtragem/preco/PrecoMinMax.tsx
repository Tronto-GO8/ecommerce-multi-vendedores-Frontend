import { Slider } from "@/components/ui/slider";

interface PrecoMinMaxProps {
  faixaDePreco: number[];
  mudarPreco: (newValues: number[]) => void;
  min?: number;
  max?: number;
  pulandoPrecoEm?: number;
}

export default function PrecoMinMax({
  faixaDePreco,
  mudarPreco,
  min = 0,
  max = 0,
  pulandoPrecoEm,
}: PrecoMinMaxProps) {
  const [valorMin = min, valorMax = max] = faixaDePreco;
  return (
    <div className="space-y-4">
      <div className="px-2">
        <Slider
          value={faixaDePreco}
          onValueChange={mudarPreco}
          max={max}
          min={min}
          step={pulandoPrecoEm}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Min:</span>
          <span className="font-medium">
            R$ {Number(valorMin).toLocaleString("pt-BR")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Max:</span>
          <span className="font-medium">
            R$ {Number(valorMax).toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </div>
  );
}
