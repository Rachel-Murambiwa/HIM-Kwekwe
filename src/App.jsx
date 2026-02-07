import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
// Import your new Pages
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar stays outside Routes so it is visible on EVERY page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* You can add more routes later, e.g., <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;