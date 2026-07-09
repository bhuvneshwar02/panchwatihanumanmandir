import { useEffect, useState } from 'react';
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
import PosterModal from './components/PosterModal';
import PosterButton from './components/PosterButton';
import './App.css';

const POSTER_SEEN_KEY = 'mandirPosterSeen';

export default function App() {
  const [posterOpen, setPosterOpen] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem(POSTER_SEEN_KEY);
    if (!alreadySeen) {
      setPosterOpen(true);
    }
  }, []);

  const closePoster = () => {
    setPosterOpen(false);
    localStorage.setItem(POSTER_SEEN_KEY, 'true');
  };

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
      <PosterButton onClick={() => setPosterOpen(true)} />
      <PosterModal isOpen={posterOpen} onClose={closePoster} />
    </>
  );
}
