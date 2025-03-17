import { Bot } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <>
      <header className="bg-[#09090b]/80 fixed w-full backdrop-blur-md supports-[backdrop-filter]:bg-[#09090b]/60 top-0 z-50 border-b border-[#1a1d2d]">
        <div className="container mx-auto flex h-16 items-center md:justify-between justify-evenly">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#9e48ec]/10 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-[#9e48ec]" />
            </div>
            <span className="text-xl font-bold text-white">FinanceBot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-[#9e48ec] transition-colors"
            >
              Características
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-[#9e48ec] transition-colors"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-[#9e48ec] transition-colors"
            >
              Precios
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {/* <Link href="/login">
              <Button
                variant="ghost"
                className="hidden md:inline-flex text-white hover:bg-[#9e48ec]/10 hover:text-[#9e48ec] transition-colors cursor-pointer"
              >
                Iniciar Sesión
              </Button>
            </Link> */}
            <Link href="/register">
              <Button className="cursor-pointer bg-[#9e48ec] hover:bg-[#9e48ec]/90 text-white shadow-lg shadow-[#9e48ec]/20 transition-all hover:shadow-xl hover:shadow-[#9e48ec]/30">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
