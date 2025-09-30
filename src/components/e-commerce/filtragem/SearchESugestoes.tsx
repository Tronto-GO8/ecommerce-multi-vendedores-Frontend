import { Popover, PopoverTrigger } from "@/components/ui/popover";
import ContainerDeSugestoes from "./ContainerDeSugestoes";
import ComponenteSearch from "./ComponenteSearch";
import useLogicaSearchESugestoes from "@/hooks/useLogicaSearchESugestoes";

interface SearchESugestoesProps {
  pesquisar: string;
  setPesquisar: (valor: string) => void;
  numeroDeSugestoesDePesquisa?: number;
  minCaracteres?: number;
}

export default function SearchESugestoes({
  pesquisar,
  setPesquisar,
  numeroDeSugestoesDePesquisa = 3,
  minCaracteres = 3,
}: SearchESugestoesProps) {
  const {
    valorPesquisado,
    setValorPesquisado,
    debouncedLocal,
    refDeInputParaFocar,
    totalResultados,
    sugestoes,
    abrirContainerDeSugestoes,
    handleOpenChange,
    confirmarPesquisa,
    onKeyDown,
    setAbrirContainerDeSugestoes,
  } = useLogicaSearchESugestoes({
    pesquisaInicial: pesquisar,
    numeroDeSugestoesDePesquisa,
    minCaracteres,
  });

  const confirmar = (valor?: string) => {
    const term = confirmarPesquisa(valor);
    if (!term) return;
    setPesquisar(term);
    setAbrirContainerDeSugestoes(false);
  };

  const onSugestaoSelecionada = (p: { nome: string }) => {
    setValorPesquisado(p.nome);
    confirmar(p.nome);
    setTimeout(() => refDeInputParaFocar.current?.focus(), 0);
  };

  return (
    <div className="relative flex-1 max-w-sm">
      <Popover open={abrirContainerDeSugestoes} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <ComponenteSearch
            ref={refDeInputParaFocar}
            valorPesquisado={valorPesquisado}
            onChange={(e) => setValorPesquisado(e.target.value)}
            onKeyDown={(e) => {
              onKeyDown(e);
              if (e.key === "Enter") confirmar();
            }}
            abrirContainerDeSugestoes={abrirContainerDeSugestoes}
          />
        </PopoverTrigger>

        <ContainerDeSugestoes
          debouncedLocal={debouncedLocal}
          totalResultados={totalResultados}
          sugestoes={sugestoes}
          numeroDeSugestoesDePesquisa={numeroDeSugestoesDePesquisa}
          onSelecionarSugestao={onSugestaoSelecionada}
          onConfirmarPesquisa={confirmarPesquisa}
        />
      </Popover>
    </div>
  );
}
