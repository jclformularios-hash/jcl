
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { getSiteData } from './lib/getSiteData';
import { SiteData } from './types/siteData';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    getSiteData().then(setSiteData);
  }, []);

  if (!siteData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-white text-xl font-medium animate-pulse">Carregando JCL Consultoria...</div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header site={siteData} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage site={siteData} />} />
            <Route path="/sobre" element={<AboutPage site={siteData} />} />
            <Route path="/solucoes" element={<SolutionsPage site={siteData} />} />
            <Route path="/solucoes/:slug" element={<SolutionDetailPage site={siteData} />} />
            <Route path="/contato" element={<ContactPage site={siteData} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer site={siteData} />
      </div>
    </Router>
  );
};

export default App;
