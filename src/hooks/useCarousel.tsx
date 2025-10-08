import { useLayoutEffect, useRef, useState } from "react";

export function useCarousel(totalItens: number) {
  const refViewport = useRef<HTMLDivElement | null>(null);
  const refTrilha = useRef<HTMLDivElement | null>(null);
  const refPrimeiroItem = useRef<HTMLDivElement | null>(null);

  const [indiceInicio, setIndiceInicio] = useState(0);
  const [qtdVisiveis, setQtdVisiveis] = useState(1);
  const [offsets, setOffsets] = useState<number[]>([]); // offsets cumulativos de cada item

  useLayoutEffect(() => {
    const medir = () => {
      const viewport = refViewport.current;
      const trilha = refTrilha.current;
      if (!viewport || !trilha) return;

      const items = Array.from(
        trilha.querySelectorAll<HTMLElement>("[data-item]")
      );
      if (items.length === 0) return;

      // pega gap do container (suporta 'gap' ou 'column-gap' dependendo do browser)
      const trilhaStyle = getComputedStyle(trilha);
      const gap =
        parseFloat(trilhaStyle.gap || trilhaStyle.columnGap || "0") || 0;

      // calcula largura (incluindo gap/margin) e offsets cumulativos
      const offsetsLocal: number[] = [];
      const widths: number[] = []; // largura de cada item considerada no cálculo
      let acumulado = 0;

      items.forEach((it, i) => {
        offsetsLocal[i] = acumulado;

        const rect = it.getBoundingClientRect();
        const style = getComputedStyle(it);
        const marginRight = parseFloat(style.marginRight || "0") || 0;

        // largura do item + marginRight + gap
        const larguraItem = Math.round(rect.width + marginRight + gap);

        widths[i] = larguraItem;
        acumulado += larguraItem;
      });

      // quantos cabem visivelmente a partir do início (soma larguras até ultrapassar viewport)
      let soma = 0;
      let visiveisCount = 0;
      for (let i = 0; i < widths.length; i++) {
        const larguraItem = widths[i];
        // garante que ao menos 1 item será contado mesmo se for maior que o viewport
        if (
          soma + larguraItem <= Math.max(0, viewport.clientWidth) ||
          visiveisCount === 0
        ) {
          soma += larguraItem;
          visiveisCount++;
        } else {
          break;
        }
      }

      setOffsets(offsetsLocal);
      setQtdVisiveis(Math.max(1, visiveisCount));

      // garante que indiceInicio não extrapole
      const indiceMaxInicio = Math.max(
        0,
        items.length - Math.max(1, visiveisCount)
      );
      setIndiceInicio((s) => Math.min(s, indiceMaxInicio));
    };

    medir();

    const ro = new ResizeObserver(medir);
    if (refViewport.current) ro.observe(refViewport.current);
    if (refTrilha.current) ro.observe(refTrilha.current);

    window.addEventListener("resize", medir);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", medir);
    };
  }, [totalItens]);

  const indiceMaxInicio = Math.max(0, totalItens - qtdVisiveis);

  const irAnterior = () => setIndiceInicio((s) => Math.max(0, s - 1));
  const irProximo = () =>
    setIndiceInicio((s) => Math.min(indiceMaxInicio, s + 1));

  const mostrarControles = totalItens > qtdVisiveis;

  // offset atual (fallback 0)
  const passoPx = offsets[indiceInicio] ?? 0;

  return {
    refViewport,
    refTrilha,
    refPrimeiroItem,
    indiceInicio,
    passoPx,
    indiceMaxInicio,
    irAnterior,
    irProximo,
    mostrarControles,
  };
}
