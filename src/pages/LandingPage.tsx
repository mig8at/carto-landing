import React, { useRef } from 'react'; // Importar useRef
import { motion } from 'framer-motion';
import {
    MessageSquare, Map, ArrowRight,
    Check, ShoppingCart, BookOpen, Shield, Zap, Terminal,
    ChevronRight, Sparkles,
    Monitor, Apple, HardDrive, Download, Maximize // Añadir Maximize
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- COMPONENTES AUXILIARES ---

const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-[0.2em] border border-primary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        {children}
    </span>
);

const VideoPlayer = ({ src, className }: { src: string; className?: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if ((videoRef.current as any).webkitRequestFullscreen) {
                (videoRef.current as any).webkitRequestFullscreen();
            }
        }
    };

    return (
        <div className="relative group w-full flex justify-center">
            <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className={`${className} object-cover`}
            />
            <button
                onClick={toggleFullscreen}
                className="absolute bottom-4 right-4 p-2.5 bg-black/60 hover:bg-primary text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl"
            >
                <Maximize size={20} />
            </button>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, accent = false }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
      ${accent
                ? 'bg-primary/5 border-primary/30 hover:border-primary/60'
                : 'bg-card border-border hover:border-border/80'
            }`}
    >
        <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110
        ${accent ? 'bg-primary/20 text-primary' : 'bg-secondary text-primary'}`}
        >
            <Icon size={20} />
        </div>
        <h3 className="text-[1rem] font-bold mb-2 text-foreground font-serif">{title}</h3>
        <p className="text-[0.8rem] text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
);

const Step = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex gap-5"
    >
        <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black font-mono text-[0.8rem]">
            {n}
        </div>
        <div className="pt-1">
            <h4 className="text-[0.92rem] font-bold text-foreground mb-1 font-serif">{title}</h4>
            <p className="text-[0.78rem] text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const CartoLogo = ({ size = 'md' }: { size?: 'sm' | 'md' }) => {
    const iconSize = size === 'sm' ? 'w-6 h-6' : 'w-8 h-8';
    const textSize = size === 'sm' ? 'text-lg' : 'text-xl';
    const labelSize = size === 'sm' ? 'text-[0.5rem]' : 'text-xs';
    return (
        <div className={`flex items-center gap-2.5 font-black ${textSize} tracking-tighter`}>
            <img
                src="../assets/icon.png"
                alt="Carto"
                className={`${iconSize} object-contain`}
            />
            <span>CARTO</span>
            <span className={`text-primary ${labelSize}`}>LABS</span>
        </div>
    );
};

const DownloadCard = ({ os, icon: Icon, version, ext, link }: any) => (
    <div className="bg-card border border-border p-6 rounded-3xl flex flex-col items-center text-center group hover:border-primary/30 transition-all">
        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h4 className="font-bold text-foreground mb-1">{os}</h4>
        <p className="text-[0.65rem] text-muted-foreground uppercase tracking-widest mb-6">{version} • {ext}</p>

        <a
            href={link}
            download
            className="cursor-pointer w-full py-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl text-[0.75rem] font-black transition-all flex items-center justify-center gap-2"
        >
            <Download size={14} /> Download
        </a>
    </div>
);

