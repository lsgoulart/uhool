import { clerkClient } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { AddPointsToUser } from "@/components/in/add-points-to-user";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function UsersPage() {
  const users = await clerkClient.users.getUserList();

  return (
    <div className="flex min-h-screen w-full max-w-screen-xl m-auto flex-col">
      <div className="flex flex-col sm:gap-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 mb-6">
          <Breadcrumb className="hidden md:flex" x-chunk="dashboard-06-chunk-0">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Página inicial</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Usuários</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-1">
            <CardHeader>
              <CardTitle>Usuários</CardTitle>
              <CardDescription>
                Visualize e atribua pontos aos usuários cadastrados.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Avatar</span>
                    </TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Perfil</TableHead>
                    <TableHead>Pontos</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Ingressou em
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Ações</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={user.imageUrl}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {user.firstName} {user.lastName}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.publicMetadata.role === "admin" ? "Administrador" : "Usuário" }</Badge>
                      </TableCell>
                      <TableCell>{user.publicMetadata?.points}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {user.createdAt}
                      </TableCell>
                      <TableCell>
                        <AddPointsToUser>
                          <Button variant="default" size="sm">Dar pontos</Button>
                        </AddPointsToUser>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Exibindo <strong>1-10</strong> de <strong>32</strong>{" "}
                usuários
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
