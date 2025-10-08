interface PesquisaPorResultadoProps {
  onConfirmarPesquisa: () => void;
  debouncedLocal: string;
  totalResultados: number;
}
export default function PesquisaPorResultado({
  onConfirmarPesquisa,
  debouncedLocal,
  totalResultados,
}: PesquisaPorResultadoProps) {
  return (
    <div className="px-4 py-3 border-[#1f1f1f] bg-transparent">
      <button
        onClick={() => onConfirmarPesquisa()}
        className="w-full text-left outline-none rounded-sm"
        aria-label={`Pesquisar por ${debouncedLocal}`}
      >
        <div className="text-xs text-slate-400">
          Pesquisar por resultado (resultado: {totalResultados})
        </div>
        <div className="text-sm text-slate-100 font-medium mt-1 line-clamp-1">
          {debouncedLocal}
        </div>
      </button>
    </div>
  );
}
