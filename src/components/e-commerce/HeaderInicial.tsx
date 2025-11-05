import { Headset } from "lucide-react";
import { Button } from "../ui/button";
import DropDownPerfil from "./DropDownPerfil";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function HeaderInicial() {
  const navigate = useNavigate();
  const { estaAutenticado } = useAuth();

  return (
    <header className="flex justify-between p-2 items-center bg-[#303030]">
      <Link to={"/app/inicial"}>
        <Button
          variant={"ghost"}
          className="text-xl font-semibold font-sans text-white"
        >
          LOGO
        </Button>
      </Link>

      <div className="flex flex-row items-center gap-1 md:gap-2">
        {estaAutenticado ? (
          <>
            <Button>
              <DropDownPerfil />
            </Button>
            <Button>
              <Headset />
              <p>Assitência</p>
            </Button>
            <Button>
              <p>Área admnistrativa</p>
            </Button>
          </>
        ) : (
          <Button onClick={() => navigate("/login")} className="text-white">
            Entrar
          </Button>
        )}
      </div>
    </header>
  );
}
