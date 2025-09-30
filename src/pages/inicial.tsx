import { useEffect, useMemo, useState } from "react";
import CardProduto from "@/components/e-commerce/produto/CardProduto";
import HeaderInicial from "@/components/e-commerce/HeaderInicial";
import SearchFilterContainer from "@/components/e-commerce/filtragem/SearchFilterContainer";
import BtnCarrinho from "@/components/e-commerce/BtnCarrinho";
import { ProdutoInfo } from "@/components/ProdutosInfo";
import { Card, CardTitle } from "@/components/ui/card";
import PaginacaoProdutos from "@/components/e-commerce/PaginacaoProdutos";
import useHandleMudarPagina from "@/hooks/useHandleMudarPagina";
import useFiltrarProdutos from "@/hooks/useFiltrarProdutos";

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

  // faixa de preço aplicada (vinda do SearchFilterContainer via aoAplicar)
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

  // agora aplicamos a faixa de preço (se houver) sobre os produtos já filtrados
  const produtosFiltradosComPreco = useMemo(() => {
    if (!faixaPrecoAplicada) return produtosFiltrados;
    const min = faixaPrecoAplicada.min ?? -Infinity;
    const max = faixaPrecoAplicada.max ?? Infinity;
    console.log("[Inicial] filtrando por preço", { min, max });
    return produtosFiltrados.filter((p) => p.preco >= min && p.preco <= max);
  }, [produtosFiltrados, faixaPrecoAplicada]);

  const precoMin = useMemo(() => {
    return produtosFiltrados.length
      ? Math.min(...produtosFiltrados.map((p) => p.preco))
      : 0;
  }, [produtosFiltrados]);

  //calcular total de preço
  let precoTotal = useMemo(() => {
    return produtosFiltrados.length
      ? Math.max(...produtosFiltrados.map((p) => p.preco))
      : 0;
  }, [produtosFiltrados]);

  useEffect(() => {
    setPaginaAtual(1);
  }, [pesquisar, categoriaAplicada, subcategoriaAplicada, faixaPrecoAplicada]);

  // Calcular produtos para a página atual
  const totalPaginas = Math.max(
    1,
    Math.ceil(produtosFiltradosComPreco.length / PRODUTOS_POR_PAGINA)
  );
  const indiceInicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const indiceFim = indiceInicio + PRODUTOS_POR_PAGINA;
  const produtosPaginaAtual = produtosFiltradosComPreco.slice(
    indiceInicio,
    indiceFim
  );

  const handleMudarPagina = useHandleMudarPagina(setPaginaAtual, totalPaginas);

  return (
    <div className="w-full min-h-screen bg-[#303030]">
      <HeaderInicial />
      <div className="w-full grid">
        <SearchFilterContainer
          pesquisar={pesquisar}
          setPesquisar={setPesquisar}
          aoAplicar={(tipoDeFiltro) => {
            setCategoriaAplicada(tipoDeFiltro.categoria ?? null);
            setSubcategoriaAplicada(tipoDeFiltro.subcategorias ?? []);
            setFaixaPrecoAplicada(tipoDeFiltro.faixaDePreco);
          }}
          faixaDePreco={{ min: precoMin, max: precoTotal }}
        />
        <Card className="p-6 bg-[#202020] border-none space-y-6 rounded-none">
          <div className="space-y-2">
            <CardTitle className="text-white">
              Populares ({produtosFiltradosComPreco.length} produtos)
            </CardTitle>
            <div className="border-t border-gray-400"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <CardProduto produtos={produtosPaginaAtual} />
          </div>
          <PaginacaoProdutos
            paginaAtual={paginaAtual}
            totalPaginas={totalPaginas}
            onMudarPagina={handleMudarPagina}
          />
        </Card>

        <BtnCarrinho className="fixed z-50 bottom-4 right-4 flex items-center gap-2 px-4 py-2 shadow-lg">
          <span className="text-lg text-white">Carrinho</span>
        </BtnCarrinho>
      </div>
    </div>
  );
}
