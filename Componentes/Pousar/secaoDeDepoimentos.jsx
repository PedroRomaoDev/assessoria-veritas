import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Mariana Santos",
        role: "Criadora de conteúdo fitness",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        text: "Meus vídeos antes pareciam amadores. Agora recebo mensagens perguntando qual editor eu uso. Meu engajamento triplicou em 2 meses!",
        rating: 5
    },
    {
        name: "Rafael Oliveira",
        role: "Youtuber de games",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        text: "Eu gastava 6 horas editando cada vídeo. Agora só gravo e envio. A qualidade é muito melhor do que eu conseguia fazer sozinho.",
        rating: 5
    },
    {
        name: "Juliana Costa",
        role: "Coach de carreira",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
        text: "Profissionalismo incrível. Eles entendem exatamente o que funciona pra redes sociais. Recomendo de olhos fechados!",
        rating: 5
    },
    {
        name: "Thiago Mendes",
        role: "Empreendedor digital",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
        text: "O investimento se pagou no primeiro mês. Mais views = mais vendas. Simples assim.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="font-medium text-sm uppercase tracking-wider" style={{ color: '#C9A24D' }}>
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6" style={{ color: '#0F0F0F' }}>
                        O que nossos clientes
                        <span style={{ color: '#C9A24D' }}> dizem</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 rounded-3xl border transition-all duration-500"
                            style={{ 
                                backgroundColor: 'white',
                                borderColor: '#C9A24D30'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(201, 162, 77, 0.15)';
                                e.currentTarget.style.borderColor = '#C9A24D';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#C9A24D30';
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10" style={{ color: '#E6C97A40' }} />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            
                            <p className="text-lg leading-relaxed mb-6" style={{ color: '#0F0F0F' }}>
                                "{testimonial.text}"
                            </p>
                            
                            <div className="flex items-center gap-4">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                    style={{ ring: '2px', ringColor: '#C9A24D' }}
                                />
                                <div>
                                    <h4 className="font-semibold" style={{ color: '#0F0F0F' }}>{testimonial.name}</h4>
                                    <p className="text-sm" style={{ color: '#B5B5B5' }}>{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}