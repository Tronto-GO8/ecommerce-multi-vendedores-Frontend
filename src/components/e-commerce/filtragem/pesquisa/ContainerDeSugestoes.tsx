import { Produtos } from "@/components/ProdutosInfo";
import { PopoverContent } from "@radix-ui/react-popover";
import PesquisaPorResultado from "./PesquisaPorResultado";
import SugestoesDeResultados from "./SugestoesDeResultados";

interface ContainerDeSugestoesProps {
  debouncedLocal: string;
  totalResultados: number;
  sugestoes: Produtos[];
  numeroDeSugestoesDePesquisa?: number;
  onSelecionarSugestao: (produto: Produtos) => void;
  onConfirmarPesquisa: (valor?: string) => void;
}

export default function ContainerDeSugestoes({
  debouncedLocal,
  totalResultados,
  sugestoes,
  numeroDeSugestoesDePesquisa = 3,
  onSelecionarSugestao,
  onConfirmarPesquisa,
}: ContainerDeSugestoesProps) {
  return (
    <PopoverContent
      side="bottom"
      align="start"
      sideOffset={6}
      className="w-[min(560px,calc(100%-1rem))] p-0 bg-[#303030] border border-[#232323] rounded-lg shadow-2xl z-50"
      onOpenAutoFocus={(e: any) => e.preventDefault()}
    >
      {/* header */}
      <PesquisaPorResultado
        onConfirmarPesquisa={onConfirmarPesquisa}
        debouncedLocal={debouncedLocal}
        totalResultados={totalResultados}
      />

      <div className="space-y-1">
        {debouncedLocal.trim().length <= 3 && sugestoes.length === 0 ? (
          <div>
            <div className="px-4 py-6 text-center text-sm text-slate-500">
              Nenhum resultado encontrado
            </div>
          </div>
        ) : (
          <SugestoesDeResultados
            sugestoes={sugestoes}
            numeroDeSugestoesDePesquisa={numeroDeSugestoesDePesquisa}
            onSelecionarSugestao={onSelecionarSugestao}
          />
        )}
      </div>
    </PopoverContent>
  );
}
