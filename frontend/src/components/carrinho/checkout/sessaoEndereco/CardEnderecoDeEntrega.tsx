import { Address } from "@/type/ProdutosType";
import { Card } from "../../../ui/card";

interface CardEnderecoDeEntregaProps {
  endereco?: Address;
  titulo: string;
  linhasExtras?: string[];
}

export default function CardEnderecoDeEntrega({
  endereco,
  titulo,
  linhasExtras,
}: CardEnderecoDeEntregaProps) {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 p-4 mb-4">
      <div className="space-y-1 text-sm text-zinc-300">
        <p className="font-semibold text-zinc-50">{titulo}</p>
        {endereco ? (
          <>
            <p>
              {endereco?.rua}, {endereco?.numero}
              {endereco?.complemento && ` - ${endereco.complemento}`}
            </p>
            <p>
              {endereco?.bairro} - {endereco?.cidade}/{endereco?.estado}
            </p>
            <p>CEP: {endereco?.cep}</p>
          </>
        ) : (
          linhasExtras?.map((linha, i) => <p key={i}>{linha}</p>)
        )}
      </div>
    </Card>
  );
}
