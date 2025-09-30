import { Produtos } from "@/components/ProdutosInfo";
import { useState } from "react";
import { Badge } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";

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
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <PopoverContent
      side="bottom"
      align="start"
      sideOffset={6}
      className="w-[min(560px,calc(100%-1rem))] p-0 bg-[#303030] border border-[#232323] rounded-lg shadow-2xl z-50"
      onOpenAutoFocus={(e: any) => e.preventDefault()}
    >
      {/* header */}
      <div className="px-4 py-3 border-[#1f1f1f] bg-transparent">
        <button
          onClick={() => onConfirmarPesquisa()}
          className="w-full text-left outline-none rounded-sm"
          aria-label={`Pesquisar por ${debouncedLocal}`}
        >
          <div className="text-xs text-slate-400">
            Pesquisar por resultado (resultado: {totalResultados})
          </div>
          <div className="text-sm text-slate-100 font-medium mt-1 line-clamp-1">
            {debouncedLocal}
          </div>
        </button>
      </div>

      <div className="space-y-1">
        {debouncedLocal.trim().length <= 3 && sugestoes.length === 0 ? (
          <div>
            <div className="px-4 py-6 text-center text-sm text-slate-500">
              Nenhum resultado encontrado
            </div>
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto text-white ">
            {sugestoes.slice(0, numeroDeSugestoesDePesquisa).map((p, i) => (
              <button
                key={p.id}
                onSelect={() => onSelecionarSugestao(p)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200${
                  selectedIndex === i ? "bg-[#202020]" : ""
                }`}
              >
                <div className="flex-1 text-left min-w-0">
                  <h4 className="text-sm font-medium  truncate mb-1">
                    {p.nome}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Badge className="text-xs px-2 py-0 h-5">
                      {p.categoria}
                    </Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <div className="text-base font-bold ">
                    R$ {p.preco.toLocaleString("pt-BR")}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </PopoverContent>
  );
}
