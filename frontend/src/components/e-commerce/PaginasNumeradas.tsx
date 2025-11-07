import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

interface PaginasNumeradasProps {
  numeroPagina: number;
  paginaAtual: number;
  totalPaginas: number;
  onMudarPagina: (novaPagina: number) => void;
}
export default function PaginasNumeradas({
  numeroPagina,
  paginaAtual,
  totalPaginas,
  onMudarPagina,
}: PaginasNumeradasProps) {
  // Mostrar sempre a primeira, a última, a atual e as adjacentes
  // Exemplo: 1 ... 4 5 [6] 7 8 ... 20
  const deveMostar =
    numeroPagina === 1 ||
    numeroPagina === totalPaginas ||
    (numeroPagina >= paginaAtual - 1 && numeroPagina <= paginaAtual + 1);

  const deveMostrarTresPontos =
    numeroPagina === paginaAtual - 2 || numeroPagina === paginaAtual + 2;

  if (deveMostar) {
    return (
      <PaginationItem key={numeroPagina}>
        <PaginationLink
          onClick={() => onMudarPagina(numeroPagina)}
          isActive={paginaAtual === numeroPagina}
          className="cursor-pointer text-black hover:bg-gray-700"
        >
          {numeroPagina}
        </PaginationLink>
      </PaginationItem>
    );
  }

  if (deveMostrarTresPontos) {
    return (
      <PaginationItem key={numeroPagina}>
        <PaginationEllipsis className="text-white" />
      </PaginationItem>
    );
  }
  return null;
}
