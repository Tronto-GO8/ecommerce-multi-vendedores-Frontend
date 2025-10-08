import { Headset, User } from "lucide-react";
import { Button } from "../ui/button";
import DropDownPerfil from "./DropDownPerfil";

export default function HeaderInicial() {
  return (
    <header className="flex flex-row justify-between p-2 items-center ">
      <h1 className="text-xl font-semibold font-sans text-white">LOGO</h1>
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
