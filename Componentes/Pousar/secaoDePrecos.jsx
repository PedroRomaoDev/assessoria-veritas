import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Componentes/ui/button";
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        icon: Zap,
        price: "297",
        period: "/mês",
        description: "Ideal para quem está começando",
        videos: "4 vídeos/mês",
        features: [
            "Cortes e transições básicas",
            "Legendas simples",
            "1 revisão por vídeo",
            "Entrega em 72h",
            "Suporte por WhatsApp"
        ],
        popular: false,
        cta: "Começar agora"
    },
    {
        name: "Pro",
        icon: Crown,
        price: "597",
        period: "/mês",
        description: "Para criadores em crescimento",
        videos: "8 vídeos/mês",
        features: [
            "Tudo do Starter +",
            "Efeitos premium e zooms",
            "Legendas animadas",
            "Trilha sonora personalizada",
            "2 revisões por vídeo",
            "Entrega em 48h",
            "Consultoria mensal"
        ],
        popular: true,
        cta: "Escolher Pro"
    },
    {
        name: "Scale",
        icon: Rocket,
        price: "997",
        period: "/mês",
        description: "Para quem quer dominar",
        videos: "16 vídeos/mês",
        features: [
            "Tudo do Pro +",
            "Prioridade máxima",
            "Revisões ilimitadas",
            "Entrega em 24h",
            "Identidade visual exclusiva",
            "Editor dedicado",
            "Estratégia de conteúdo"
        ],
        popular: false,
        cta: "Quero escalar"
    }
];

export default function PricingSection() {
    return (
        <section id="precos" className="py-24" style={{ backgroundColor: '#0F0F0F' }}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="font-medium text-sm uppercase tracking-wider" style={{ color: '#E6C97A' }}>
                        Planos e preços
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Escolha seu caminho para
                        <span style={{ color: '#E6C97A' }}> crescer</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B5B5B5' }}>
                        Planos flexíveis que se adaptam ao seu momento. 
                        Cancele quando quiser, sem burocracia.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${
                                plan.popular ? 'scale-105' : ''
                            }`}
                            style={{
                                backgroundColor: plan.popular ? '#C9A24D' : '#1E1E1E',
                                color: plan.popular ? 'black' : 'white',
                                border: plan.popular ? 'none' : '1px solid #C9A24D30',
                                boxShadow: plan.popular ? '0 20px 40px rgba(201, 162, 77, 0.4)' : 'none'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-sm font-semibold rounded-full">
                                    Mais popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                                style={{ backgroundColor: plan.popular ? 'rgba(255,255,255,0.2)' : '#C9A24D' }}>
                                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-black' : 'text-white'}`} />
                            </div>

                            <h3 className={`text-2xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mt-1 mb-4 ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                                {plan.description}
                            </p>

                            <div className="flex items-baseline gap-1 mb-2">
                                <span className={`text-sm ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>R$</span>
                                <span className={`text-5xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <p className={`text-sm mb-6 ${plan.popular ? 'text-black/80' : 'text-gray-400'}`}>
                                {plan.videos}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-[#C9A24D]'}`} />
                                        <span className={`text-sm ${plan.popular ? 'text-black/90' : 'text-gray-300'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                className={`w-full ${
                                    plan.popular 
                                        ? 'bg-black text-white hover:bg-black/90' 
                                        : 'bg-[#C9A24D] text-white hover:bg-[#E6C97A]'
                                }`}
                                size="lg"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-12 text-sm" style={{ color: '#B5B5B5' }}>
                    💳 Pagamento seguro via cartão de crédito ou PIX • ✅ Garantia de 7 dias
                </p>
            </div>
        </section>
    );
}
