import { useMemo } from "react";
import { Produtos } from "@/components/ProdutosInfo";

interface FilterProps {
  produtos: Produtos[];
  pesquisar?: string;
  categoriaAplicada?: string | null;
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
}: FilterProps) {
  return useMemo(() => {
    const termo = formatarStr(pesquisar);
    const temTermo = termo.length > 0;
    const catFilter = formatarStr(categoriaAplicada ?? undefined);

    const produtoContemTermo = (p: Produtos) => {
      if (!temTermo) return true;
      const campos = [
        p.nome ?? "",
        p.categoria ?? "",
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

    return produtos.filter((p) => {
      if (!correspondeCategoria(p)) return false;
      if (!produtoContemTermo(p)) return false;
      return true;
    });
  }, [produtos, pesquisar, categoriaAplicada]);
}
