import { useEffect, useRef, useState } from "react";

const DELAY_INICIO = 600; // ms antes de começar a trocar
const INTERVALO_TROCA = 700; // ms entre trocas

export function useTrocaDeImagens(imagens: string[]) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [mouseNoCard, setMouseAtivo] = useState(false);

  const temporizadorRef = useRef<number | null>(null);
  const intervaloRef = useRef<number | null>(null);

  const preload = (urls: string[]) => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url; // navegador começa a carregar a imagem em background
    });
  };

  const iniciarTroca = () => {
    if (imagens.length <= 1) return;
    preload(imagens);

    if (intervaloRef.current) window.clearInterval(intervaloRef.current);

    intervaloRef.current = window.setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, INTERVALO_TROCA) as unknown as number;
  };

  const pararTroca = () => {
    setIndiceAtual(0);
    if (temporizadorRef.current) {
      window.clearTimeout(temporizadorRef.current);
      temporizadorRef.current = null;
    }
    if (intervaloRef.current) {
      window.clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };

  const aoEntrar = () => {
    setMouseAtivo(true);
    if (imagens.length > 1) {
      if (temporizadorRef.current) window.clearTimeout(temporizadorRef.current);

      temporizadorRef.current = window.setTimeout(() => {
        iniciarTroca();
      }, DELAY_INICIO) as unknown as number;
    }
  };

  const aoSair = () => {
    setMouseAtivo(false);
    pararTroca();
  };

  useEffect(() => {
    return () => pararTroca();
  }, []);

  return {
    indiceAtual,
    mouseNoCard,
    aoEntrar,
    aoSair,
  };
}
