import { useState } from "react";
import CardProduto from "@/components/e-commerce/CardProduto";
import HeaderInicial from "@/components/e-commerce/HeaderInicial";
import SearchFilterContainer from "@/components/e-commerce/SearchFilterContainer";
import BtnCarrinho from "@/components/e-commerce/BtnCarrinho";
import { ProdutoInfo } from "@/components/ProdutosInfo";
import { Card, CardTitle } from "@/components/ui/card";
import PaginacaoProdutos from "@/components/e-commerce/PaginacaoProdutos";
import useHandleMudarPagina from "@/hooks/useHandleMudarPagina";

const PRODUTOS_POR_PAGINA = 10;

export default function Inicial() {
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Calcular produtos para a página atual
  const totalPaginas = Math.ceil(ProdutoInfo.length / PRODUTOS_POR_PAGINA);
  const indiceInicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const indiceFim = indiceInicio + PRODUTOS_POR_PAGINA;
  const produtosPaginaAtual = ProdutoInfo.slice(indiceInicio, indiceFim);

  const handleMudarPagina = useHandleMudarPagina(setPaginaAtual, totalPaginas);

  return (
    <div className="w-full min-h-screen bg-[#303030] grid">
      <HeaderInicial />
      <div className="w-full grid">
        <SearchFilterContainer />
        <Card className="p-6 bg-[#202020] border-none space-y-6 rounded-none">
          <div className="space-y-2">
            <CardTitle className="text-white">
              Populares ({ProdutoInfo.length} produtos)
            </CardTitle>
            <div className="border-t border-gray-400"></div>
          </div>

          {/* Grid de produtos */}
          <div className="flex flex-wrap gap-4 justify-center">
            {produtosPaginaAtual.map((produto) => (
              <CardProduto key={produto.id} produtos={produto} />
            ))}
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
