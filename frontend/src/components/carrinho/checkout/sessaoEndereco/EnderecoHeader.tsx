import { Button } from "@/components/ui/button";
import { Address } from "@/type/ProdutosType";
import { MapPin } from "lucide-react";

interface EnderecoHeaderProps {
  endereco: Address | null;
  estaEditandoEndereco: boolean;
  metodoDeEntrega: "pickup" | "shipping";
  editarEndereco: (editando: boolean) => void;
}

export default function EnderecoHeader({
  endereco,
  estaEditandoEndereco,
  metodoDeEntrega,
  editarEndereco,
}: EnderecoHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-zinc-400" />
        <h3 className="text-lg font-semibold text-zinc-50">
          Endereço de Entrega
        </h3>
      </div>

      {endereco && !estaEditandoEndereco && metodoDeEntrega === "shipping" && (
        <Button
          variant="outline"
          size="sm"
          className="border-zinc-700 hover:bg-zinc-800 bg-transparent text-zinc-300"
          onClick={() => editarEndereco(true)}
        >
          Alterar
        </Button>
      )}
    </div>
  );
}
