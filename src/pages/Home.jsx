import Hero from "../components/home/Hero";
import WhyPulsePoint from "../components/home/WhyPulsePoint";
import Navbar from "../components/NavBar";
import DonorEligibility from "../components/home/DonorEligibility";
import HowItWorks from "../components/home/HowItWorks";
function Home() {
  return (
    <main className="min-h-screen bg-white p-1">
      <Hero />
      <WhyPulsePoint />
      <DonorEligibility />
      <HowItWorks />
    </main>
  );
}

export default Home;