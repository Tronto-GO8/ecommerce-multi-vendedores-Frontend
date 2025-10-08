import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useDebouncedValue from "./useDebouncedValue";
import useFiltrarProdutos from "./useFiltrarProdutos";
import useApertarEnterOuEsc from "./useApertarEnterOuEsc";
import { ProdutoInfo } from "@/components/ProdutosInfo";

export interface useLogicaSearchESugestoesProps {
  pesquisaInicial?: string;
  numeroDeSugestoesDePesquisa?: number;
  minCaracteres?: number;
}

export default function useLogicaSearchESugestoes({
  pesquisaInicial = "",
  numeroDeSugestoesDePesquisa = 3,
  minCaracteres = 3,
}: useLogicaSearchESugestoesProps) {
  const [valorPesquisado, setValorPesquisado] = useState(pesquisaInicial);
  const debouncedLocal = useDebouncedValue(valorPesquisado, 300);
  const refDeInputParaFocar = useRef<HTMLInputElement | null>(null);

  const resultados = useFiltrarProdutos({
    produtos: ProdutoInfo,
    pesquisar: debouncedLocal,
  });

  const totalResultados = resultados.length;
  const sugestoes = useMemo(() => {
    if (debouncedLocal.trim().length < minCaracteres) return [];
    return resultados.slice(0, numeroDeSugestoesDePesquisa);
  }, [debouncedLocal, resultados, numeroDeSugestoesDePesquisa, minCaracteres]);

  const [abrir, setAbrir] = useState(false);

  useEffect(() => {
    const deveAbrir = debouncedLocal.trim().length >= minCaracteres;
    if (deveAbrir) setAbrir(true);
    else setAbrir(false);
  }, [debouncedLocal, totalResultados, minCaracteres]);

  const aoAbrirSugestaoContinuarFocadoNoInput = useCallback((open: boolean) => {
    setAbrir(open);
    if (open) {
      setTimeout(() => refDeInputParaFocar.current?.focus(), 0);
    }
  }, []);

  const confirmarPesquisa = useCallback(
    (valor?: string) => {
      const term = (valor ?? valorPesquisado).trim();
      if (term.length < minCaracteres) return null;
      return term;
    },
    [valorPesquisado, minCaracteres]
  );

  const onKeyDown = useApertarEnterOuEsc({
    confirmarPesquisa: () => {},
    fecharDropDown: () => setAbrir(false),
    preventDefault: true,
  });

  return {
    valorPesquisado,
    setValorPesquisado,
    debouncedLocal,
    refDeInputParaFocar,
    resultados,
    totalResultados,
    sugestoes,
    abrirContainerDeSugestoes: abrir,
    setAbrirContainerDeSugestoes: setAbrir,
    aoAbrirSugestaoContinuarFocadoNoInput,
    confirmarPesquisa,
    onKeyDown,
  };
}
