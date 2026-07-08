import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Timings from './components/Timings';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Gallery />
        <Events />
        <Timings />
        <Donation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
