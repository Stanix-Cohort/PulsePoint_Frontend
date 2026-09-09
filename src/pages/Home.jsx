import Hero from "../components/home/Hero";
import WhyPulsePoint from "../components/home/WhyPulsePoint";
import Navbar from "../components/NavBar";
import DonorEligibility from "../components/home/DonorEligibility";

function Home() {
  return (
    <main className="min-h-screen bg-white p-1">
      <Hero />
      <WhyPulsePoint />
      <DonorEligibility />
    </main>
  );
}

export default Home;