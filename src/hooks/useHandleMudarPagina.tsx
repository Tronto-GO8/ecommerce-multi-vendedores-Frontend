import { useCallback } from "react";

export default function useHandleMudarPagina(
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>,
  totalPaginas: number
) {
  const handleMudarPagina = useCallback(
    (novaPagina: number) => {
      if (novaPagina >= 1 && novaPagina <= totalPaginas) {
        setPaginaAtual(novaPagina);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    [setPaginaAtual, totalPaginas]
  );

  return handleMudarPagina;
}
