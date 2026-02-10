
import React, { useState, useMemo } from 'react';
import { SiteData } from '../types/siteData';
import SolutionCard from '../components/SolutionCard';
import { Search } from 'lucide-react';

interface SolutionsPageProps {
  site: SiteData;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ site }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSolutions = useMemo(() => {
    return site.solutions.filter(sol => 
      sol.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sol.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [site.solutions, searchTerm]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary pt-32 pb-48 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            {site.pages.solucoes.title}
          </h1>
          <p className="text-xl text-blue-100">
            {site.pages.solucoes.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center mb-16 border border-gray-100">
          <Search className="text-gray-400 ml-4" size={24} />
          <input 
            type="text" 
            placeholder={site.pages.solucoes.searchPlaceholder}
            className="w-full px-6 py-4 text-lg outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredSolutions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((sol) => (
              <SolutionCard key={sol.id} solution={sol} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Nenhuma solução encontrada para "{searchTerm}".</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-secondary font-bold hover:underline"
            >
              Ver todas as soluções
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default SolutionsPage;
