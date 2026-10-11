import React from 'react';
import Navbar from './components/Navbar';
import PosterHero from './components/PosterHero';
import EditorialBio from './components/EditorialBio';
import ContentShowcase from './components/ContentShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="editorial-portfolio-app">
      <Navbar />
      <main id="main-content">
        <PosterHero />
        <EditorialBio />
        <ContentShowcase />
      </main>
      <Footer />
    </div>
  );
}
