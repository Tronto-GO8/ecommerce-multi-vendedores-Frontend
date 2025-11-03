import CarouselCategorias from "./categoria/CarouselCategorias";
import { useState } from "react";
import FiltrarPreco from "./preco/FiltrarPreco";
import AplicarOuCancelar from "./AplicarOuCancelar";
import BtnCategoria from "./categoria/BtnCategoria";
import SearchESugestoes from "./pesquisa/SearchESugestoes";
import compararArraysIguais from "@/utils/compararArraysIguais";

interface SearchFilterContainerProps {
  pesquisar: string;
  setPesquisar: (valor: string) => void;
  aoAplicar?: (filtrosAplicados: Filtros) => void;
  faixaDePreco: {
    min?: number;
    max?: number;
  };
}

type Filtros = {
  categoria: string | null;
  subcategorias: string[];
  faixaDePreco?: {
    min?: number;
    max?: number;
  };
};

export default function SearchFilterContainer({
  pesquisar,
  setPesquisar,
  aoAplicar,
  faixaDePreco,
}: SearchFilterContainerProps) {
  const [mostrarCarousel, setMostrarCarousel] = useState(false);
  const [filtros, setFiltros] = useState<Filtros>({
    categoria: null,
    subcategorias: [],
    faixaDePreco: undefined,
  });
  const [aplicado, setAplicado] = useState(false);

  const aoAtualizarFiltros = (novoFiltro: Filtros) => {
    const mudouSubCategoria = !compararArraysIguais(
      filtros.subcategorias ?? [],
      novoFiltro.subcategorias ?? []
    );

    const antigaCategoria = filtros.categoria ?? null;
    const novaCategoria = novoFiltro.categoria ?? null;
    const mudouCategoria = antigaCategoria !== novaCategoria;

    if ((mudouSubCategoria || mudouCategoria) && aplicado) {
      setAplicado(false);
    }

    setFiltros(novoFiltro);
  };

  const aplicar = () => {
    setMostrarCarousel(false);
    setAplicado(true);

    if (aoAplicar) aoAplicar(filtros);
  };

  const cancelar = () => {
    setFiltros({ categoria: null, subcategorias: [] });
    setMostrarCarousel(false);
    setAplicado(false);
    if (aoAplicar) aoAplicar({ categoria: null, subcategorias: [] });
  };
  const temSelecionado =
    !!filtros.categoria || filtros.subcategorias.length > 0;

  const quantidadeSelecionada =
    (filtros.categoria ? 1 : 0) + filtros.subcategorias.length;

  // Função que será passada para FiltrarPreco: aplica preço imediatamente
  const precoAplicado = (range: { min: number; max: number }) => {
    const novo = { ...filtros, faixaDePreco: range };
    setFiltros(novo);
    setAplicado(true);
    if (aoAplicar) aoAplicar(novo);
  };
  return (
    <div className="bg-[#202020] flex gap-2 p-2 w-full overflow-hidden">
      <div className="flex flex-col w-full space-y-4 overflow-hidden">
        <div className="flex justify-between gap-2">
          <SearchESugestoes pesquisar={pesquisar} setPesquisar={setPesquisar} />
          <BtnCategoria
            mostrarCarousel={() => setMostrarCarousel(!mostrarCarousel)}
            quantidadeSelecionada={quantidadeSelecionada}
          />
        </div>
        {mostrarCarousel && (
          <CarouselCategorias
            filters={filtros}
            voltarCategoria={cancelar}
            atualizarFiltros={aoAtualizarFiltros}
          />
        )}
      </div>
      <div className="flex flex-col space-y-16 pt-1">
        <FiltrarPreco
          preco={faixaDePreco ?? { min: 0, max: 0 }}
          aplicarFiltroDePreco={precoAplicado}
        />
        {temSelecionado && !aplicado ? (
          <AplicarOuCancelar
            cancelar={cancelar}
            aplicar={aplicar}
            aplicarLabel="Aplicar"
            cancelarLabel="Cancelar"
            btnCancelarClassName="text-white hover:bg-slate-800"
            btnAplicarClassName="bg-emerald-600 hover:bg-emerald-700 text-white"
            className="flex gap-3"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
