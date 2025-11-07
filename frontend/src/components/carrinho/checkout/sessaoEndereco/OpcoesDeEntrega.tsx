import { Check } from "lucide-react";
import { Card } from "../../../ui/card";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";

interface OpcoesDeEntregProps {
  metodoDeEntrega: string | string;
  quandoMetodoDeEntregaAlterar: (method: "pickup" | "shipping") => void;
}

const shippingOptions = [
  { id: "pickup", name: "Retirada na Loja", price: 0 },
  { id: "shipping", name: "Fretado (Entregue)", price: 19.9 }, // valor exemplo
];

export default function OpcoesDeEntrega({
  metodoDeEntrega,
  quandoMetodoDeEntregaAlterar,
}: OpcoesDeEntregProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 p-4 mb-4">
      <RadioGroup
        value={metodoDeEntrega}
        onValueChange={(v) =>
          quandoMetodoDeEntregaAlterar(v as "pickup" | "shipping")
        }
      >
        <div className="space-y-2">
          {shippingOptions.map((opt) => (
            <label
              key={opt.id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer border ${
                metodoDeEntrega === opt.id
                  ? "border-zinc-50 bg-zinc-800/50"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value={opt.id}
                  id={`ship-${opt.id}`}
                  className="border-zinc-600"
                />
                <div>
                  <p className="font-semibold text-zinc-50">{opt.name}</p>
                  <p className="text-sm text-zinc-400 mt-0.5">
                    {opt.price === 0 ? "Grátis" : `R$ ${opt.price.toFixed(2)}`}
                  </p>
                </div>
              </div>
              {metodoDeEntrega === opt.id && (
                <Check className="w-5 h-5 text-zinc-50" />
              )}
            </label>
          ))}
        </div>
      </RadioGroup>
    </Card>
  );
}
