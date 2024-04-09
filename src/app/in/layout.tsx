import Header from "@/components/in/header";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-background p-4 md:gap-8 md:p-10">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </main>
    </div>
  )
}