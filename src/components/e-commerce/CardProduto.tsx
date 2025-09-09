import { Produtos } from "../ProdutosInfo";
import { Card } from "../ui/card";
import ImagemProduto from "./ImagemProduto";
import { useEffect, useState } from "react";
import ConteudoProduto from "./ConteudoProduto";
import BtnCarrinho from "./BtnCarrinho";

function formatPriceBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

// Função temporaria para adicionar ao carrinho
const adicionarAoCarrinho = (produto: Produtos) => {
  console.log("Produto adicionado ao carrinho:", produto);
};

export default function CardProduto({ produtos }: { produtos: Produtos }) {
  const imageUrl =
    produtos.imagem && produtos.imagem.length > 0
      ? produtos.imagem[0].url
      : "https://via.placeholder.com/600x400?text=No+Image";
  const [mouseDentro, setMouseDentro] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simula um carregamento de 500ms

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="w-[260px] h-[350px] bg-gray-300 animate-pulse rounded-lg"></div>
    );
  }

  return (
    <Card
      className="relative w-[260px] md:w-[260px] h-[350px] rounded-lg overflow-hidden border-stone-950 shadow-lg"
      onMouseEnter={() => setMouseDentro(true)}
      onMouseLeave={() => setMouseDentro(false)}
    >
      <ImagemProduto imageUrl={imageUrl} nome={produtos.nome} />
      {mouseDentro && (
        <BtnCarrinho
          adicionarAoCarrinho={() => adicionarAoCarrinho(produtos)}
          visivel={mouseDentro}
          className="absolute top-2 right-2 p-2"
        />
      )}

      <ConteudoProduto
        nome={produtos.nome}
        empresa={produtos.empresa}
        preco={formatPriceBRL(produtos.preco)}
        tags={produtos.tags}
      />
    </Card>
  );
}
