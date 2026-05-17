import Navbar from "../components/Navbar";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <Navbar />
      <div className="flex flex-1 items-center justify-center w-full px-4">
        <LeadForm />
      </div>
      <Footer />
    </div>
  );
}
export default Home;