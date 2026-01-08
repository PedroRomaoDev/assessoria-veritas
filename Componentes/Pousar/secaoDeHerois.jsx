import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/Componentes/ui/button";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToPrice = () => {
    document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #0F0F0F, rgba(201, 162, 77, 0.1), #0F0F0F)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(201, 162, 77, 0.15)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(230, 201, 122, 0.12)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-8"
            style={{
              backgroundColor: "rgba(201, 162, 77, 0.1)",
              borderColor: "rgba(230, 201, 122, 0.3)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#E6C97A" }} />
            <span className="text-sm text-gray-300">
              +500 criadores já cresceram conosco
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Transforme seus vídeos em
            <span
              className="block mt-2 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #E6C97A, #C9A24D, #E6C97A)",
              }}
            >
              máquinas de seguidores
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Edição profissional que prende atenção, gera engajamento e faz seu
            perfil explodir de visualizações. Sem você precisar aprender
            softwares complicados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToPrice}
              size="lg"
              className="group text-black px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 font-semibold"
              style={{
                backgroundImage: "linear-gradient(to right, #C9A24D, #E6C97A)",
                boxShadow: "0 10px 30px rgba(201, 162, 77, 0.3)",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "0 15px 40px rgba(230, 201, 122, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow =
                  "0 10px 30px rgba(201, 162, 77, 0.3)")
              }
            >
              Quero crescer agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-6 text-lg rounded-full transition-all border"
              style={{
                color: "#E6C97A",
                borderColor: "rgba(230, 201, 122, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(201, 162, 77, 0.1)";
                e.target.style.borderColor = "rgba(230, 201, 122, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "rgba(230, 201, 122, 0.3)";
              }}
            >
              <Play className="mr-2 w-5 h-5" />
              Ver exemplos
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "50M+", label: "Views geradas" },
            { number: "500+", label: "Criadores atendidos" },
            { number: "3x", label: "Mais engajamento" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #F5F5F5, #E6C97A)",
                }}
              >
                {stat.number}
              </div>
              <div className="text-sm mt-1" style={{ color: "#B5B5B5" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
