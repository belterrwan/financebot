'use client'
import { AnimateInView } from "@/components/globals/AnimateInView";
import { GlowCard } from "@/components/globals/GlowCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#9042d6]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <AnimateInView>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Planes y Precios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-3 items-center">
          <AnimateInView delay={0.1}>
            <GlowCard className="rounded-2xl p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plan Básico</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-white">Gratis</span>
                </div>
                <p className="text-muted-foreground">
                  Ideal para comenzar a gestionar tus finanzas personales.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento de hasta 2 cuentas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Categorización básica de gastos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reportes mensuales</span>
                </li>
              </ul>
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer border-[#9e48ec] text-[#9e48ec] bg-transparent hover:bg-[#9e48ec]/10 hover:text-white transition-colors"
              >
                Comenzar Gratis
              </Button>
            </GlowCard>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <GlowCard
                className="rounded-2xl p-8 flex flex-col h-full"
                glowColor="#9e48ec"
              >
                    <div className="absolute top-4 right-0 flex justify-center">
                      <span className="bg-[#9e48ec] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg shadow-[#9e48ec]/20">
                        Recomendado
                      </span>
                    </div>
                <div className="mb-6 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-white">Plan Premium</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-5xl font-bold text-white">$9.99</span>
                    <span className="text-muted-foreground ml-2">/mes</span>
                  </div>
                  <p className="text-muted-foreground">
                    Para usuarios que buscan un control financiero completo.
                  </p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow text-white">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seguimiento ilimitado de cuentas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Categorización avanzada con IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reportes personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Presupuestos inteligentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Alertas en tiempo real</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-[#9e48ec] hover:bg-[#9e48ec]/90 text-white shadow-lg shadow-[#9e48ec]/20 transition-all hover:shadow-xl hover:shadow-[#9e48ec]/30 py-6"
                >
                  Comenzar 7 días gratis
                </Button>
              </GlowCard>
            </motion.div>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <GlowCard className="rounded-2xl p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-white">Plan Empresarial</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-white">$29.99</span>
                  <span className="text-muted-foreground ml-2">/mes</span>
                </div>
                <p className="text-muted-foreground">
                  Solución completa para empresas y equipos.
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Todo lo del plan Premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Múltiples usuarios (hasta 10)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Roles y permisos personalizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integración con software contable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#9e48ec] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Soporte prioritario 24/7</span>
                </li>
              </ul>
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer border-[#9e48ec] text-[#9e48ec] bg-transparent hover:bg-[#9e48ec]/10 hover:text-white transition-colors"
              >
                Contactar Ventas
              </Button>
            </GlowCard>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
