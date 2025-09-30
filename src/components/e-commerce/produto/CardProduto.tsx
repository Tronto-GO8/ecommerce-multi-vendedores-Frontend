import { Produtos } from "../../ProdutosInfo";
import { Card } from "../../ui/card";
import ImagemProduto from "./ImagemProduto";
import ConteudoProduto from "./ConteudoProduto";
import BtnCarrinho from "../BtnCarrinho";
import { useTrocaDeImagens } from "@/hooks/useTrocaDeImagem";

interface CardProdutoProps {
  produtos: Produtos[];
}

// temp function
const adicionarAoCarrinho = (produto: Produtos) => {
  console.log("Produto adicionado ao carrinho:", produto);
};

export default function CardProduto({ produtos }: CardProdutoProps) {
  const fallback = "https://via.placeholder.com/600x400?text=No+Image";

  function ProductCard({ produto }: { produto: Produtos }) {
    const imagens = produto.imagem?.map((i) => i.url) ?? [];
    const { indiceAtual, mouseNoCard, aoEntrar, aoSair } =
      useTrocaDeImagens(imagens);
    const imageUrl = imagens.length > 0 ? imagens[indiceAtual] : fallback;

    return (
      <Card
        className="relative w-[260px] md:w-[240px] h-[350px] rounded-lg overflow-hidden border-stone-950 shadow-lg"
        onMouseEnter={aoEntrar}
        onMouseLeave={aoSair}
        onFocus={aoEntrar}
        onBlur={aoSair}
        tabIndex={0}
      >
        <ImagemProduto imageUrl={imageUrl} nome={produto.nome} />

        {mouseNoCard && (
          <BtnCarrinho
            adicionarAoCarrinho={() => adicionarAoCarrinho(produto)}
            visivel={mouseNoCard}
            className="absolute top-2 right-2 p-2"
          />
        )}

        <ConteudoProduto
          nome={produto.nome}
          empresa={produto.empresa}
          preco={produto.preco}
          tags={produto.tags}
        />
      </Card>
    );
  }
  return (
    <>
      {produtos.map((produto) => (
        <ProductCard produto={produto} key={produto.id} />
      ))}
    </>
  );
}
