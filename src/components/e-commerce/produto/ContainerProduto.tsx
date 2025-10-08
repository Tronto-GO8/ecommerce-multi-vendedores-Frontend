import { Produtos } from "../../ProdutosInfo";
import LazyCardProduto from "./LazyCardProduto";

interface ContainerProdutoProps {
  produtos: Produtos[];
  skeletonTagCount?: number;
}

export default function ContainerProduto({
  produtos = [],
  skeletonTagCount = 4,
}: ContainerProdutoProps) {
  if (!produtos || produtos.length === 0) {
    return (
      <div className="w-full flex justify-center items-center p-6">
        <p className="text-gray-300">Nenhum produto encontrado</p>
      </div>
    );
  }

  return (
    <>
      {produtos.map((p) => (
        <LazyCardProduto
          key={p.id}
          produto={p}
          skeletonTagCount={skeletonTagCount}
        />
      ))}
    </>
  );
}