export default function LandingPage() {
    return (
        <div className="overflow-x-hidden bg-background text-foreground min-h-screen font-sans">
            <div className="fixed inset-0 pointer-events-none dot-grid opacity-30" />

            <nav className="relative max-w-7xl mx-auto px-6 py-7 flex justify-between items-center z-10">
                <CartoLogo />
                <div className="hidden md:flex items-center gap-8 text-[0.82rem] font-semibold text-muted-foreground">
                    <a href="#features" className="hover:text-foreground transition-colors">Features</a>
                    <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
                    <a href="#download" className="hover:text-foreground transition-colors">Download</a>
                    <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
                </div>
                <a
                    href="#pricing"
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-[0.8rem] font-black hover:opacity-90 transition-all flex items-center gap-1.5"
                >
                    Get Access <ChevronRight size={14} />
                </a>
            </nav>

            <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 text-center z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <Badge>Now in Early Access</Badge>
                    <h1 className="text-[3.8rem] md:text-[5.5rem] font-black mt-8 mb-6 leading-[0.95] tracking-tighter font-serif italic">
                        Understand your <span className="text-primary">codebase</span>
                        <br />in minutes.
                    </h1>
                    <p className="text-[1rem] md:text-[1.1rem] text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                        Carto maps your architecture, visualises dependencies, and answers
                        technical questions using <strong className="text-foreground">local-first</strong> intelligence.
                        Your code never leaves your machine.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="#pricing"
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:scale-[1.03] transition-transform shadow-[0_16px_48px_-12px_rgba(242,233,210,0.25)] text-[0.9rem]"
                        >
                            Get Lifetime Access <ArrowRight size={18} />
                        </a>
                        <a
                            href="#download"
                            className="border border-border text-muted-foreground px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-secondary transition-colors text-[0.9rem]"
                        >
                            Download App
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="mt-20 relative w-full flex justify-center"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full scale-75 pointer-events-none" />
                    <VideoPlayer
                        src="../assets/chat.mp4"
                        className="w-full max-w-5xl h-auto border border-border shadow-2xl object-contain"
                    />
                </motion.div>
            </section>

            <div className="border-y border-border py-8 relative z-10 bg-background/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-center text-[0.65rem] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                        Works with every language and framework
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {['Rust', 'Go', 'TypeScript', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'Kotlin', 'Swift'].map(lang => (
                            <span key={lang} className="text-[0.8rem] font-black text-muted-foreground hover:text-foreground transition-colors font-mono">{lang}</span>
                        ))}
                    </div>
                </div>
            </div>

            <section id="features" className="relative max-w-7xl mx-auto px-6 py-32 z-10 space-y-32">
                <div className="text-center mb-16">
                    <Badge>Features</Badge>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-black mt-6 mb-4 tracking-tighter font-serif">
                        Everything you need to<br />
                        <span className="text-primary">own your codebase</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <Map size={24} />
                        </div>
                        <h3 className="text-3xl font-black mb-4 font-serif text-foreground">Interactive Architecture Mapping</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Stop guessing how your services connect. Carto automatically deduces logical domains (like "auth-service" or "database-layer") and generates a C4-level React Flow graph.
                        </p>
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Visualise cross-module dependencies instantly</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Zoom into specific files and routes</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Updates in real-time as you modify your code</li>
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <VideoPlayer
                            src="../assets/graph.mp4"
                            className="w-full h-auto border border-border shadow-xl object-contain"
                        />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1 flex justify-center"
                    >
                        <VideoPlayer
                            src="../assets/files.mp4"
                            className="w-full h-auto border border-border shadow-xl object-contain"
                        />
                    </motion.div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-3xl font-black mb-4 font-serif text-foreground">Context-Aware Expert Chat</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Ask complex questions about your logic. Unlike standard assistants, Carto knows your entire system architecture before answering, surgically selecting only the strictly relevant files to save tokens.
                        </p>
                        <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Reduces token consumption by up to 80%</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Clickable file references inside the chat</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Support for models like Gemini 2.5 Pro and Flash</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-16 border-t border-border">
                    <FeatureCard
                        icon={Zap}
                        title="Instant Indexing"
                        desc="Scans thousands of files in seconds. Incremental file-watching re-indexes changes instantly so you're always looking at the latest snapshot."
                        accent
                    />
                    <FeatureCard
                        icon={Terminal}
                        title="Debug Assistant"
                        desc="Full visibility into the pipeline. Generated by the local engine before it's sent to the LLM."
                    />
                    <FeatureCard
                        icon={BookOpen}
                        title="Executive Summary"
                        desc="Generates automated markdown documentation describing your project's architectural patterns and purpose. Perfect for onboarding."
                    />
                </div>
            </section>

            {/* ... Resto del código se mantiene igual ... */}
            <section id="how" className="relative max-w-6xl mx-auto px-6 py-24 z-10 bg-secondary/30 rounded-3xl border border-border">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Badge>How it works</Badge>
                            <h2 className="text-[2.2rem] font-black mt-6 mb-3 tracking-tighter font-serif">
                                From clone to<br />
                                <span className="text-primary">full understanding</span><br />
                                in 60 seconds.
                            </h2>
                            <p className="text-muted-foreground text-[0.88rem] leading-relaxed mb-10">
                                No configuration files required. No cloud setup. Just open a folder and let the engine work.
                            </p>
                        </motion.div>
                        <div className="space-y-7 relative">
                            <div className="absolute left-4 top-9 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent" />
                            <Step n="01" title="Open any repo" desc="Drag a folder or click 'New Project'. Carto discovers all sub-repos and monorepos automatically." />
                            <Step n="02" title="Local indexing runs" desc="Files, imports, routes, and definitions are extracted in seconds — all on your machine with no data leaving." />
                            <Step n="03" title="AI maps the architecture" desc="One AI call (with your own API key) deduces logical domains and data flows from the local index." />
                            <Step n="04" title="Ask anything" desc="Chat with your codebase, click through the architecture map, or read the AI-generated summary." />
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <img src="../assets/full.png" alt="full" />
                    </motion.div>
                </div>
            </section>

            <section id="download" className="relative max-w-5xl mx-auto px-6 py-32 z-10">
                <div className="text-center mb-16">
                    <Badge>Cross Platform</Badge>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-black mt-6 mb-4 tracking-tighter font-serif">
                        Ready for your <span className="text-primary">OS</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-[0.9rem]">
                        Download the desktop client. No complex installation, just run and start exploring.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <DownloadCard os="macOS" icon={Apple} version="v1.0.4" ext="DMG / Apple Silicon" link="#" />
                    <DownloadCard os="Windows" icon={Monitor} version="v1.0.4" ext="MSI / x64" link="#" />
                    <DownloadCard os="Linux" icon={HardDrive} version="v1.0.4" ext="AppImage / Deb" link="#" />
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-secondary/20 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Shield size={18} />
                        </div>
                        <div className="text-left">
                            <p className="text-[0.8rem] font-bold text-foreground">Signed & Secure</p>
                            <p className="text-[0.7rem] text-muted-foreground">Verified binaries. Your source code remains 100% private.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-center md:text-right">
                            <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted-foreground mb-1">Current Stable</p>
                            <p className="text-[0.8rem] font-mono font-bold text-primary">build_id: carto_v1.0.4_stable</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="relative max-w-2xl mx-auto px-6 py-32 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(242,233,210,0.25)]">
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}
                        />
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-widest mb-6">
                                <Sparkles size={10} /> Lifetime license
                            </span>
                            <h2 className="text-[2rem] md:text-[2.6rem] font-black mb-3 tracking-tighter font-serif">
                                Pay once, use forever.
                            </h2>
                            <p className="text-primary-foreground/70 mb-8 font-medium text-[0.88rem]">
                                Join 500+ developers shipping better code with Carto.
                            </p>
                            <div className="text-[5rem] md:text-[6rem] font-black leading-none mb-8 font-serif">
                                $49<span className="text-[1.4rem] opacity-40 ml-2">USD</span>
                            </div>
                            <ul className="text-left max-w-[220px] mx-auto space-y-3 mb-10 text-[0.88rem] font-bold">
                                {[
                                    'Lifetime Updates',
                                    'Use on 2 Devices',
                                    'All Languages',
                                    'Offline Indexing',
                                    'Priority Support',
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <Check size={16} className="text-primary-foreground/40 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://cartolabs.io/checkout"
                                className="block w-full bg-background text-foreground py-4 rounded-2xl font-black text-[1rem] hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <ShoppingCart size={20} /> Get License Key
                            </a>
                            <p className="mt-6 text-[0.72rem] opacity-50 font-black uppercase tracking-widest">
                                14-Day Money Back Guarantee
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <footer className="border-t border-border py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <CartoLogo size="sm" />
                    <div className="flex gap-8 text-[0.75rem] text-muted-foreground font-bold uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <a href="mailto:support@cartolabs.io" className="hover:text-foreground transition-colors">Contact</a>
                    </div>
                    <p className="text-muted-foreground text-[0.78rem] font-medium">
                        © 2024 CartoLabs. Made in Medellín 🇨🇴
                    </p>
                </div>
            </footer>
        </div>
    );
}