import { AnimateInView } from "@/components/globals/AnimateInView";
import { GlowCard } from "@/components/globals/GlowCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CreditCard, PieChart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="container mx-auto relative mt-5 md:mt-0 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#9042d6]/10 blur-[120px] pointer-events-none" />
          {/* <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#9042d6]/5 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#9042d6]/5 blur-[100px] pointer-events-none" /> */}

      <AnimateInView>
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-8 text-center relative">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9e48ec] to-[#b66dff]">
            Control de Gastos con IA Inteligente
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Tu asistente financiero personal disponible 24/7. Optimiza tus
            gastos y alcanza tus metas financieras en un solo lugar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-12 cursor-pointer bg-[#9e48ec] hover:bg-[#9e48ec]/90 text-white shadow-lg shadow-[#9e48ec]/20 transition-all hover:shadow-xl hover:shadow-[#9e48ec]/30"
            >
              Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-[800px] h-[400px] mt-8 rounded-xl overflow-hidden shadow-2xl shadow-[#9042d6]/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9042d6]/20 to-transparent z-10 pointer-events-none" />
            <Image
              src="/heroImg.webp"
              alt="FinanceBot Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimateInView>

      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
        <AnimateInView delay={0.1}>
          <GlowCard className="rounded-xl p-2 h-full">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <BarChart3 className="h-12 w-12 text-[#9e48ec]" />
              <div className="space-y-2">
                <h3 className="font-bold text-white">Análisis Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Analiza tus patrones de gasto y recibe recomendaciones
                  personalizadas.
                </p>
              </div>
            </div>
          </GlowCard>
        </AnimateInView>
        <AnimateInView delay={0.2}>
          <GlowCard className="rounded-xl p-2 h-full">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <CreditCard className="h-12 w-12 text-[#9e48ec]" />
              <div className="space-y-2">
                <h3 className="font-bold text-white">Gestión Automática</h3>
                <p className="text-sm text-muted-foreground">
                  Categorización automática de gastos y seguimiento en tiempo
                  real.
                </p>
              </div>
            </div>
          </GlowCard>
        </AnimateInView>
        <AnimateInView delay={0.3}>
          <GlowCard className="rounded-xl p-2 h-full">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <PieChart className="h-12 w-12 text-[#9e48ec]" />
              <div className="space-y-2">
                <h3 className="font-bold text-white">Reportes Detallados</h3>
                <p className="text-sm text-muted-foreground">
                  Visualiza tus finanzas con gráficos interactivos y reportes
                  personalizados.
                </p>
              </div>
            </div>
          </GlowCard>
        </AnimateInView>
      </div>
    </section>
  );
}
