import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PedidoDeAssistencia from "../ui/PedidoAssistencia";


type BarraDeAssistenciaProps = {
    onQuickReply: (text: string) => void;
};

export default function BarraDeAssistencia({ onQuickReply }: BarraDeAssistenciaProps) {
    const [chatMenu, setMenuOpem] = useState(false)

    const [showPedido, setShowPedido] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) { // ponto de corte do lg do Tailwind
                setMenuOpem(false);
            } else {
                setMenuOpem(true);
            }
        };

        handleResize(); // define o estado inicial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navegate = useNavigate()
    const PrincipaisDuvidas = [
        "Quero saber sobre preços",
        "Como faço um pedido?",
        "Fale com o suporte",
        "Precisso de reparo ténico",
    ];

    return (
        <>
            <nav className={`bg-white h-full ${chatMenu ? "absolute" : "flex"}`}>
                <div className={`flex flex-col`}>
                    <div className="lg:hidden w-full">
                        <Button className="mt-2 ml-2" onClick={() => { setMenuOpem(!chatMenu) }}>
                            ≡
                        </Button>
                    </div>

                    <div className={`flex justify flex-col ${chatMenu ? "grid" : "hidden"}`}>
                        <div className="grid grid-rows-[40%_32%_23%] gap-y-4 w-full max-w-[400px] flex-1 px-4 overflow-y-auto">
                            <Card className="flex flex-col gap-4 p-4 w-full max-w-full overflow-hidden">
                                <p className="text-xl">Sugestões rápidas</p>

                                {PrincipaisDuvidas.map((text) => (
                                    <Button className="w-full truncate" onClick={() => onQuickReply(text)}>
                                        {text}
                                    </Button>

                                ))}
                            </Card>

                            <Card className="grid grid-rows-[60%_40%] gap-4 p-4 w-full max-w-full">
                                <div className="truncate rounded-lg whitespace-normal break-words ">
                                    <p className="text-xl truncate">Precisa de assistência técnica?</p>
                                    <p className="text-lg sm:text-base md:text-sm lg:text-base xl:text-lg truncate">
                                        Se o problema não foi resolvido pelo chat, abra um chamado técnico para o vendedor do produto
                                    </p>

                                </div>
                                <div>
                                    <Button className="w-full h-15 text-xl" onClick={() => {setShowPedido(true)}}>
                                        + Abrir chamado
                                    </Button>
                                </div>
                            </Card>
                            <Card className="grid grid-rows-[30%_70%] gap-4 p-4 w-full max-w-full">
                                <div>
                                    <p className="text-xl truncate">Meus Chamados</p>
                                </div>
                                <div className="">
                                    <Button type="submit" className="w-full h-15 text-xl" onClick={() => navegate("/")}>
                                        Ver todos os Chamados
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </nav>

            {showPedido && <PedidoDeAssistencia onClose={() => setShowPedido(false)} />}
        </>
    )
}