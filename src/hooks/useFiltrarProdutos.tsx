import { useMemo } from "react";
import { Produtos } from "@/components/ProdutosInfo";

interface FilterProps {
  produtos: Produtos[];
  pesquisar?: string;
  categoriaAplicada?: string | null;
  subcategoriasAplicada?: string[];
}

const formatarStr = (s?: string) =>
  (s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const mesmaCategoria = (prodCategoria?: string, filtro?: string | null) => {
  if (!filtro) return true;
  if (!prodCategoria) return false;

  const p = formatarStr(prodCategoria);
  const f = formatarStr(filtro);

  if (p === f) return true;
  if (p.includes(f) || f.includes(p)) return true;
};

export default function useFiltrarProdutos({
  produtos,
  pesquisar = "",
  categoriaAplicada = null,
  subcategoriasAplicada = [],
}: FilterProps) {
  return useMemo(() => {
    const termo = formatarStr(pesquisar);
    const temTermo = termo.length > 0;
    const catFilter = formatarStr(categoriaAplicada ?? undefined);
    const subsFilter = (subcategoriasAplicada ?? []).map((s) => formatarStr(s));

    const produtoContemTermo = (p: Produtos) => {
      if (!temTermo) return true;
      const campos = [
        p.nome ?? "",
        p.categoria ?? "",
        p.subcategoria ?? "",
        ...(p.tags?.map((t) => t.nome) ?? []),
      ];
      return campos.some((c) => formatarStr(c).includes(termo));
    };

    const correspondeCategoria = (p: Produtos) => {
      if (!catFilter) return true;
      if (mesmaCategoria(p.categoria, catFilter)) return true;
      const tags = (p.tags ?? []).map((t) => formatarStr(t.nome));
      return tags.some((t) => t.includes(catFilter));
    };

    const correspondeSubcategorias = (p: Produtos) => {
      if (!subsFilter || subsFilter.length === 0) return true;
      const prodSub = formatarStr(p.subcategoria);
      const tags = (p.tags ?? []).map((t) => formatarStr(t.nome));
      return subsFilter.some(
        (sub) => prodSub.includes(sub) || tags.some((t) => t.includes(sub))
      );
    };

    return produtos.filter((p) => {
      if (!correspondeCategoria(p)) return false;
      if (!correspondeSubcategorias(p)) return false;
      if (!produtoContemTermo(p)) return false;
      return true;
    });
  }, [
    produtos,
    pesquisar,
    categoriaAplicada,
    JSON.stringify(subcategoriasAplicada),
  ]);
}
