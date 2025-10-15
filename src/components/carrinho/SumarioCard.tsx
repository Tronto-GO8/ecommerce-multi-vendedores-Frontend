import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OuSeparador from "@/components/ui/OuSeparador";
import { ChevronDown } from "lucide-react";
import CompactoMobileHeader from "./CompactoMobileHeader";
import { Produtos } from "../ProdutosInfo";

type Props = {
  items?: Produtos[];
  subtotal?: number;
  onCheckout?: () => void;
  onClear?: () => void;
  mobile?: boolean;
  className?: string;
};

export default function SumarioCard({
  items,
  subtotal,
  onCheckout,
  onClear,
  mobile = false,
  className = "",
}: Props) {
  const [expanded, setExpanded] = useState(!mobile); // no desktop já expande; no mobile começa recolhido
  const calculatedSubtotal =
    typeof subtotal === "number"
      ? subtotal
      : items?.reduce(
          (s, it) => s + (it.preco ?? 0) * (it.quantidade ?? 1),
          0
        ) ?? 0;

  const shipping = 0; // lógica de frete
  const total = calculatedSubtotal + shipping;

  const base = "bg-zinc-900 border-zinc-800 p-4";
  const mobileStyles = mobile
    ? "fixed bottom-0 left-0 right-0 rounded-t-xl shadow-2xl mx-4 mb-2"
    : "sticky top-8";

  return (
    <div className={className}>
      <Card className={`${base} ${mobile ? mobileStyles : "relative"}`}>
        {/* Se mobile e não expandido -> mostra versão compacta */}
        {mobile && !expanded ? (
          <CompactoMobileHeader
            total={total}
            onCheckout={onCheckout}
            expandido={() => setExpanded(true)}
          />
        ) : (
          // versão completa (desktop ou mobile expandido)
          <div>
            {!mobile && (
              <h2 className="text-xl font-bold text-zinc-50 mb-4">
                Resumo do Pedido
              </h2>
            )}

            {/* botão de recolher para mobile */}
            {mobile && (
              <div className="flex justify-end mb-2">
                <Button
                  aria-label="Recolher resumo"
                  onClick={() => setExpanded(false)}
                  className="w-9 bg-zinc-800 hover:bg-zinc-700"
                >
                  <ChevronDown size={18} />
                </Button>
              </div>
            )}

            <div className="space-y-4 mb-4">
              <div className="flex justify-between text-zinc-300">
                <span>Subtotal</span>
                <span>R$ {calculatedSubtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-zinc-300">
                <span>Frete</span>
                <span className="text-zinc-500">Calcular</span>
              </div>

              <OuSeparador />
              <div className="flex justify-between text-lg font-bold text-zinc-50">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 mb-3"
              onClick={onCheckout}
            >
              Continuar
            </Button>
            <Button
              variant="outline"
              className={`w-full border-zinc-700 hover:bg-zinc-800 bg-transparent ${
                mobile ? "hidden" : ""
              }`}
              onClick={onClear}
            >
              Limpar Carrinho
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
