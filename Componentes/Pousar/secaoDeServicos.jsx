import React from 'react';
import { motion } from 'framer-motion';
import { Check, Video, Scissors, Music, Type, Wand2, Palette } from 'lucide-react';

const services = [
    {
        icon: Scissors,
        title: "Cortes estratégicos",
        description: "Eliminamos partes chatas e mantemos só o que prende atenção"
    },
    {
        icon: Type,
        title: "Legendas animadas",
        description: "Textos dinâmicos que destacam o que importa"
    },
    {
        icon: Music,
        title: "Trilha sonora",
        description: "Músicas e efeitos que combinam com seu conteúdo"
    },
    {
        icon: Wand2,
        title: "Efeitos virais",
        description: "Zooms, transições e memes do momento"
    },
    {
        icon: Palette,
        title: "Color grading",
        description: "Cores cinematográficas que elevam a qualidade"
    },
    {
        icon: Video,
        title: "Formatos otimizados",
        description: "Reels, TikTok, Shorts - tudo nos tamanhos certos"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24" style={{ backgroundColor: '#0F0F0F' }}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="font-medium text-sm uppercase tracking-wider" style={{ color: '#E6C97A' }}>
                        O que está incluído
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Tudo que seu vídeo
                        <span style={{ color: '#E6C97A' }}> precisa</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B5B5B5' }}>
                        Uma edição completa e profissional que transforma seu conteúdo bruto 
                        em vídeos prontos para viralizar.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 border"
                            style={{ 
                                backgroundColor: '#1E1E1E',
                                borderColor: '#C9A24D30'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#C9A24D';
                                e.currentTarget.style.backgroundColor = '#1E1E1E';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201, 162, 77, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#C9A24D30';
                                e.currentTarget.style.backgroundColor = '#1E1E1E';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C9A24D' }}>
                                <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm" style={{ color: '#B5B5B5' }}>
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process */}
                <motion.div 
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-center text-white mb-12">
                        Como funciona?
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Envie seu vídeo", desc: "Mande o arquivo bruto pelo WhatsApp ou Drive" },
                            { step: "02", title: "Conte sua ideia", desc: "Diga o estilo que quer e referências" },
                            { step: "03", title: "Editamos", desc: "Nossa equipe trabalha na mágica" },
                            { step: "04", title: "Receba e poste", desc: "Vídeo pronto em até 48h" }
                        ].map((item, i) => (
                            <div key={i} className="relative text-center">
                                <div className="text-6xl font-bold mb-4" style={{ color: '#C9A24D40' }}>{item.step}</div>
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-sm" style={{ color: '#B5B5B5' }}>{item.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5" style={{ backgroundImage: 'linear-gradient(to right, #C9A24D, transparent)' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}