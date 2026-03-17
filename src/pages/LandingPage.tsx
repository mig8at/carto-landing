import { motion, useInView } from 'framer-motion';
import {
    Database, MessageSquare, Map, ArrowRight,
    Check, ShoppingCart, Hash, MessageSquareText, FileCode2,
    BrainCircuit, Activity, BookOpen, Shield, Zap, Terminal,
    ChevronRight, Sparkles, Code2, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

/* ─── Small reusable atoms ─────────────────────────────────────── */

const Badge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-[0.2em] border border-primary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        {children}
    </span>
);

const FeatureCard = ({ icon: Icon, title, desc, accent = false }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
      ${accent
                ? 'bg-primary/5 border-primary/30 hover:border-primary/60'
                : 'bg-[#1c1c1c] border-white/5 hover:border-white/15'
            }`}
    >
        <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110
        ${accent ? 'bg-primary/20 text-primary' : 'bg-white/5 text-primary'}`}
        >
            <Icon size={20} />
        </div>
        <h3 className="text-[1rem] font-bold mb-2 text-white font-serif">{title}</h3>
        <p className="text-[0.8rem] text-white/40 leading-relaxed">{desc}</p>
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
            <h4 className="text-[0.92rem] font-bold text-white mb-1 font-serif">{title}</h4>
            <p className="text-[0.78rem] text-white/40 leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

/* ─── Main app mockup ─────────────────────────────────────────── */

