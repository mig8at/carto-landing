import { motion } from 'framer-motion';
import { Database, Zap, Shield, MessageSquare, Map, ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feature = ({ icon: Icon, title, desc }: any) => (
    <div className="p-6 bg-card border border-white/5 rounded-2xl">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default function LandingPage() {
    return (
        <div className="overflow-x-hidden">
            <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
                <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Database size={18} className="text-black" />
                    </div>
                    CARTO<span className="text-primary text-sm">LABS</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="mailto:hello@cartolabs.io" className="hover:text-white transition-colors">Support</a>
                </div>
                <a href="#pricing" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
                    Buy Now
                </a>
            </nav>

            <section className="max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">
                        Now in Early Access
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mt-8 mb-6 tracking-tighter leading-tight">
                        Understand your <span className="text-primary">codebase</span> in minutes.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Carto maps your architecture, visualizes dependencies, and answers technical questions instantly using local-first intelligence.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="#pricing" className="bg-primary text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                            Get Lifetime Access <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                <div className="mt-20 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                    <div className="relative bg-card border border-white/10 rounded-3xl p-2 shadow-2xl">
                        <div className="aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500 font-mono">[ Demo Video: Code Map in Action ]</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-8">
                <Feature
                    icon={Map}
                    title="Architecture Mapping"
                    desc="Automatic C4-level visualization of your domains, services, and data flows."
                />
                <Feature
                    icon={MessageSquare}
                    title="Expert AI Chat"
                    desc="Ask complex questions about your logic. Carto knows every file, import, and route."
                />
                <Feature
                    icon={Shield}
                    title="Local-First Privacy"
                    desc="Your code never leaves your machine. Indexing is 100% local in SQLite."
                />
            </section>

            <section id="pricing" className="max-w-3xl mx-auto px-6 py-32">
                <div className="bg-white text-black rounded-[40px] p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-4">Pay once, use forever.</h2>
                        <p className="text-gray-600 mb-8 font-medium">Join 500+ developers shipping better code with Carto.</p>
                        <div className="text-7xl font-black mb-8">$49<span className="text-xl text-gray-400">USD</span></div>
                        <ul className="text-left max-w-xs mx-auto space-y-4 mb-10">
                            <li className="flex items-center gap-3 font-bold"><Check size={20} className="text-emerald-500" /> Lifetime Updates</li>
                            <li className="flex items-center gap-3 font-bold"><Check size={20} className="text-emerald-500" /> Use on 2 Devices</li>
                            <li className="flex items-center gap-3 font-bold"><Check size={20} className="text-emerald-500" /> All Language Support</li>
                            <li className="flex items-center gap-3 font-bold"><Check size={20} className="text-emerald-500" /> Offline Indexing</li>
                        </ul>
                        <a href="https://tu-tienda.lemonsqueezy.com/checkout/carto" className="block w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
                            <ShoppingCart size={24} /> Get License Key
                        </a>
                        <p className="mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">14-Day Money Back Guarantee</p>
                    </div>
                </div>
            </section>

            <footer className="border-t border-white/5 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
                        CARTO<span className="text-primary text-xs">LABS</span>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-500 font-bold uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <a href="mailto:support@cartolabs.io" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">© 2024 CartoLabs. Made in Medellín, Colombia.</p>
                </div>
            </footer>
        </div>
    );
}