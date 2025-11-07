import { useCallback, useEffect, useRef, useState } from "react";

export function useLoading(
  intervalo: number,
  iniciarSeForVerdadeiro: boolean = false
) {
  const [estaCarregando, setEstaCarregando] = useState<boolean>(
    iniciarSeForVerdadeiro
  );

  const referenciaDeTimerAtual = useRef<number | null>(null);

  const ativarCarregamento = useCallback(
    (callback?: () => void) => {
      setEstaCarregando(true);

      if (referenciaDeTimerAtual.current) {
        window.clearTimeout(referenciaDeTimerAtual.current);
      }

      referenciaDeTimerAtual.current = window.setTimeout(() => {
        setEstaCarregando(false);
        referenciaDeTimerAtual.current = null;
        if (callback) callback();
      }, intervalo);
    },
    [intervalo]
  );

  useEffect(() => {
    if (iniciarSeForVerdadeiro) {
      ativarCarregamento();
    }

    return () => {
      if (referenciaDeTimerAtual.current) {
        clearTimeout(referenciaDeTimerAtual.current);
      }
    };
  }, [iniciarSeForVerdadeiro, ativarCarregamento]);

  return { estaCarregando, ativarCarregamento };
}
