import { useCallback } from "react";

type Props = {
  confirmarPesquisa: () => void;
  fecharDropDown: (abrir: boolean) => void;
  preventDefault?: boolean;
};

export default function ApertarEnterOuEsc({
  confirmarPesquisa,
  fecharDropDown,
  preventDefault = true,
}: Props) {
  const pressionarTeclado = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        if (preventDefault) e.preventDefault();
        confirmarPesquisa();
        fecharDropDown(false);
      } else if (e.key === "Escape") {
        if (preventDefault) e.preventDefault();
        fecharDropDown(false);
      }
    },
    [confirmarPesquisa, fecharDropDown, preventDefault]
  );
  return pressionarTeclado;
}
