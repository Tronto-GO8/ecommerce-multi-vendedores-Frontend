import { useState } from "react";
import { Input } from "./ui/input";
import InputError from "./InputError";
import { produtos } from "./listaProdutos";
import type { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { ChamadoForm } from "@/schemas/ChamadoformSchema";

type NomeProdutoInputProps = {
    register: UseFormRegister<ChamadoForm>;
    errors: FieldErrors<ChamadoForm>;
    setValue: UseFormSetValue<ChamadoForm>;
};

export default function NomeProdutoInput({ register, errors, setValue }: NomeProdutoInputProps) {
    const [filtro, setFiltro] = useState("");
    const [sugestoes, setSugestoes] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setFiltro(valor);
        setValue("nomeProduto", valor); // atualiza o RHF

        if (valor.length > 0) {
            const filtrados = produtos.filter(p =>
                p.toLowerCase().startsWith(valor.toLowerCase())
            );
            setSugestoes(filtrados);
        } else {
            setSugestoes([]);
        }
    };

    const selecionarSugestao = (valor: string) => {
        setFiltro(valor);
        setValue("nomeProduto", valor);
        setSugestoes([]);
    };

    return (
        <div className="w-full relative">
            <p>Nome do produto</p>
            <Input
                placeholder="Ex: iPhone"
                value={filtro}
                onChange={handleChange} 
            />
            <InputError message={errors.nomeProduto?.message} />

            {sugestoes.length > 0 && (
                <ul className="absolute bg-white border rounded w-full mt-1 max-h-40 overflow-y-auto z-20">
                    {sugestoes.map((item, index) => (
                        <li
                            key={index}
                            className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                            onClick={() => selecionarSugestao(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
