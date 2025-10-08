import { Pagination, PaginationContent } from "@/components/ui/pagination";
import MudarPagina from "../MudarPagina";
import PaginasNumeradas from "./PaginasNumeradas";

interface ProductPaginationProps {
  paginaAtual: number;
  totalPaginas: number;
  onMudarPagina: (novaPagina: number) => void;
}

export default function PaginacaoProdutos({
  paginaAtual,
  totalPaginas,
  onMudarPagina,
}: ProductPaginationProps) {
  if (totalPaginas <= 1) return null;

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <MudarPagina
              tipoDeBotao="previous"
              desativarSe={paginaAtual === 1}
              onMudarPagina={() => onMudarPagina(paginaAtual - 1)}
            />

            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (numeroPagina) => (
                <PaginasNumeradas
                  key={numeroPagina}
                  numeroPagina={numeroPagina}
                  paginaAtual={paginaAtual}
                  totalPaginas={totalPaginas}
                  onMudarPagina={onMudarPagina}
                />
              )
            )}

            <MudarPagina
              tipoDeBotao="next"
              desativarSe={paginaAtual === totalPaginas}
              onMudarPagina={() => onMudarPagina(paginaAtual + 1)}
            />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
