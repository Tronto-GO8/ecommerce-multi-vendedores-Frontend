import type { CartItem } from "@/type/ProdutosType";

type CheckoutProdutosProps = {
  items: CartItem[];
};

export default function CheckoutProduto({ items }: CheckoutProdutosProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-zinc-50 mb-4">
        Produtos ({items.length})
      </h3>
      <div className="space-y-3 w-full max-h-60 overflow-y-auto overflow-x-hidden">
        {items.map((item) => {
          const nome = (item as any).nome;
          const empresa = (item as any).empresa;
          const qty = (item as any).quantity ?? (item as any).quantidade ?? 1;
          const precoUnit = (item as any).preco ?? (item as any).price ?? 0;
          const total = precoUnit * qty;
          return (
            <div
              key={(item as any).id}
              className="flex gap-4 p-3 bg-zinc-800/50 rounded-lg min-w-0"
            >
              <div className="relative w-16 h-16 bg-zinc-800 rounded overflow-hidden flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-zinc-50 text-sm truncate break-words whitespace-normal">
                  {nome}
                </h4>
                <p className="text-xs text-zinc-400 truncate">{empresa}</p>
                <p className="text-sm text-zinc-300 mt-1">Qtd:{qty}</p>
              </div>
              <div className="w-20 flex-shrink-0 text-right">
                <p className="font-bold text-zinc-50">R${total.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
