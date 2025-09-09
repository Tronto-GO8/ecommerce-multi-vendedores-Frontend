import { ShoppingCart } from "lucide-react";

interface BtnCarrinhoProps {
  adicionarAoCarrinho?: () => void;
  visivel?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function BtnCarrinho({
  adicionarAoCarrinho,
  children,
  className,
}: BtnCarrinhoProps) {
  return (
    <button
      onClick={adicionarAoCarrinho}
      className={`${className} rounded-full bg-black/80 hover:bg-black/90 transition-all duration-300`}
    >
      <ShoppingCart size={22} className="text-white" />
      {children}
    </button>
  );
}
