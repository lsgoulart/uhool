import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AwardIcon } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className={cn("space-y-3")}>
      <div className="overflow-hidden rounded-md">
        <Image
          src="/images/redbull.png"
          alt="Album cover"
          width={250}
          height={330}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            "aspect-[3/4]"
          )}
        />
      </div>
        
      <div className="space-y-1 text-sm text-left">
        <h3 className="font-medium leading-none">Redbull</h3>
        <p className="text-xs text-muted-foreground flex gap-1 items-center">
          <AwardIcon size={16} className="text-primary" />
          25
        </p>
      </div>
    </div>
  )
}

export default function PrivatePage () {
  return (
    <div className="min-h-screen w-full max-w-screen-xl m-auto">
      <h1 className="text-2xl font-bold mb-10">Produtos disponíveis</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Array.from({ length: 16 }).map((_, i) => (
          <Dialog key={i}>
            <DialogTrigger>
              <ProductCard />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Trocar pontos?</DialogTitle>
                <DialogDescription>
                  Deseja trocar 25 pontos por este produto?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-8">
                <DialogClose asChild>
                  <Button variant="ghost">Não, desisto!</Button>
                </DialogClose>
                  
                <Button>Siiiim, bora!</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}