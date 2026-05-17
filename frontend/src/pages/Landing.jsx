export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <nav className="w-full border-b border-white/10 backdrop-blur-xl bg-black/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            LeadFlow AI
          </h1>
        </div>
      </nav>
      <section className="relative overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-36">
          <div className="max-w-5xl">
            <p className="text-blue-400 font-semibold tracking-[0.2em] uppercase mb-8 text-sm">
              AI Lead Automation Platform
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-10">
              Automate
              <br />
              <span className="text-blue-500">
                Business Intelligence
              </span>
              <br />
              Workflows
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mb-14">
              AI-powered lead automation platform for intelligent website analysis,
              automated report generation, PDF workflows,
              and enterprise email delivery systems.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.location.href = "/home"}
                className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-2xl shadow-blue-500/20"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="px-6 py-28 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="text-blue-400 font-medium mb-4">
              Platform Features
            </p>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Enterprise Grade
              AI Automation Workflow
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A scalable AI-powered platform designed for automated business intelligence,
              lead analysis, and report delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                AI Analysis
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced business analysis powered by Groq LLM infrastructure.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Smart Reporting
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Professional PDF reports generated dynamically using AI outputs.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Workflow Engine
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Automated lead processing pipeline with integrated services.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Email Automation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Automated report delivery using cloud-based email infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        © 2026 LeadFlow AI. All rights reserved.
      </footer>
    </div>
  );
}