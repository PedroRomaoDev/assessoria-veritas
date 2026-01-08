import { motion } from "framer-motion";
import { Button } from "@/Componentes/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201, 162, 77, 0.3), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pronto para transformar
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #E6C97A, #C9A24D, #E6C97A)",
              }}
            >
              seus vídeos?
            </span>
          </h2>

          <p
            className="text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: "#B5B5B5" }}
          >
            Junte-se a mais de 500 criadores que já estão crescendo com edição
            profissional. Comece hoje com garantia de 7 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#C9A24D] hover:bg-[#E6C97A] text-white px-8 py-6 text-lg"
            >
              Começar agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white px-8 py-6 text-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm" style={{ color: "#B5B5B5" }}>
            ⚡ Vagas limitadas • 🎯 Comece em 24h • ✅ Sem fidelidade
          </p>
        </motion.div>
      </div>
    </section>
  );
}
