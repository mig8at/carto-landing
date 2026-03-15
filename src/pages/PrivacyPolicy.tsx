export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20 leading-relaxed">
            <h1 className="text-4xl font-black mb-10">Privacy Policy</h1>
            <div className="space-y-8 text-gray-400 font-medium">
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">1. Local-First Processing</h2>
                    <p>Carto is a desktop application. All code indexing and analysis happens locally on your computer. Your source code is never uploaded to our servers.</p>
                </section>
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">2. AI Data Transmission</h2>
                    <p>Metadata and code snippets are sent to third-party AI providers (Google Gemini) only when you trigger AI features. This data is governed by the AI provider's privacy policies.</p>
                </section>
                <section>
                    <h2 className="text-white text-xl font-bold mb-4">3. License Management</h2>
                    <p>We collect your email and machine ID through Lemon Squeezy solely to validate your license and prevent unauthorized distribution.</p>
                </section>
            </div>
            <div className="mt-12">
                <a href="/" className="text-primary font-bold hover:underline">← Back to Home</a>
            </div>
        </div>
    );
}