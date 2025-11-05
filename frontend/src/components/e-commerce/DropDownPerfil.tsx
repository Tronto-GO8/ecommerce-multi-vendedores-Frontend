import { Headset, Settings, ShoppingBag, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { iconeComParagrafo } from "@/styles/variaveisTailwind/Reutilizaveis";

export default function () {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <UserIcon />
        Perfil
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={iconeComParagrafo}>
          <UserIcon />
          Informações
        </DropdownMenuItem>
        <DropdownMenuItem className={iconeComParagrafo}>
          <ShoppingBag />
          Pedidos
        </DropdownMenuItem>
        <DropdownMenuItem className={iconeComParagrafo}>
          <Headset />
          Chamados
        </DropdownMenuItem>
        <DropdownMenuItem className={iconeComParagrafo}>
          <Settings />
          Configurações
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
