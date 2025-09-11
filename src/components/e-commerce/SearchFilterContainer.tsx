import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

export default function SearchFilterContainer() {
  return (
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
  );
}
