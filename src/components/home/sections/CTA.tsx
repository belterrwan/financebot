import { AnimateInView } from '@/components/globals/AnimateInView'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function CTA() {
  return (
    <section className="py-16">
          <AnimateInView>
            <div className="container max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9042d6]/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 backdrop-blur-md bg-[#0a101f]/20 border border-white/10 rounded-2xl" />
              <div className="relative z-10 ">
                <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para transformar tus finanzas?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Únete a miles de usuarios que ya están optimizando sus gastos y alcanzando sus metas financieras con
                  FinanceBot.
                </p>
                <Button
                  size="lg"
                  className="bg-[#9e48ec] cursor-pointer hover:bg-[#9e48ec]/90 text-white shadow-lg shadow-[#9e48ec]/20 transition-all hover:shadow-xl hover:shadow-[#9e48ec]/30"
                >
                  Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimateInView>
        </section>
  )
}
