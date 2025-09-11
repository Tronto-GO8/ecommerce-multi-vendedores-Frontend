import { Produtos } from "../ProdutosInfo";
import { Card } from "../ui/card";
import ImagemProduto from "./ImagemProduto";
import ConteudoProduto from "./ConteudoProduto";
import BtnCarrinho from "./BtnCarrinho";
import { useTrocaDeImagens } from "@/hooks/useTrocaDeImagem";

function formatarPrecoBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

// temp function
const adicionarAoCarrinho = (produto: Produtos) => {
  console.log("Produto adicionado ao carrinho:", produto);
};

export default function CardProduto({ produtos }: { produtos: Produtos }) {
  const imagens = produtos.imagem?.map((i) => i.url) ?? [];
  const fallback = "https://via.placeholder.com/600x400?text=No+Image";

  const { indiceAtual, mouseNoCard, aoEntrar, aoSair } =
    useTrocaDeImagens(imagens);

  const imageUrl = imagens.length > 0 ? imagens[indiceAtual] : fallback;

  return (
    <Card
      className="relative w-[260px] md:w-[240px] h-[350px] rounded-lg overflow-hidden border-stone-950 shadow-lg"
      onMouseEnter={aoEntrar}
      onMouseLeave={aoSair}
      onFocus={aoEntrar} // acessibilidade: teclado
      onBlur={aoSair}
      tabIndex={0} // permite focus com teclado
    >
      <ImagemProduto imageUrl={imageUrl} nome={produtos.nome} />

      {mouseNoCard && (
        <BtnCarrinho
          adicionarAoCarrinho={() => adicionarAoCarrinho(produtos)}
          visivel={mouseNoCard}
          className="absolute top-2 right-2 p-2"
        />
      )}

      <ConteudoProduto
        nome={produtos.nome}
        empresa={produtos.empresa}
        preco={formatarPrecoBRL(produtos.preco)}
        tags={produtos.tags}
      />
    </Card>
  );
}
