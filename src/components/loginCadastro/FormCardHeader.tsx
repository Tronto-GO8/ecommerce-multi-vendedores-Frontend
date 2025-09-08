import { Link } from "react-router-dom";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft } from "lucide-react";

interface FormCardHeaderProps {
  titulo: string;
  descricao?: string;
  linkDeVoltar?: {
    to: string;
    label: string;
  };
  textoCentralizado?: boolean;
}

export default function FormCardHeader({
  titulo,
  descricao,
  linkDeVoltar,
  textoCentralizado,
}: FormCardHeaderProps) {
  return (
    <CardHeader
      className={`space-y-4 ${
        textoCentralizado && !linkDeVoltar ? "text-center" : ""
      }`}
    >
      {linkDeVoltar && (
        <Link
          className="inline-flex items-center text-sm hover:text-gray-600 transition-colors"
          to={linkDeVoltar.to}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {linkDeVoltar.label}
        </Link>
      )}

      <div>
        <CardTitle className="text-2xl font-bold font-sans">{titulo}</CardTitle>
        {descricao && (
          <CardDescription className="text-sm mt-2">
            {descricao}
          </CardDescription>
        )}
      </div>
    </CardHeader>
  );
}
