import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Barbers } from "./components/Barbers";
import { Philosophy } from "./components/Philosophy";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Barbers />
        <Philosophy />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
