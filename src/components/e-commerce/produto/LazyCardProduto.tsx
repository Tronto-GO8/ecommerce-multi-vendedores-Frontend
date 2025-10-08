import { useLoading } from "@/hooks/useLoading";
import { useComponenteVisivel } from "@/hooks/useComponenteVisivel";
import { SkeletonProduto } from "./SkeletonProduto";
import { Produtos } from "@/components/ProdutosInfo";
import CardProduto from "./CardProduto";
import { useMemo } from "react";

type LazyCardProdutoProps = {
  produto: Produtos;
  skeletonTagCount?: number;
  skeletonDelay?: number;
};

export default function LazyCardProduto({
  produto,
  skeletonTagCount = 4,
  skeletonDelay = 700,
}: LazyCardProdutoProps) {
  const { elementoQueSeraObservado, jaCarregado } = useComponenteVisivel();
  const { estaCarregando } = useLoading(skeletonDelay, jaCarregado);

  const content = useMemo(() => {
    if (!jaCarregado) {
      return <SkeletonProduto tagCount={skeletonTagCount} />;
    }

    // 2) Entrou na view, mas ainda no delay do skeleton: mostra skeleton "carregando"
    if (estaCarregando) {
      return <SkeletonProduto tagCount={skeletonTagCount} />;
    }

    // 3) Entrou e terminou o loading: renderiza o card real
    return <CardProduto produto={produto} />;
  }, [jaCarregado, estaCarregando, produto, skeletonTagCount]);

  // Mantemos a mesma ref em todas as renderizações para que o IntersectionObserver observe corretamente
  return (
    <div
      ref={elementoQueSeraObservado}
      aria-busy={jaCarregado && estaCarregando ? "true" : "false"}
    >
      {content}
    </div>
  );
}
