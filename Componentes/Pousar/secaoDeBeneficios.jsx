import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock, Eye, Target, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Retenção máxima",
    description:
      "Cortes dinâmicos, zooms estratégicos e transições que mantêm o público grudado até o final.",
  },
  {
    icon: TrendingUp,
    title: "Algoritmo a seu favor",
    description:
      "Edição otimizada para o que as plataformas querem: mais tempo de tela = mais alcance.",
  },
  {
    icon: Clock,
    title: "Economize horas",
    description:
      "Pare de gastar dias editando. Foque em criar conteúdo enquanto cuidamos do resto.",
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    description:
      "Vídeos prontos em até 48h. Seu calendário de posts nunca mais vai atrasar.",
  },
  {
    icon: Target,
    title: "Estilo único",
    description:
      "Desenvolvemos uma identidade visual exclusiva que faz seu perfil se destacar.",
  },
  {
    icon: Sparkles,
    title: "Tendências atuais",
    description:
      "Efeitos, memes e estilos que estão bombando. Sempre atualizado com o que funciona.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="font-medium text-sm uppercase tracking-wider"
            style={{ color: "#C9A24D" }}
          >
            Por que nos escolher
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-4 mb-6"
            style={{ color: "#0F0F0F" }}
          >
            Edição que realmente
            <span style={{ color: "#C9A24D" }}> funciona</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#B5B5B5" }}>
            Não é só sobre cortar vídeos. É sobre entender o que faz as pessoas
            pararem de rolar o feed e prestarem atenção em você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-3xl transition-all duration-500 border"
              style={{
                backgroundColor: "white",
                borderColor: "#E6C97A20",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A24D";
                e.currentTarget.style.backgroundColor = "#F5F5F5";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(201, 162, 77, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E6C97A20";
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: "#C9A24D",
                  boxShadow: "0 8px 20px rgba(201, 162, 77, 0.3)",
                }}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#0F0F0F" }}
              >
                {benefit.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "#B5B5B5" }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
