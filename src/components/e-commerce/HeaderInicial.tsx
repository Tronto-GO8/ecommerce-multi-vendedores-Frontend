import { Headset } from "lucide-react";
import { Button } from "../ui/button";
import DropDownPerfil from "./DropDownPerfil";
import { Link } from "react-router-dom";

export default function HeaderInicial() {
  return (
    <header className="flex flex-row justify-between p-2 items-center bg-[#303030]">
      <Link to={"/app/inicial"}>
        <Button
          variant={"ghost"}
          className="text-xl font-semibold font-sans text-white"
        >
          LOGO
        </Button>
      </Link>
      <div className="flex flex-row items-center gap-2">
        <Button>
          <DropDownPerfil />
        </Button>
        <Button>
          <Headset />
        </Button>
        <Button>
          <p>Área admnistrativa</p>
        </Button>
      </div>
    </header>
  );
}
