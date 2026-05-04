import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Manrope, sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
