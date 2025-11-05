import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import PrecoMinMax from "./PrecoMinMax";
import AplicarOuCancelar from "../AplicarOuCancelar";

interface FiltrarPrecoProps {
  preco: {
    min?: number;
    max?: number;
  };
  aplicarFiltroDePreco?: (faixa: { min: number; max: number }) => void;
}

export default function FiltrarPreco({
  preco,
  aplicarFiltroDePreco,
}: FiltrarPrecoProps) {
  const precoMin = preco.min ?? 0;
  const precoMax = preco.max ?? 0;
  const [faixaDePreco, setFaixaDePreco] = useState<number[]>([
    precoMin,
    precoMax,
  ]);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  useEffect(() => {
    setFaixaDePreco([precoMin, precoMax]);
  }, [precoMin, precoMax]);

  const applyPriceFilter = () => {
    setIsPriceDropdownOpen(false);
    const [min, max] = faixaDePreco;
    console.log("[FiltrarPreco] aplicando faixa:", { min, max });
    if (aplicarFiltroDePreco) aplicarFiltroDePreco({ min, max });
  };

  const clearPriceFilter = () => {
    const desativar = [precoMin, precoMax];
    setFaixaDePreco(desativar);
    setIsPriceDropdownOpen(false);
    if (aplicarFiltroDePreco)
      aplicarFiltroDePreco({ min: precoMin, max: precoMax });
  };

  const getPriceDisplayText = () => {
    const [min, max] = faixaDePreco;
    return `R$ ${min.toLocaleString()} - R$ ${max.toLocaleString()}`;
  };

  const mudarPreco = (newValues: number[]) => {
    if (newValues.length === 2) {
      setFaixaDePreco(newValues);
    }
  };

  return (
    <Popover open={isPriceDropdownOpen} onOpenChange={setIsPriceDropdownOpen}>
      <PopoverTrigger asChild>
        <Button>
          <div className="flex items-center gap-2">
            <span className="text-sm">{getPriceDisplayText()}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="font-medium text-sm">Definir faixa de preço</h4>
          </div>

          <PrecoMinMax
            faixaDePreco={faixaDePreco}
            mudarPreco={mudarPreco}
            min={precoMin}
            max={precoMax}
            pulandoPrecoEm={50}
          />

          <AplicarOuCancelar
            aplicar={applyPriceFilter}
            cancelar={clearPriceFilter}
            aplicarLabel="Aplicar"
            cancelarLabel="Limpar"
            btnAplicarClassName="flex-1 h-8"
            btnCancelarClassName="flex-1 h-8 bg-transparent"
            cancelarVariante="outline"
            className="flex gap-2 pt-2"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
