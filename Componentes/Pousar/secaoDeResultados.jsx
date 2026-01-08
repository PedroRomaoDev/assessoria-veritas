import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, Heart } from 'lucide-react';

const results = [
    {
        name: "Lucas Silva",
        niche: "Fitness",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        before: "12K",
        after: "89K",
        metric: "seguidores em 3 meses"
    },
    {
        name: "Ana Costa",
        niche: "Lifestyle",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
        before: "5K",
        after: "45K",
        metric: "seguidores em 2 meses"
    },
    {
        name: "Pedro Mendes",
        niche: "Tech",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        before: "800",
        after: "25K",
        metric: "seguidores em 4 meses"
    }
];

export default function ResultsSection() {
    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
            {/* Background elements */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at top, rgba(201, 162, 77, 0.15), transparent)' }} />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="font-medium text-sm uppercase tracking-wider" style={{ color: '#E6C97A' }}>
                        Resultados reais
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Eles cresceram.
                        <span style={{ color: '#E6C97A' }}> Você também pode.</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B5B5B5' }}>
                        Veja alguns dos criadores que transformaram seus perfis 
                        com nossa edição profissional.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: 'linear-gradient(to right, #C9A24D, #E6C97A)' }} />
                            <div className="relative rounded-3xl p-8 transition-all duration-300" style={{ backgroundColor: '#0F0F0F', border: '1px solid #E6C97A30' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#C9A24D'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E6C97A30'}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img 
                                        src={result.image} 
                                        alt={result.name}
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30"
                                    />
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">{result.name}</h3>
                                        <p className="text-gray-500 text-sm">{result.niche}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-center">
                                        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#B5B5B5' }}>Antes</p>
                                        <p className="text-2xl font-bold" style={{ color: '#B5B5B5' }}>{result.before}</p>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="h-0.5 rounded-full" style={{ backgroundImage: 'linear-gradient(to right, #333, #C9A24D, #E6C97A)' }} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#E6C97A' }}>Depois</p>
                                        <p className="text-2xl font-bold" style={{ color: '#E6C97A' }}>{result.after}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm" style={{ color: '#E6C97A' }}>
                                    <TrendingUp className="w-4 h-4" />
                                    <span>{result.metric}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Big stats */}
                <motion.div 
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {[
                        { icon: Users, value: "500+", label: "Criadores" },
                        { icon: Eye, value: "50M+", label: "Visualizações" },
                        { icon: Heart, value: "98%", label: "Satisfação" },
                        { icon: TrendingUp, value: "3x", label: "Crescimento médio" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#E6C97A' }} />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm" style={{ color: '#B5B5B5' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}