import Hero from "../components/home/Hero";
import WhyPulsePoint from "../components/home/WhyPulsePoint";
import DonorEligibility from "../components/home/DonorEligibility";
import HowItWorks from "../components/home/HowItWorks";
import FAQ from "../components/home/FAQ";
import Footer from "../components/Footer";
function Home() {
  return (
    <main className="min-h-screen bg-white p-1">
      <Hero />
      <WhyPulsePoint />
      <DonorEligibility />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}

export default Home;