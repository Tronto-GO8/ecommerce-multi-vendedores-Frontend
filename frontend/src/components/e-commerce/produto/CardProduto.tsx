import { Card } from "../../ui/card";
import ImagemProduto from "./ImagemProduto";
import ConteudoProduto from "./ConteudoProduto";
import BtnCarrinho from "../BtnCarrinho";
import { useTrocaDeImagens } from "@/hooks/useTrocaDeImagem";
import { Produtos } from "../../ProdutosInfo";
import { useCarrinho } from "@/contexts/ProdutoCarrinhoContext";

export default function CardProduto({ produto }: { produto: Produtos }) {
  const fallback = "https://via.placeholder.com/600x400?text=No+Image";
  const imagens = produto.imagem?.map((i) => i.url) ?? [];
  const { indiceAtual, mouseNoCard, aoEntrar, aoSair } =
    useTrocaDeImagens(imagens);
  const imageUrl = imagens.length > 0 ? imagens[indiceAtual] : fallback;
  const { adicionarNoCarrinho } = useCarrinho();

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
          adicionarAoCarrinho={() => adicionarNoCarrinho(produto, 1)}
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
