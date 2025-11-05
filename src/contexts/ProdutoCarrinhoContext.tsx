import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { Produtos } from "@/components/ProdutosInfo";
import { useAuth } from "./AuthContext";

type CarrinhoMap = Record<number, number>;
const BASE_STORAGE_KEY = "carrinho_v1";

interface CartContextValue {
  carrinho: CarrinhoMap;
  totalAdicionado: number;
  adicionarNoCarrinho: (produto: Produtos, quantidade?: number) => void;
  definirQuantidade: (produtoId: number, quantidade: number) => void;
  removerDoCarrinho: (produtoId: number) => void;
  limparCarrinho: () => void;
}

const QuaisEQuantosItensEstaoNoCarrinho = createContext<
  CartContextValue | undefined
>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const { usuarioAtual } = useAuth();
  const storageKey = useMemo(
    () =>
      usuarioAtual
        ? `${BASE_STORAGE_KEY}_${usuarioAtual.email}`
        : BASE_STORAGE_KEY,
    [usuarioAtual]
  );

  const [carrinho, setCarrinho] = useState<CarrinhoMap>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as CarrinhoMap) : {};
    } catch {
      return {};
    }
  });

  // Atualiza o carrinho quando o usuário muda
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setCarrinho(raw ? (JSON.parse(raw) as CarrinhoMap) : {});
    } catch {
      setCarrinho({});
    }
  }, [storageKey]);

  // Persistir sempre que mudar
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(carrinho));
    } catch {
      // ignore
    }
  }, [carrinho, storageKey]);

  const adicionarNoCarrinho = (produto: Produtos, novaQuantidade = 1) => {
    setCarrinho((estaNoCarrinho) => {
      const id = produto.id;
      const quantidadeAtual = estaNoCarrinho[id] ?? 0;
      return { ...estaNoCarrinho, [id]: quantidadeAtual + novaQuantidade };
    });
  };

  const definirQuantidade = useCallback(
    (produtoId: number, quantidade: number) => {
      setCarrinho((prev) => {
        if (quantidade <= 0) {
          const copy = { ...prev };
          delete copy[produtoId];
          return copy;
        }
        return { ...prev, [produtoId]: quantidade };
      });
    },
    []
  );

  const removerDoCarrinho = useCallback((produtoId: number) => {
    setCarrinho((prev) => {
      const copy = { ...prev };
      delete copy[produtoId];
      return copy;
    });
  }, []);

  const limparCarrinho = useCallback(() => setCarrinho({}), []);

  const totalAdicionado = useMemo(
    () => Object.values(carrinho).reduce((s, q) => s + q, 0),
    [carrinho]
  );

  return (
    <QuaisEQuantosItensEstaoNoCarrinho.Provider
      value={{
        carrinho,
        totalAdicionado,
        adicionarNoCarrinho,
        definirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
      }}
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
