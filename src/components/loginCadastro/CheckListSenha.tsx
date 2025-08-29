import { regrasSenha } from "@/schemas/regrasSenha";

type ChecklistSenhaProps = {
  senha: string;
};

export default function ChecklistSenha({ senha }: ChecklistSenhaProps) {
  return (
    <ul className="space-y-1 mt-2 text-sm">
      {regrasSenha.map((regra, idx) => (
        <li
          key={idx}
          className={`flex items-center gap-2 ${
            regra.teste(senha) ? "text-green-600" : "text-gray-400"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              regra.teste(senha) ? "bg-green-600" : "bg-gray-400"
            }`}
          ></span>
          {regra.label}
        </li>
      ))}
    </ul>
  );
}
