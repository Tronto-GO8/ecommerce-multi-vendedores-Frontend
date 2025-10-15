import { useEffect, useState } from "react";
import SearchFilterContainer from "@/components/e-commerce/filtragem/SearchFilterContainer";
import BtnCarrinho from "@/components/e-commerce/BtnCarrinho";
import { ProdutoInfo } from "@/components/ProdutosInfo";
import { Card, CardTitle } from "@/components/ui/card";
import PaginacaoProdutos from "@/components/e-commerce/PaginacaoProdutos";
import useHandleMudarPagina from "@/hooks/useHandleMudarPagina";
import useFiltrarProdutos from "@/hooks/useFiltrarProdutos";
import ContainerProduto from "@/components/e-commerce/produto/ContainerProduto";
import useFiltradosPorPreco from "@/hooks/useFiltradosPorPreco";
import { Link } from "react-router-dom";

const PRODUTOS_POR_PAGINA = 10;

export default function Inicial() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [pesquisar, setPesquisar] = useState("");

  const [categoriaAplicada, setCategoriaAplicada] = useState<string | null>(
    null
  );
  const [subcategoriaAplicada, setSubcategoriaAplicada] = useState<string[]>(
    []
  );

  const [faixaPrecoAplicada, setFaixaPrecoAplicada] = useState<
    | {
        min?: number;
        max?: number;
      }
    | undefined
  >(undefined);

  const produtosFiltrados = useFiltrarProdutos({
    produtos: ProdutoInfo,
    pesquisar,
    categoriaAplicada,
    subcategoriasAplicada: subcategoriaAplicada,
  });

  const { filtradosComPreco, precoMin, precoMax } = useFiltradosPorPreco({
    faixaPrecoAplicada,
    produtosFiltrados,
  });

  useEffect(() => {
    setPaginaAtual(1);
  }, [pesquisar, categoriaAplicada, subcategoriaAplicada, faixaPrecoAplicada]);

  // Calcular produtos para a página atual
  const totalPaginas = Math.max(
    1,
    Math.ceil(filtradosComPreco.length / PRODUTOS_POR_PAGINA)
  );
  const indiceInicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const indiceFim = indiceInicio + PRODUTOS_POR_PAGINA;
  const produtosPaginaAtual = filtradosComPreco.slice(indiceInicio, indiceFim);

  const handleMudarPagina = useHandleMudarPagina(setPaginaAtual, totalPaginas);

  return (
    <div className="w-full min-h-screen bg-[#303030]">
      <div className="w-full grid">
        <SearchFilterContainer
          pesquisar={pesquisar}
          setPesquisar={setPesquisar}
          aoAplicar={(tipoDeFiltro) => {
            setCategoriaAplicada(tipoDeFiltro.categoria ?? null);
            setSubcategoriaAplicada(tipoDeFiltro.subcategorias ?? []);
            setFaixaPrecoAplicada(tipoDeFiltro.faixaDePreco);
          }}
          faixaDePreco={{ min: precoMin, max: precoMax }}
        />
        <Card className="p-6 bg-[#202020] border-none space-y-6 rounded-none">
          <div className="space-y-2">
            <CardTitle className="text-white">
              Populares ({filtradosComPreco.length} produtos)
            </CardTitle>
            <div className="border-t border-gray-400"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <ContainerProduto produtos={produtosPaginaAtual} />
          </div>
          <PaginacaoProdutos
            paginaAtual={paginaAtual}
            totalPaginas={totalPaginas}
            onMudarPagina={handleMudarPagina}
          />
        </Card>
        <Link to="/app/carrinho">
          <BtnCarrinho
            className="fixed z-50 bottom-4 right-4 flex items-center gap-2 px-4 py-2 shadow-lg"
            mostrarTotal={true}
          >
            <span className="text-lg text-white">Carrinho</span>
          </BtnCarrinho>
        </Link>
      </div>
    </div>
  );
}
