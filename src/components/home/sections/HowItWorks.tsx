import { AnimateInView } from "@/components/globals/AnimateInView";
import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-5 md:px-0">
        <AnimateInView>
          <div className="text-center mb-16">
          {/* <div className="absolute top-3/8 right-3/8 w-[100px] h-[100px] rounded-full bg-[#9042d6]/70 blur-[150px] pointer-events-none" /> */}

            <h2 className="text-4xl font-bold text-white mb-4">Cómo Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comienza a controlar tus finanzas en tres simples pasos
            </p>
          </div>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-3">
          <AnimateInView delay={0.1}>
            <div className="flex flex-col items-center text-center ">
              <div className="w-20 h-20 rounded-full bg-[#9e48ec]/10 flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-[#9e48ec]  z-10">
                  1
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">Conecta tus Cuentas</h3>
              <p className="text-muted-foreground">
                Vincula tus cuentas bancarias y tarjetas de crédito de forma
                segura para comenzar a rastrear tus finanzas.
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.2}>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#9e48ec]/10 flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-[#9e48ec]  z-10">
                  2
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">Análisis Automático</h3>
              <p className="text-muted-foreground">
                Nuestra IA analiza tus patrones de gasto y categoriza
                automáticamente tus transacciones.
              </p>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.3}>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#9e48ec]/10 flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-[#9e48ec] relative z-10">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimiza tus Finanzas</h3>
              <p className="text-muted-foreground">
                Recibe recomendaciones personalizadas y establece metas para
                mejorar tu salud financiera.
              </p>
            </div>
          </AnimateInView>
        </div>

        {/* <AnimateInView delay={0.4}>
          <div className="mt-16 text-center">
            <Button className="bg-[#9e48ec] hover:bg-[#9e48ec]/90 text-white shadow-lg shadow-[#9e48ec]/20 transition-all hover:shadow-xl hover:shadow-[#9e48ec]/30">
              Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimateInView> */}
      </div>
    </section>
  );
}
