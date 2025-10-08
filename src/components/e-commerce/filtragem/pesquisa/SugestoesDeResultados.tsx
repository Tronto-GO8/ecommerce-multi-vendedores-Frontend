import { Produtos } from "@/components/ProdutosInfo";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SugestoesDeResultadosProps {
  sugestoes: Produtos[];
  numeroDeSugestoesDePesquisa?: number;
  onSelecionarSugestao: (produtoo: Produtos) => void;
}

export default function SugestoesDeResultados({
  sugestoes,
  numeroDeSugestoesDePesquisa = 3,
  onSelecionarSugestao,
}: SugestoesDeResultadosProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="max-h-64 overflow-y-auto text-white ">
      {sugestoes.slice(0, numeroDeSugestoesDePesquisa).map((p, i) => (
        <button
          key={p.id}
          onClick={() => onSelecionarSugestao(p)}
          onMouseEnter={() => setSelectedIndex(i)}
          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200${
            selectedIndex === i ? "bg-[#202020]" : ""
          }`}
        >
          <div className="flex-1 text-left min-w-0">
            <h4 className="text-sm font-medium  truncate mb-1">{p.nome}</h4>
            <div className="flex items-center gap-2">
              <Badge className="text-xs px-2 py-0 h-5">{p.categoria}</Badge>
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
  );
}
