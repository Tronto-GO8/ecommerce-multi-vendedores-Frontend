import { CardContent } from "../ui/card";

type CardProdutoProps = {
  nome: string;
  preco: string;
  empresa?: string;
  tags?: { nome: string }[];
};

const MAX_VISIVEL = 6;

export default function ConteudoProduto({
  nome,
  empresa,
  preco,
  tags,
}: CardProdutoProps) {
  const tagsOcultas = tags ? Math.max(0, tags.length - MAX_VISIVEL) : 0;
  return (
    <CardContent className="absolute left-0 right-0 bottom-0 z-10 p-0 rounded-md bg-gradient-to-t from-black/95 via-black/70 to-transparente">
      <div className="bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 space-y-2">
        <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {nome}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold text-sm">{empresa}</p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-gray-300">{preco}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {(tags ?? []).slice(0, MAX_VISIVEL).map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full  bg-black/40 text-gray-200 truncate border border-white/10"
              title={t.nome}
            >
              {t.nome}
            </span>
          ))}
          {tags && tags.length - 6 > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-black/40 text-gray-200">
              +{tagsOcultas}
            </span>
          )}
        </div>
      </div>
    </CardContent>
  );
}
