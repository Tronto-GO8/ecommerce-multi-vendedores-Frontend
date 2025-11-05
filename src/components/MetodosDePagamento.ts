import { CreditCard, Wallet, Smartphone, Barcode } from "lucide-react";
import type { PaymentMethod as PaymentMethodType } from "@/type/ProdutosType";

export const paymentMethods: Array<{
  id: PaymentMethodType;
  name: string;
  description: string;
  icon: any;
}> = [
  {
    id: "credit" as PaymentMethodType,
    name: "Cartão de Crédito",
    description: "Parcelamento em até 12x",
    icon: CreditCard,
  },
  {
    id: "debit" as PaymentMethodType,
    name: "Cartão de Débito",
    description: "Pagamento à vista",
    icon: Wallet,
  },
  {
    id: "pix" as PaymentMethodType,
    name: "PIX",
    description: "Aprovação imediata",
    icon: Smartphone,
  },
  {
    id: "boleto" as PaymentMethodType,
    name: "Boleto Bancário",
    description: "Vencimento em 3 dias",
    icon: Barcode,
  },
];
