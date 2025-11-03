import {
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface MudarPaginaProps {
  desativarSe: boolean;
  onMudarPagina: () => void;
  tipoDeBotao: "previous" | "next";
}

export default function MudarPagina({
  desativarSe,
  onMudarPagina,
  tipoDeBotao,
}: MudarPaginaProps) {
  const commonClasses = `cursor-pointer text-white hover:bg-gray-700 ${
    desativarSe ? "opacity-50 cursor-not-allowed" : ""
  }`;
  return (
    <PaginationItem>
      {tipoDeBotao === "previous" ? (
        <PaginationPrevious
          onClick={!desativarSe ? onMudarPagina : undefined}
          className={commonClasses}
        />
      ) : (
        <PaginationNext
          onClick={!desativarSe ? onMudarPagina : undefined}
          className={commonClasses}
        />
      )}
    </PaginationItem>
  );
}
