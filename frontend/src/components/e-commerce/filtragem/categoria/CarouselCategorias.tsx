import { Button } from "../../../ui/button";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselBtn } from "../CarouselBtn";
import alternarItemNoArray from "@/utils/alterarItemNoArray";
import { categoriasProdutos } from "@/components/CategoriasProdutos";
import { SUBCATEGORIAS_MAP } from "@/components/SubCategoriasProdutos";
import { ArrowLeft } from "lucide-react";

interface CarouselFilterContainerProps {
  filters: {
    categoria: string | null;
    subcategorias: string[];
  };
  voltarCategoria: () => void;
  atualizarFiltros: (filters: {
    categoria: string | null;
    subcategorias: string[];
  }) => void;
}

export default function CarouselCategorias({
  filters,
  voltarCategoria,
  atualizarFiltros,
}: CarouselFilterContainerProps) {
  const modoSubcategorias = !!filters.categoria;
  const itens = modoSubcategorias
    ? SUBCATEGORIAS_MAP[filters.categoria!] || []
    : categoriasProdutos;
  const {
    refViewport,
    refTrilha,
    refPrimeiroItem,
    indiceInicio,
    passoPx,
    indiceMaxInicio,
    irAnterior,
    irProximo,
    mostrarControles,
  } = useCarousel(itens.length);

  // selecionar categoria principal: **apenas 1**
  const aoSelecionarCategoria = (categoria: string) => {
    // if (categoria === "Todos") {
    //   // "Todos" zera a seleção de categoria
    //   atualizarFiltros({ categoria: null, subcategorias: [] });
    //   return;
    // }

    // se já está selecionada, desmarca (volta para nenhuma categoria)
    // if (filters.categoria === categoria) {
    //   atualizarFiltros({ categoria: null, subcategorias: [] });
    //   return;
    // }

    // seleciona nova categoria e limpa subcategorias
    atualizarFiltros({ categoria: categoria, subcategorias: [] });
  };

  // alterna subcategoria (várias permitidas)
  const aoAlterarSubcategoria = (sub: string) => {
    const novaLista = alternarItemNoArray(filters.subcategorias, sub);
    atualizarFiltros({ ...filters, subcategorias: novaLista });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        {modoSubcategorias ? (
          <div className="flex items-center gap-3">
            <Button
              onClick={voltarCategoria}
              className="text-sm text-slate-300 hover:underline"
            >
              <ArrowLeft />
              Voltar às categorias principais
            </Button>
            <span className="text-sm text-slate-400">
              / {filters.categoria}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-2">
        <CarouselBtn
          direcao="esquerda"
          onClick={irAnterior}
          esconder={!mostrarControles || indiceInicio === 0}
        />

        {/* Viewport do carrossel */}
        <div ref={refViewport} className="flex overflow-hidden w-full">
          <div
            ref={refTrilha}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${passoPx}px)` }}
          >
            {itens.map((item, idx) => {
              const isPrimeiro = idx === 0;
              const selecionado = modoSubcategorias
                ? filters.subcategorias.includes(item)
                : filters.categoria === item;

              return (
                <div
                  key={item}
                  data-item
                  ref={isPrimeiro ? refPrimeiroItem : null}
                  className="flex-shrink-0 mr-2"
                >
                  <Button
                    variant={selecionado ? "default" : "outline"}
                    onClick={() =>
                      modoSubcategorias
                        ? aoAlterarSubcategoria(item)
                        : aoSelecionarCategoria(item)
                    }
                    className={`flex-shrink-0 whitespace-nowrap ${
                      selecionado
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-transparent border-slate-600 text-white hover:bg-slate-800"
                    }`}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        <CarouselBtn
          direcao="direita"
          onClick={irProximo}
          esconder={!mostrarControles || indiceInicio === indiceMaxInicio}
        />
      </div>
    </div>
  );
}
