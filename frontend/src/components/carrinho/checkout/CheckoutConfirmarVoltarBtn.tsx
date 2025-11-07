import { Button } from "@/components/ui/button";
import type {
  Address,
  PaymentMethod as PaymentMethodType,
} from "@/type/ProdutosType";
import { useMemo } from "react";

interface CheckoutConfirmarVoltarBtnProps {
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  selectedPayment: PaymentMethodType | null;
  shippingMethod: "pickup" | "shipping";
  address: Address | null;
}

export default function CheckoutConfirmarVoltarBtn({
  onOpenChange,
  onConfirm,
  selectedPayment,
  shippingMethod,
  address,
}: CheckoutConfirmarVoltarBtnProps) {
  const canConfirm = useMemo(() => {
    if (!selectedPayment) return false;
    if (shippingMethod === "shipping" && !address) return false;
    return true;
  }, [selectedPayment, shippingMethod, address]);

  const handleConfirm = () => {
    if (!canConfirm) return;
    onConfirm();
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 pt-4">
      <Button
        variant="outline"
        className="flex-1 border-zinc-700 hover:bg-zinc-800 bg-transparent"
        onClick={() => onOpenChange(false)}
      >
        Voltar ao Carrinho
      </Button>

      <Button
        className="flex-1 bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
        disabled={!canConfirm}
        onClick={handleConfirm}
      >
        {!selectedPayment
          ? "Selecione o pagamento"
          : shippingMethod === "shipping" && !address
          ? "Adicione um endereço"
          : "Confirmar Compra"}
      </Button>
    </div>
  );
}
