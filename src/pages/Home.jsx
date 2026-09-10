import Hero from "../components/home/Hero";
import WhyPulsePoint from "../components/home/WhyPulsePoint";
import DonorEligibility from "../components/home/DonorEligibility";
import HowItWorks from "../components/home/HowItWorks";
import FAQ from "../components/home/FAQ";
function Home() {
  return (
    <main className="min-h-screen bg-white p-1">
      <Hero />
      <WhyPulsePoint />
      <DonorEligibility />
      <HowItWorks />
      <FAQ />
    </main>
  );
}

export default Home;