import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Produtos } from "@/components/ProdutosInfo";

type CarrinhoMap = Record<number, number>; // produtoId -> quantidade

interface CartContextValue {
  carrinho: CarrinhoMap;
  totalAdicionado: number;
  adicionarNoCarrinho: (produto: Produtos, quantidade?: number) => void;
}

const QuaisEQuantosItensEstaoNoCarrinho = createContext<
  CartContextValue | undefined
>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<CarrinhoMap>({});

  const adicionarNoCarrinho = (produto: Produtos, novaQuantidade = 1) => {
    setCarrinho((estaNoCarrinho) => {
      const id = produto.id;
      const quantidadeAtual = estaNoCarrinho[id] ?? 0; //verifica se a quantidade está no carrinho, se existir, pega a quantidade atual, se não assume que é 0
      return { ...estaNoCarrinho, [id]: quantidadeAtual + novaQuantidade };
    });
  };

  const totalAdicionado = useMemo(
    () => Object.values(carrinho).reduce((s, q) => s + q, 0),
    [carrinho]
  );

  return (
    <QuaisEQuantosItensEstaoNoCarrinho.Provider
      value={{ carrinho, totalAdicionado, adicionarNoCarrinho }}
    >
      {children}
    </QuaisEQuantosItensEstaoNoCarrinho.Provider>
  );
}

export function useCarrinho() {
  const ctx = useContext(QuaisEQuantosItensEstaoNoCarrinho);
  if (!ctx)
    throw new Error("useCarrinho deve ser usado dentro de CarrinhoProvider");
  return ctx;
}
