import { Card } from "../ui/card";

type ImagemProdutoProps = {
  imageUrl: string;
  nome: string;
};

export default function ImagemProduto({ imageUrl, nome }: ImagemProdutoProps) {
  return (
    <Card className="relative w-[260px] md:w-[260px] h-[260px]  border-none">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={nome}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </Card>
  );
}
