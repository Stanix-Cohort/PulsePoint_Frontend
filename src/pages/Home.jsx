import Hero from "../components/home/Hero";
import WhyPulsePoint from "../components/home/WhyPulsePoint";
import Navbar from "../components/NavBar";

function Home() {
  return (
    <main className="min-h-screen bg-white p-1">
      
      <Hero />
      <WhyPulsePoint />
    </main>
  );
}

export default Home;