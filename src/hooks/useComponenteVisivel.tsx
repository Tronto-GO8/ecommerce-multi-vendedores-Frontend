import { useState, useEffect, useRef } from "react";

export function useComponenteVisivel(options = {}) {
  const [estaVisivel, setEstaVisivel] = useState(false);
  const [jaCarregado, setJaCarregado] = useState(false);
  const elementoQueSeraObservado = useRef(null);
  // IntersectionObserver: API nativa do navegador que observa quando um elemento entra ou sai da viewport
  // isIntersecting: indica se o elemento está visível na viewport
  // options: configuração da observação
  // elementoQueSeraObservado -> elementoQueEstaSendoObservado

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEstaVisivel(entry.isIntersecting);
        // Se o elemento está visível e ainda não foi carregado, marca como carregado
        if (entry.isIntersecting && !jaCarregado) {
          setJaCarregado(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    const elementoQueEstaSendoObservado = elementoQueSeraObservado.current;

    if (elementoQueEstaSendoObservado) {
      observer.observe(elementoQueEstaSendoObservado);
    }

    return () => {
      if (elementoQueEstaSendoObservado) {
        observer.unobserve(elementoQueEstaSendoObservado);
      }
    };
  }, [jaCarregado, options]);

  return { elementoQueSeraObservado, estaVisivel, jaCarregado };
}
