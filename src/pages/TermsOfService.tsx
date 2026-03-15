export default function TermsOfService() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 leading-relaxed">
            <h1 className="text-4xl font-black mb-10">Terms of Service</h1>
            <div className="space-y-8 text-gray-400 font-medium">
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">1. License Grant</h2>
                    <p>A purchase grants you a perpetual, non-exclusive license to use Carto on up to two personal devices.</p>
                </section>
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">2. Restrictions</h2>
                    <p>You may not redistribute your license key, reverse engineer the application, or use the software for illegal activities.</p>
                </section>
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">3. AI Disclaimer</h2>
                    <p>AI-generated insights may contain technical errors. Carto is a tool to assist developers, not a replacement for professional engineering judgment.</p>
                </section>
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">4. Refunds</h2>
                    <p>We offer a 14-day refund policy if the software does not meet your expectations.</p>
                </section>
            </div>
            <div className="mt-12">
                <a href="/" className="text-primary font-bold hover:underline">← Back to Home</a>
            </div>
        </div>
    );
}