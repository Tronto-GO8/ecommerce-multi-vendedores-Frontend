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
  const [showPedido, setShowPedido] = useState(false)
  const navigate = useNavigate()

  const PrincipaisDuvidas = [
    "Quero saber sobre preços",
    "Como faço um pedido?",
    "Fale com o suporte",
    "Precisso de reparo técnico",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setMenuOpem(false)
      else setMenuOpem(true)
    };
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <nav className={`bg-white ${chatMenu ? "absolute left-0 max-h-[calc(100vh-144px)] z-20" : "flex"} h-full lg:mt-5 `}>
        <div className="flex flex-col w-full h-full">
          {/* Botão menu (só mobile) */}
          <div className="lg:hidden w-full">
            <Button
              className="mt-2 ml-2"
              onClick={() => setMenuOpem(!chatMenu)}
            >
              ≡
            </Button>
          </div>

          {/* Conteúdo da barra lateral */}
          <div className={`flex flex-col pt-4 h-full ${chatMenu ? "" : "hidden"}`}>
            <div className="min-w-0 grid grid-rows-[39%_35%_20%] gap-y-4 w-full max-w-[60vw] h-full relative px-4 overflow-y-auto lg:max-w-[30vw] bg-white">

              {/* Sugestões rápidas */}
              <Card className="flex flex-col gap-4 p-4 w-full max-w-full flex-shrink-0">
                <p className="text-xl sm:text-lg md:text-base">Sugestões rápidas</p>
                {PrincipaisDuvidas.map((text) => (
                  <Button
                    key={text}
                    className="w-full truncate text-sm sm:text-xs md:text-sm"
                    onClick={() => onQuickReply(text)}
                  >
                    {text}
                  </Button>
                ))}
              </Card>

              {/* Assistência técnica */}
              <Card className="flex flex-col gap-4 p-4 w-full max-w-full flex-1">
                <div className="flex-1">
                  <p className="text-xl sm:text-lg md:text-base">Precisa de assistência técnica?</p>
                  <p className="text-sm sm:text-xs md:text-sm">
                    Se o problema não foi resolvido pelo chat, abra um chamado técnico
                    para o vendedor do produto
                  </p>
                </div>
                <div className="mt-2">
                  <Button
                    className="w-full"
                    onClick={() => {setShowPedido(true)}}
                  >
                    + Abrir chamado
                  </Button>
                </div>
              </Card>

              {/* Meus chamados */}
              <Card className="flex flex-col gap-4 p-4 w-full max-w-full flex-shrink-0">
                <p className="text-xl sm:text-lg md:text-base">Meus Chamados</p>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Ver todos os Chamados
                </Button>
              </Card>

            </div>
          </div>
        </div>
      </nav>

      {showPedido && <PedidoDeAssistencia onClose={() => setShowPedido(false)} />}
    </>
  )
}
