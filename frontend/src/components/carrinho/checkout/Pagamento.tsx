import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import type { PaymentMethod as PaymentMethodType } from "@/type/ProdutosType";
import { paymentMethods } from "../../MetodosDePagamento";

interface PaymentMethodProps {
  selectedMethod: PaymentMethodType | null;
  onSelectMethod: (method: PaymentMethodType) => void;
}

export function Pagamento({
  selectedMethod,
  onSelectMethod,
}: PaymentMethodProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-5 h-5 text-zinc-400" />
        <h2 className="text-xl font-bold text-zinc-50">Forma de Pagamento</h2>
      </div>

      <RadioGroup
        value={selectedMethod || ""}
        onValueChange={(value) => onSelectMethod(value as PaymentMethodType)}
      >
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                  selectedMethod === method.id
                    ? "border-zinc-50 bg-zinc-800/50"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
                onClick={() => onSelectMethod(method.id)}
              >
                <RadioGroupItem
                  value={method.id}
                  id={method.id}
                  className="border-zinc-600"
                />
                <Icon className="w-5 h-5 text-zinc-400" />
                <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                  <div>
                    <p className="font-semibold text-zinc-50">{method.name}</p>
                    <p className="text-sm text-zinc-400 mt-1">
                      {method.description}
                    </p>
                  </div>
                </Label>
              </div>
            );
          })}
        </div>
      </RadioGroup>
    </Card>
  );
}
