import { Bot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1a2035]">
    <div className="container mx-auto flex flex-col gap-4 py-10 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 md:gap-2">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-[#9e48ec]" />
          <span className="font-bold text-white">FinanceBot</span>
        </Link>
        <p className="text-sm text-muted-foreground">© 2025 BotFinance. Todos los derechos reservados.</p>
      </div>
      <div className="flex gap-4 text-sm text-muted-foreground">
        <Link href="/privacy" className="hover:text-[#9e48ec] transition-colors">
          Política de Privacidad
        </Link>
        <Link href="/terms" className="hover:text-[#9e48ec] transition-colors">
          Términos y Condiciones
        </Link>
      </div>
    </div>
  </footer>
  )
}
