import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowDownToLine } from "lucide-react";
import { useState } from "react";
import { Modulos } from "@/components/ui/modulos";
import { useEffect } from "react";
interface TabelaUsuariosProps {
  moduloAtivo: Modulos;
  selecionarModulo: (modulo: Modulos) => void;
}


export default function TabelaUsiarios({ moduloAtivo, selecionarModulo }: TabelaUsuariosProps) {
    const [placeholder, setPlaceholder] = useState(
    window.innerWidth < 640
      ? "Buscar cliente"
      : "Buscar por identificador, nome ou telefone"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPlaceholder("Buscar...");
      } else {
        setPlaceholder("Buscar por identificador, nome ou telefone");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




    return (
        <>
            <div className="border border-black flex flex-col gap-2 h-full absolute sm:top-0 top-[0px] left-0 right-0 bottom-0 z-50 sm:relative sm:z-auto bg-white">
                <Card className="flex justify-between items-center w-full p-2 gap-2">
                    {/* Botão à esquerda */}
                    <Button onClick={() => selecionarModulo("vazio")} className="block sm:hidden">
                        <ArrowDownToLine/>
                    </Button>
                    <Button className="c-white">+ Adicionar</Button>

                    {/* Input + botão de pesquisa agrupados */}
                    <div className="flex flex-1 gap-2 justify-end">
                        <Input
                            placeholder={placeholder}
                            className="sm:w-[40%] w-[70%] dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030]"
                        />
                        <Button>
                            <Search />
                        </Button>
                    </div>
                </Card>

                <table className="border border-black">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Nome</th>
                            <th>Ultima compra</th>
                            <th>Telefone</th>
                            <th>Chamado</th>
                            <th>{moduloAtivo}</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </>
    );

}