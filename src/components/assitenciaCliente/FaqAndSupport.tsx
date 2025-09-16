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
            <nav className={`bg-white h-[85%] ${chatMenu ? "absolute" : "flex"}`}>
                <div className="flex flex-col w-full h-full">
                    {/* Botão menu (só mobile) */}
                    <div className="lg:hidden w-full">
                        <Button
                            className="mt-2 ml-2"
                            onClick={() => {
                                setMenuOpem(!chatMenu);
                            }}
                        >
                            ≡
                        </Button>
                    </div>

                    {/* Conteúdo da barra lateral */}
                    <div
                        className={`border flex flex-col pt-4 h-full ${chatMenu ? "grid" : "hidden"
                            }`}
                    >
                        <div className="grid grid-rows-[auto_1fr_auto] gap-y-4 w-full max-w-[400px] h-full px-4 overflow-y-auto">
                            {/* Sugestões rápidas */}
                            <Card className="flex flex-col gap-4 p-4 w-full max-w-full flex-1">
                                <p className="text-xl">Sugestões rápidas</p>
                                {PrincipaisDuvidas.map((text) => (
                                    <Button
                                        key={text}
                                        className="w-full truncate"
                                        onClick={() => onQuickReply(text)}
                                    >
                                        {text}
                                    </Button>
                                ))}
                            </Card>

                            {/* Assistência técnica */}
                            <Card className="flex flex-col gap-4 p-4 w-full max-w-full flex-1">
                                <div className="flex-1">
                                    <p className="text-xl">Precisa de assistência técnica?</p>
                                    <p className="text-lg sm:text-base md:text-sm lg:text-base xl:text-lg">
                                        Se o problema não foi resolvido pelo chat, abra um chamado técnico
                                        para o vendedor do produto
                                    </p>
                                </div>
                                <div>
                                    <Button
                                        className="w-full h-15 text-xl"
                                        onClick={() => {
                                            setShowPedido(true);
                                        }}
                                    >
                                        + Abrir chamado
                                    </Button>
                                </div>
                            </Card>

                            {/* Meus chamados */}
                            <Card className="flex flex-col gap-4 p-4 w-full max-w-full">
                                <div>
                                    <p className="text-xl">Meus Chamados</p>
                                </div>
                                <div>
                                    <Button
                                        type="submit"
                                        className="w-full h-15 text-xl"
                                        onClick={() => navegate("/")}
                                    >
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