const AppMockup = () => (
    <div className="w-full bg-[#111] rounded-2xl border border-white/8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col text-left">

        {/* Window chrome – header bar in primary colour (matches real app) */}
        <div className="h-9 bg-[#f2e9d2] flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-[#131313]/20 flex items-center justify-center">
                    <Database size={11} className="text-[#131313]" />
                </div>
                <span className="text-[0.6rem] font-black tracking-[0.2em] uppercase text-[#131313]/70">Carto</span>
                <span className="ml-2 px-1.5 py-0.5 bg-black/10 rounded text-[9px] font-mono text-[#131313]/50">api-core</span>
            </div>
            <div className="flex items-center gap-1">
                <div className="w-7 h-7 flex items-center justify-center hover:bg-black/5 rounded">
                    <div className="w-3 h-[1.5px] bg-[#131313]/50" />
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:bg-black/5 rounded">
                    <div className="w-2.5 h-2.5 border border-[#131313]/50 rounded-sm" />
                </div>
                <div className="w-7 h-7 flex items-center justify-center hover:bg-red-500/10 rounded">
                    <span className="text-[#131313]/50 text-xs leading-none">✕</span>
                </div>
            </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden" style={{ height: '520px' }}>

            {/* Sidebar */}
            <aside className="w-52 bg-[#171717] border-r border-white/5 flex flex-col shrink-0">
                <div className="px-4 pt-4 pb-3">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-7 h-7 rounded-lg bg-[#f2e9d2] flex items-center justify-center">
                            <Database size={13} className="text-[#131313]" />
                        </div>
                        <div>
                            <div className="font-black text-[0.72rem] tracking-[0.15em] font-mono text-white">CARTO</div>
                            <div className="text-[0.55rem] text-white/30 uppercase tracking-widest">Explorer</div>
                        </div>
                    </div>

                    <p className="text-[0.55rem] font-bold text-white/25 uppercase tracking-widest px-1 mb-2">Proyectos</p>
                    <div className="space-y-0.5 mb-5">
                        <div className="bg-[#f2e9d2]/10 border border-[#f2e9d2]/20 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f2e9d2]" />
                            <span className="text-[0.7rem] text-white font-semibold truncate">api-core</span>
                        </div>
                        <div className="rounded-lg px-2.5 py-1.5 flex items-center gap-2 hover:bg-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            <span className="text-[0.7rem] text-white/40 truncate">carto-ui</span>
                        </div>
                    </div>

                    <p className="text-[0.55rem] font-bold text-white/25 uppercase tracking-widest px-1 mb-2">Vistas</p>
                    <div className="space-y-0.5">
                        {[
                            { icon: Activity, label: 'Estado Análisis', active: false },
                            { icon: MessageSquare, label: 'Chat Experto', active: true },
                            { icon: Map, label: 'Arquitectura', active: false },
                            { icon: BookOpen, label: 'Resumen IA', active: false },
                        ].map(({ icon: Icon, label, active }) => (
                            <div
                                key={label}
                                className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[0.7rem] relative
                  ${active ? 'bg-[#f2e9d2]/10 text-white' : 'text-white/30'}`}
                            >
                                {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-[#f2e9d2] rounded-r-full" />}
                                <Icon size={13} className={active ? 'text-[#f2e9d2]' : ''} />
                                <span className="font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto p-3 border-t border-white/5">
                    <div className="w-full py-2 bg-[#f2e9d2] text-[#131313] font-bold rounded-xl flex items-center justify-center gap-2 text-[0.7rem]">
                        + Nuevo Proyecto
                    </div>
                </div>
            </aside>

            {/* Chat area */}
            <main className="flex-1 flex flex-col bg-[#0f0f0f] min-w-0">

                {/* Conversation tabs */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] border-b border-white/5 shrink-0">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f2e9d2]/10 border border-[#f2e9d2]/20 text-[#f2e9d2]">
                        <Hash size={11} />
                        <span className="text-[0.65rem] font-bold uppercase">Conversación 1</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white/25 text-[0.65rem]">
                        <Hash size={11} /><span className="font-bold uppercase">Conversación 2</span>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-hidden p-5 space-y-5">

                    {/* User message */}
                    <div className="rounded-xl border border-white/8 overflow-hidden">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-white/4 border-b border-white/5">
                            <div className="w-6 h-6 rounded-lg bg-white text-[#131313] flex items-center justify-center">
                                <span className="text-[0.6rem] font-black">U</span>
                            </div>
                            <span className="text-[0.6rem] font-black uppercase tracking-widest text-white/40">Usuario</span>
                        </div>
                        <div className="px-4 py-3 text-[0.82rem] text-white/80">
                            ¿Cómo funciona la autenticación en este repo?
                        </div>
                    </div>

                    {/* AI message */}
                    <div className="rounded-xl border border-[#f2e9d2]/15 overflow-hidden">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-[#f2e9d2]/5 border-b border-[#f2e9d2]/10">
                            <div className="w-6 h-6 rounded-lg bg-[#f2e9d2] text-[#131313] flex items-center justify-center">
                                <span className="text-[0.6rem] font-black">C</span>
                            </div>
                            <span className="text-[0.6rem] font-black uppercase tracking-widest text-[#f2e9d2]/60">Carto AI</span>
                        </div>
                        <div className="px-4 py-3 space-y-2.5">
                            <p className="text-[0.82rem] text-white/75 leading-relaxed">
                                Basado en{' '}
                                <code className="text-[#f2e9d2] bg-[#f2e9d2]/10 px-1 rounded text-[0.75rem]">auth_middleware.go</code>
                                {' '}y{' '}
                                <code className="text-[#f2e9d2] bg-[#f2e9d2]/10 px-1 rounded text-[0.75rem]">user_service.rs</code>,
                                el sistema usa JWT con validación stateless:
                            </p>
                            <div className="bg-[#141414] border border-white/8 rounded-lg p-3 font-mono text-[0.72rem]">
                                <div className="flex gap-1.5 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                                </div>
                                <div className="text-blue-400">fn </div>
                                <div className="-mt-[1.1rem] ml-8 text-yellow-300">validate_session</div>
                                <div className="-mt-[1.1rem] ml-[10rem] text-white/50">(token: </div>
                                <div className="-mt-[1.1rem] ml-[13.5rem] text-green-400">String</div>
                                <div className="-mt-[1.1rem] ml-[16.5rem] text-white/50">) {'{'}</div>
                                <div className="ml-4 text-white/30">// Verifica firma + expiración...</div>
                                <div className="text-white/50">{'}'}</div>
                            </div>
                            <p className="text-[0.75rem] text-white/50 leading-relaxed">
                                Los tokens se firman con <code className="text-[#f2e9d2]/70 bg-[#f2e9d2]/5 px-1 rounded">RS256</code> y expiran en 24h.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="p-4 shrink-0 bg-gradient-to-t from-[#0f0f0f] to-transparent">
                    <div className="flex items-center gap-2 bg-[#1a1a1a] border border-white/8 rounded-xl px-4 py-2.5">
                        <MessageSquareText size={15} className="text-white/25 shrink-0" />
                        <span className="flex-1 text-[0.82rem] text-white/25">Haz una pregunta técnica...</span>
                        <div className="w-7 h-7 bg-[#f2e9d2] rounded-lg flex items-center justify-center">
                            <ArrowRight size={14} className="text-[#131313]" strokeWidth={3} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Context panel */}
            <aside className="w-60 bg-[#161616] border-l border-white/5 p-4 hidden lg:block shrink-0">
                <p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/25 mb-4">Contexto Detectado</p>

                <div className="space-y-3">
                    <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-2">
                            <FileCode2 size={11} className="text-white/30" />
                            <span className="text-[0.6rem] font-bold text-white/30 uppercase tracking-wider">Archivos</span>
                        </div>
                        {['/src/auth/jwt.rs', '/src/models/user.rs', '/middleware/auth.go'].map(f => (
                            <div key={f} className="text-[0.6rem] font-mono text-[#f2e9d2]/50 truncate leading-relaxed">{f}</div>
                        ))}
                    </div>

                    <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-2">
                            <BrainCircuit size={11} className="text-white/30" />
                            <span className="text-[0.6rem] font-bold text-white/30 uppercase tracking-wider">Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {['RUST', 'GO', 'POSTGRES', 'JWT'].map(t => (
                                <span key={t} className="text-[0.55rem] bg-[#f2e9d2]/10 text-[#f2e9d2]/70 px-1.5 py-0.5 rounded border border-[#f2e9d2]/10 font-black">{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/3 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-1.5 mb-2">
                            <Activity size={11} className="text-white/30" />
                            <span className="text-[0.6rem] font-bold text-white/30 uppercase tracking-wider">Cobertura</span>
                        </div>
                        <div className="flex items-end gap-1 h-10">
                            {[40, 65, 55, 80, 90, 70, 85].map((h, i) => (
                                <div
                                    key={i}
                                    className="flex-1 rounded-sm bg-[#f2e9d2]/30"
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
);

/* ─── Landing page ────────────────────────────────────────────── */

export default function LandingPage() {
    const featuresRef = useRef(null);

    return (
        <div className="overflow-x-hidden bg-[#131313] text-white min-h-screen" style={{ fontFamily: "'Manrope', sans-serif" }}>

            {/* dot-grid background overlay */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(242,233,210,0.04) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* ── Nav ──────────────────────────────────────────────────── */}
            <nav className="relative max-w-7xl mx-auto px-6 py-7 flex justify-between items-center z-10">
                <div className="flex items-center gap-2.5 font-black text-xl tracking-tighter">
                    <div className="w-8 h-8 bg-[#f2e9d2] rounded-lg flex items-center justify-center">
                        <Database size={16} className="text-[#131313]" />
                    </div>
                    <span>CARTO</span><span className="text-[#f2e9d2] text-xs">LABS</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-[0.82rem] font-semibold text-white/40">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#how" className="hover:text-white transition-colors">How it works</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="mailto:hello@cartolabs.io" className="hover:text-white transition-colors">Support</a>
                </div>

                <a
                    href="#pricing"
                    className="bg-[#f2e9d2] text-[#131313] px-5 py-2 rounded-full text-[0.8rem] font-black hover:opacity-90 transition-all flex items-center gap-1.5"
                >
                    Get Access <ChevronRight size={14} />
                </a>
            </nav>

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 text-center z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <Badge>Now in Early Access</Badge>

                    <h1
                        className="text-[3.8rem] md:text-[5.5rem] font-black mt-8 mb-6 leading-[0.95] tracking-tighter"
                        style={{ fontFamily: "'Bricolage Grotesque', serif", fontStyle: 'italic' }}
                    >
                        Understand your{' '}
                        <span className="text-[#f2e9d2]">codebase</span>
                        <br />in minutes.
                    </h1>

                    <p className="text-[1rem] md:text-[1.1rem] text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                        Carto maps your architecture, visualises dependencies, and answers
                        technical questions using <strong className="text-white/60">local-first</strong> intelligence.
                        Your code never leaves your machine.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="#pricing"
                            className="bg-[#f2e9d2] text-[#131313] px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:scale-[1.03] transition-transform shadow-[0_16px_48px_-12px_rgba(242,233,210,0.25)] text-[0.9rem]"
                        >
                            Get Lifetime Access <ArrowRight size={18} />
                        </a>
                        <a
                            href="#how"
                            className="border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-colors text-[0.9rem]"
                        >
                            See how it works
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center mt-8">
                        {['500+ developers', '100% local indexing', '14-day guarantee', 'Lifetime updates'].map(t => (
                            <span key={t} className="text-[0.75rem] text-white/30 font-medium flex items-center gap-1.5">
                                <Check size={12} className="text-[#f2e9d2]/60" /> {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* App preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="mt-20 relative px-2"
                >
                    <div className="absolute inset-0 bg-[#f2e9d2]/3 blur-[100px] rounded-full scale-75" />
                    <AppMockup />
                </motion.div>
            </section>

            {/* ── Tech logos strip ─────────────────────────────────────── */}
            <div className="border-y border-white/5 py-8 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-center text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/20 mb-6">
                        Works with every language and framework
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {['Rust', 'Go', 'TypeScript', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'Kotlin', 'Swift'].map(lang => (
                            <span key={lang} className="text-[0.8rem] font-black text-white/20 hover:text-white/50 transition-colors font-mono">{lang}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Features ─────────────────────────────────────────────── */}
            <section id="features" ref={featuresRef} className="relative max-w-7xl mx-auto px-6 py-32 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge>Features</Badge>
                    <h2
                        className="text-[2.2rem] md:text-[3rem] font-black mt-6 mb-4 tracking-tighter"
                        style={{ fontFamily: "'Bricolage Grotesque', serif" }}
                    >
                        Everything you need to<br />
                        <span className="text-[#f2e9d2]">own your codebase</span>
                    </h2>
                    <p className="text-white/35 max-w-md mx-auto text-[0.9rem] leading-relaxed">
                        Stop context-switching to documentation. Ask questions, get instant answers with file-level references.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4">
                    <FeatureCard
                        icon={Map}
                        title="Architecture Mapping"
                        desc="Automatic C4-level visualisation of domains, services, and data flows. See your system as a whole, not file by file."
                        accent
                    />
                    <FeatureCard
                        icon={MessageSquare}
                        title="Expert AI Chat"
                        desc="Ask complex questions about your logic. Carto knows every file, import, and route — and cites its sources."
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Local-First Privacy"
                        desc="Your code never leaves your machine. Indexing runs 100% locally in SQLite. AI calls are optional and opt-in."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Instant Indexing"
                        desc="Scans thousands of files in seconds. Incremental re-indexing means you're always looking at the latest snapshot."
                    />
                    <FeatureCard
                        icon={Terminal}
                        title="Debug Assistant"
                        desc="Pipeline logs, system traces, and AI payload inspection — full visibility into every step of the analysis."
                    />
                    <FeatureCard
                        icon={BookOpen}
                        title="Executive Summary"
                        desc="AI-generated onboarding docs that describe the project in plain English. Perfect for new team members."
                    />
                </div>
            </section>

            {/* ── How it works ─────────────────────────────────────────── */}
            <section id="how" className="relative max-w-6xl mx-auto px-6 py-24 z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: steps */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Badge>How it works</Badge>
                            <h2
                                className="text-[2.2rem] font-black mt-6 mb-3 tracking-tighter"
                                style={{ fontFamily: "'Bricolage Grotesque', serif" }}
                            >
                                From clone to<br />
                                <span className="text-[#f2e9d2]">full understanding</span><br />
                                in 60 seconds.
                            </h2>
                            <p className="text-white/35 text-[0.88rem] leading-relaxed mb-10">
                                No configuration files. No cloud setup. Just open a folder.
                            </p>
                        </motion.div>

                        <div className="space-y-7 relative">
                            <div className="absolute left-4 top-9 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
                            <Step n="01" title="Open any repo" desc="Drag a folder or click 'New Project'. Carto discovers all sub-repos and monorepos automatically." />
                            <Step n="02" title="Local indexing runs" desc="Files, imports, routes, and definitions are extracted in seconds — all on your machine with no data leaving." />
                            <Step n="03" title="AI maps the architecture" desc="One AI call (with your own API key) deduces logical domains and data flows from the local index." />
                            <Step n="04" title="Ask anything" desc="Chat with your codebase, click through the architecture map, or read the AI-generated summary." />
                        </div>
                    </div>

                    {/* Right: mini diagram panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-[#161616] border border-white/8 rounded-2xl p-6 space-y-4">

                            {/* Fake progress steps */}
                            {[
                                { label: 'Indexación', done: true },
                                { label: 'Análisis Estructural', done: true },
                                { label: 'Mapa de Dependencias', done: true },
                                { label: 'Mapeo de Rutas', done: true },
                                { label: 'Arquitectura (IA)', done: true },
                                { label: 'Resumen Ejecutivo (IA)', done: false, running: true },
                            ].map(({ label, done, running }, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border
                    ${done ? 'bg-[#f2e9d2] border-[#f2e9d2]' : running ? 'border-[#f2e9d2] bg-transparent animate-pulse' : 'border-white/15 bg-transparent'}`}
                                    >
                                        {done && <Check size={11} className="text-[#131313]" strokeWidth={3} />}
                                        {running && <div className="w-2 h-2 rounded-full bg-[#f2e9d2]/60" />}
                                    </div>
                                    <span className={`text-[0.78rem] font-medium ${done ? 'text-white/70' : running ? 'text-[#f2e9d2]' : 'text-white/20'}`}>
                                        {label}
                                    </span>
                                    {done && (
                                        <span className="ml-auto text-[0.6rem] text-white/20 font-mono">done</span>
                                    )}
                                    {running && (
                                        <span className="ml-auto text-[0.6rem] text-[#f2e9d2]/60 font-mono animate-pulse">running…</span>
                                    )}
                                </div>
                            ))}

                            <div className="mt-4 pt-4 border-t border-white/5">
                                <div className="flex items-center justify-between text-[0.72rem] text-white/30 mb-2">
                                    <span>Archivos analizados</span>
                                    <span className="font-mono text-[#f2e9d2]/60">2 847</span>
                                </div>
                                <div className="flex items-center justify-between text-[0.72rem] text-white/30">
                                    <span>Tokens utilizados</span>
                                    <span className="font-mono text-[#f2e9d2]/60">48 920</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating code snippet */}
                        <div className="absolute -right-6 -bottom-6 bg-[#1a1a1a] border border-white/8 rounded-xl p-3 shadow-2xl hidden lg:block">
                            <div className="flex items-center gap-1.5 mb-2">
                                <Code2 size={11} className="text-[#f2e9d2]/50" />
                                <span className="text-[0.55rem] font-black uppercase tracking-widest text-white/25">f_0042</span>
                            </div>
                            <code className="text-[0.65rem] font-mono text-[#f2e9d2]/60 leading-relaxed block">
                                /src/auth/jwt.rs<br />
                                <span className="text-white/25">validate_session()</span>
                            </code>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Pricing ──────────────────────────────────────────────── */}
            <section id="pricing" className="relative max-w-2xl mx-auto px-6 py-32 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-[#f2e9d2] text-[#131313] rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(242,233,210,0.2)]">

                        {/* Subtle dot pattern on card */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}
                        />

                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-1.5 bg-black/8 px-3 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-widest mb-6">
                                <Sparkles size={10} /> Lifetime license
                            </span>

                            <h2
                                className="text-[2rem] md:text-[2.6rem] font-black mb-3 tracking-tighter"
                                style={{ fontFamily: "'Bricolage Grotesque', serif" }}
                            >
                                Pay once, use forever.
                            </h2>
                            <p className="text-[#131313]/55 mb-8 font-medium text-[0.88rem]">
                                Join 500+ developers shipping better code with Carto.
                            </p>

                            <div className="text-[5rem] md:text-[6rem] font-black leading-none mb-8" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                                $49<span className="text-[1.4rem] opacity-35 ml-2">USD</span>
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
                                        <Check size={16} className="text-[#131313]/35 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://tu-tienda.lemonsqueezy.com/checkout/carto"
                                className="block w-full bg-[#131313] text-[#f2e9d2] py-4 rounded-2xl font-black text-[1rem] hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <ShoppingCart size={20} /> Get License Key
                            </a>

                            <p className="mt-6 text-[0.72rem] opacity-35 font-black uppercase tracking-widest">
                                14-Day Money Back Guarantee
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── Footer ───────────────────────────────────────────────── */}
            <footer className="border-t border-white/5 py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 font-black text-lg tracking-tighter">
                        <div className="w-6 h-6 bg-[#f2e9d2] rounded-md flex items-center justify-center">
                            <Database size={12} className="text-[#131313]" />
                        </div>
                        CARTO<span className="text-[#f2e9d2] text-[0.6rem]">LABS</span>
                    </div>

                    <div className="flex gap-8 text-[0.75rem] text-white/30 font-bold uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <a href="mailto:support@cartolabs.io" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <p className="text-white/20 text-[0.78rem] font-medium">
                        © 2024 CartoLabs. Made in Medellín 🇨🇴
                    </p>
                </div>
            </footer>
        </div>
    );
}