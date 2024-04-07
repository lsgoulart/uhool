import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton, currentUser } from '@clerk/nextjs';
import { AwardIcon, Menu, Package2, TrophyIcon } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    label: 'Página inicial',
    link: '/in',
    active: true,
  }
]

export default async function Header() {
  const user = await currentUser()

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/in" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <TrophyIcon size={20} className="text-primary-foreground" />
          <span className="text-lg font-bold text-primary">Uhool</span>
        </Link>

        <Separator orientation="vertical" className="h-6" />

        {menuItems.map((item) => (
          <Link
            key={`menu_item_${item.id}`}
            href={item.link}
            className={`${item.active ? 'text-foreground' : 'text-muted-foreground' } min-w-fit transition-colors hover:text-foreground`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Uhool</span>
            </Link>

            {menuItems.map((item) => (
              <Link
                key={`menu_item_mobile_${item.id}`}
                href={item.link}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <AwardIcon size={16} className="text-primary" /> 
            <span className="font-bold">135</span>
          </div>
          {/* <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button> */}

          <Separator orientation="vertical" className="h-6" />

          <div className="size-8">
            <UserButton afterSignOutUrl="/"  />
          </div>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>

              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.imageUrl} alt={user?.username || 'usuário'} />
                <AvatarFallback>{`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>
                <span className="">Olá</span><br/>
                <span className="font-light text-xs text-muted-foreground">{user?.firstName}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Minha conta</DropdownMenuItem>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SignOutButton>
                  Sair
                </SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </header>
  )
}