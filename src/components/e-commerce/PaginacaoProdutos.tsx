import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
      {/* Componente de paginação */}
      <div className="flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onMudarPagina(paginaAtual - 1)}
                className={`cursor-pointer text-white hover:bg-gray-700 ${
                  paginaAtual === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
            </PaginationItem>

            {/* Páginas numeradas */}
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
              (numeroPagina) => {
                // Mostrar apenas algumas páginas para não sobrecarregar a UI
                if (
                  numeroPagina === 1 ||
                  numeroPagina === totalPaginas ||
                  (numeroPagina >= paginaAtual - 1 &&
                    numeroPagina <= paginaAtual + 1)
                ) {
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
                } else if (
                  numeroPagina === paginaAtual - 2 ||
                  numeroPagina === paginaAtual + 2
                ) {
                  return (
                    <PaginationItem key={numeroPagina}>
                      <PaginationEllipsis className="text-white" />
                    </PaginationItem>
                  );
                }
                return null;
              }
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => onMudarPagina(paginaAtual + 1)}
                className={`cursor-pointer text-white hover:bg-gray-700 ${
                  paginaAtual === totalPaginas
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
