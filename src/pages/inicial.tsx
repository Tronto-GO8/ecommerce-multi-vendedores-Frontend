import BtnCarrinho from "@/components/e-commerce/BtnCarrinho";
import CardProduto from "@/components/e-commerce/CardProduto";
import { ProdutoInfo } from "@/components/ProdutosInfo";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, Headset, Search, User } from "lucide-react";

export default function Inicial() {
  return (
    <div className=" w-full min-h-screen bg-[#303030] grid ">
      <header className="flex flex-row justify-between p-2 items-center">
        <h1 className="text-xl font-semibold font-sans text-white">LOGO</h1>
        <div className="flex flex-row items-center gap-2">
          <Button>
            <User />
          </Button>
          <Button>
            <Headset />
          </Button>
          <Button>;
            <p>Área admnistrativa</p>
          </Button>
        </div>
      </header>
      <div className="w-full grid ">
        <div className="bg-[#202020] flex items-center gap-2 p-2 justify-end">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
            <Input
              placeholder="Pesquisar produtos..."
              className="dark:bg-[#202020] dark:text-gray-200 dark:border-[#303030]"
            />
          </div>
          <Button>
            <Filter />
          </Button>
        </div>
        <Card className="p-2 bg-[#202020] border-none space-y-6 rounded-none">
          <div className="space-y-2">
            <CardTitle className="text- text-white">Populares</CardTitle>
            <div className="border-t border-gray-400"></div>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" /> */}
          <div className="flex flex-wrap gap-2">
            {ProdutoInfo.map((p) => (
              <CardProduto key={p.id} produtos={p} />
            ))}
          </div>
        </Card>
        <BtnCarrinho
          className="fixed z-50 bottom-4 right-4 flex items-center gap-2 px-4 py-2 shadow-lg"
          children={<span className="text-lg text-white">Carrinho</span>}
        />
      </div>
    </div>
  );
}
