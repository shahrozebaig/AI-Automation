import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">
      <Navbar />
      <section className="relative w-full overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-blue-400 font-medium mb-5">
              AI Lead Automation Platform
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              Generate
              AI Powered
              Business Reports
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
              Analyze business websites using AI,
              generate professional audit reports,
              automate PDF generation,
              and deliver reports instantly through intelligent workflows.
            </p>
          </div>
        </div>
      </section>
      <section className="flex-1 w-full px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Automated
              Business Intelligence
              Workflow
            </h2>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Website Analysis
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Extract and analyze company website content using AI-powered automation.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Professional Reports
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Generate detailed business audit reports automatically in PDF format.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  Smart Automation
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Automate lead management, report generation, and email delivery workflows.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl shadow-black/40">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Home;