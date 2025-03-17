import { AnimateInView } from '@/components/globals/AnimateInView'
import { GlowCard } from '@/components/globals/GlowCard'
import { BarChart4, LineChart, Shield, Smartphone, Wallet, Zap } from 'lucide-react'
import React from 'react'

export default function Features() {
  return (
    <section id="features" className="py-24">
    <div className="container mx-auto relative">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#9042d6]/5 blur-[150px] pointer-events-none" />

      <AnimateInView>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-white">Características Principales</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre todas las herramientas que FinanceBot pone a tu disposición para optimizar tus finanzas
          </p>
        </div>
      </AnimateInView>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        <AnimateInView delay={0.1}>
          <GlowCard className="p-6 rounded-xl h-full">
            <Zap className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white" >Análisis en Tiempo Real</h3>
            <p className="text-muted-foreground">
              Monitorea tus gastos al instante y recibe alertas cuando detectamos patrones inusuales.
            </p>
          </GlowCard>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <GlowCard className="p-6 rounded-xl h-full">
            <Shield className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Seguridad Avanzada</h3>
            <p className="text-muted-foreground">
              Tus datos financieros están protegidos con encriptación de nivel bancario.
            </p>
          </GlowCard>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <GlowCard className="p-6 rounded-xl h-full">
            <LineChart className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Proyecciones Financieras</h3>
            <p className="text-muted-foreground">
              Visualiza tu futuro financiero con proyecciones basadas en tus hábitos actuales.
            </p>
          </GlowCard>
        </AnimateInView>

        <AnimateInView delay={0.4}>
          <GlowCard className="p-6 rounded-xl h-full">
            <BarChart4 className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Categorización Inteligente</h3>
            <p className="text-muted-foreground">
              Nuestro sistema de IA clasifica automáticamente tus transacciones con precisión.
            </p>
          </GlowCard>
        </AnimateInView>

        <AnimateInView delay={0.5}>
          <GlowCard className="p-6 rounded-xl h-full">
            <Wallet className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Presupuestos Personalizados</h3>
            <p className="text-muted-foreground">
              Crea y gestiona presupuestos adaptados a tus necesidades específicas.
            </p>
          </GlowCard>
        </AnimateInView>

        <AnimateInView delay={0.6}>
          <GlowCard className="p-6 rounded-xl h-full">
            <Smartphone className="h-10 w-10 text-[#9e48ec] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Acceso Multiplataforma</h3>
            <p className="text-muted-foreground">
              Accede a tus finanzas desde cualquier dispositivo, en cualquier momento.
            </p>
          </GlowCard>
        </AnimateInView>
      </div>
    </div>
  </section>
  )
}
