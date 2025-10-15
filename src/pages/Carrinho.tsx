import { useMemo, useState } from "react";
import SumarioCard from "@/components/carrinho/SumarioCard";
import CarrinhoVazio from "@/components/carrinho/CarrinhoVazio";
import ProdutosCarrinho from "@/components/carrinho/ProdutosCarrinho";
import { useModoMobile } from "@/hooks/useModoMobile";
import { useCarrinho } from "@/contexts/ProdutoCarrinhoContext";
import { ProdutoInfo } from "@/components/ProdutosInfo";

export default function Carrinho() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const modoMobile = useModoMobile();
  const {
    carrinho,
    adicionarNoCarrinho,
    definirQuantidade,
    removerDoCarrinho,
    limparCarrinho,
  } = useCarrinho();

  // Monta array de produtos com quantidade do carrinho
  const items = useMemo(() => {
    return Object.entries(carrinho)
      .map(([idStr, qtd]) => {
        const id = Number(idStr);
        const produto = ProdutoInfo.find((p) => p.id === id);
        if (!produto) return null;
        return { ...produto, quantidade: qtd };
      })
      .filter(Boolean) as any[]; // tipo inferido como array de Produtos com `quantidade`
  }, [carrinho]);

  if (items.length === 0) {
    return <CarrinhoVazio />;
  }

  return (
    <div className="min-h-screen bg-[#202020] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-8">
          Carrinho de Compras
        </h1>

        {/* Desktop Layout */}
        <div className="min-h-screen lg:grid lg:grid-cols-3 gap-8 ">
          {/* Items List */}
          <div
            className={`
              lg:col-span-2 
              border-none
              space-y-2 
              overflow-y-auto 
              custom-scrollbar
              max-h-[70vh] 
            `}
          >
            {/* Products */}
            {items.map((p) => (
              <ProdutosCarrinho
                key={p.id}
                produtoTeste={p}
                onIncrease={() => adicionarNoCarrinho(p, 1)}
                onDecrease={() =>
                  definirQuantidade(
                    p.id,
                    Math.max(0, (carrinho[p.id] ?? 1) - 1)
                  )
                }
                onRemove={() => removerDoCarrinho(p.id)}
              />
            ))}
          </div>

          {/* Summary Sidebar */}
          {!modoMobile && (
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8">
                <SumarioCard
                  items={items}
                  onCheckout={() => setIsCheckoutModalOpen(true)}
                  onClear={() => {
                    limparCarrinho();
                  }}
                  mobile={false}
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 p-4 pointer-events-none">
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <SumarioCard
              items={items}
              mobile={true}
              className="max-w-3xl mx-auto"
              onCheckout={() => setIsCheckoutModalOpen(true)}
              onClear={() => {
                limparCarrinho();
              }}
            />
          </div>
        </div>
        {/* <CheckoutModal
          open={isCheckoutModalOpen}
          onOpenChange={setIsCheckoutModalOpen}
          items={items}
          address={address}
          onAddressUpdate={setAddress}
          selectedPayment={paymentMethod}
          onPaymentSelect={setPaymentMethod}
          shippingPrice={shippingPrice}
          totalPrice={totalPrice}
          onConfirmPurchase={handleConfirmPurchase}
        /> */}
      </div>
    </div>
  );
}
