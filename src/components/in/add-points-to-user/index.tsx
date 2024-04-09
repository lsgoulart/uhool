import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode
}
 
export function AddPointsToUser({ children }: Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar pontos</DialogTitle>
            <DialogDescription>
              Adicione pontos ao usuário selecionado.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Pontos
              </Label>
              <Input id="points" value="120" className="col-span-4" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}