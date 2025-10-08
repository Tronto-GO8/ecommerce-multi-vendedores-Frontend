import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type CardProdutoSkeletonProps = {
  tagCount?: number;
};
export function SkeletonProduto({ tagCount = 4 }: CardProdutoSkeletonProps) {
  return (
    <Card className="relative w-[260px] md:w-[240px] h-[350px] rounded-lg overflow-hidden border-stone-950 shadow-lg bg-zinc-800">
      <div className="absolute top-2 right-2">
        <Skeleton className="w-10 h-10 rounded-full bg-zinc-700" />
      </div>
      <CardContent className="absolute left-0 right-0 bottom-0 z-10 p-0 rounded-md bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <div className="bg-gradient-to-t from-black/95 via-black/40 to-transparent p-2 space-y-2">
          <div className="space-y-1">
            <Skeleton className="h-5 w-full bg-zinc-700" />
            <Skeleton className="h-5 w-3/4 bg-zinc-700" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-24 bg-zinc-700" />
            <Skeleton className="h-6 w-20 bg-zinc-700" />
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: tagCount }).map((_, tIdx) => (
              <Skeleton
                key={tIdx}
                className="h-6 min-w-[48px] rounded-full bg-zinc-700"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
