import { Produtos } from "@/components/ProdutosInfo";
import { useMemo } from "react";

interface UseFiltrarPorPrecoParams {
  faixaPrecoAplicada?: {
    min?: number;
    max?: number;
  };
  produtosFiltrados: Produtos[];
}
export default function useFiltradosPorPreco({
  faixaPrecoAplicada,
  produtosFiltrados,
}: UseFiltrarPorPrecoParams) {
  const filtradosComPreco = useMemo(() => {
    if (!faixaPrecoAplicada) return produtosFiltrados;
    const min = faixaPrecoAplicada.min ?? -Infinity;
    const max = faixaPrecoAplicada.max ?? Infinity;
    return produtosFiltrados.filter((p) => p.preco >= min && p.preco <= max);
  }, [produtosFiltrados, faixaPrecoAplicada]);

  const precoMin = useMemo(() => {
    return produtosFiltrados.length
      ? Math.min(...produtosFiltrados.map((p) => p.preco))
      : 0;
  }, [produtosFiltrados]);

  let precoMax = useMemo(() => {
    return produtosFiltrados.length
      ? Math.max(...produtosFiltrados.map((p) => p.preco))
      : 0;
  }, [produtosFiltrados]);

  return { filtradosComPreco, precoMin, precoMax };
}
