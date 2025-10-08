import { useCarrinho } from "@/contexts/ProdutoCarrinhoContext";
import { ShoppingCart } from "lucide-react";

interface BtnCarrinhoProps {
  adicionarAoCarrinho?: () => void;
  visivel?: boolean;
  children?: React.ReactNode;
  className?: string;
  mostrarTotal?: boolean;
}

export default function BtnCarrinho({
  adicionarAoCarrinho,
  children,
  className,
  mostrarTotal = false,
}: BtnCarrinhoProps) {
  const { totalAdicionado } = useCarrinho();
  return (
    <button
      type="button"
      onClick={adicionarAoCarrinho}
      className={`${className} rounded-full bg-black/80 hover:bg-black/90 transition-all duration-300`}
    >
      <ShoppingCart size={22} className="text-white" />

      {mostrarTotal && totalAdicionado > 0 && (
        <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full bg-red-600">
          {totalAdicionado}
        </span>
      )}
      {children}
    </button>
  );
}
