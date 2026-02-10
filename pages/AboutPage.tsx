
import React from 'react';
import { SiteData } from '../types/siteData';
import { ShieldCheck, Target, Eye, Handshake } from 'lucide-react';

interface AboutPageProps {
  site: SiteData;
}

const AboutPage: React.FC<AboutPageProps> = ({ site }) => {
  const iconMap: Record<string, any> = {
    'Missão': Target,
    'Visão': Eye,
    'Ética': ShieldCheck,
    'Transparência': Handshake
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary pt-32 pb-32 text-center text-white relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Sobre a JCL Consultoria</h1>
          <p className="text-xl text-blue-100">
            Conheça a empresa que está revolucionando o acesso ao crédito no Brasil.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img src={site.media.images.about} className="rounded-3xl shadow-2xl" alt="Sobre nós" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nossa História</h2>
            {site.pages.sobre.content.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center space-y-4">
              <div className="bg-blue-50 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Missão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{site.pages.sobre.mission}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center space-y-4">
              <div className="bg-blue-50 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Visão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{site.pages.sobre.vision}</p>
            </div>
            {site.pages.sobre.values.slice(0, 2).map((val, i) => {
              const Icon = iconMap[val] || ShieldCheck;
              return (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center space-y-4">
                  <div className="bg-blue-50 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{val}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Comprometimento inegociável com nossos padrões de qualidade.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-primary">Vamos transformar sua realidade financeira?</h2>
          <p className="text-lg text-gray-500">Estamos prontos para oferecer o suporte que você precisa.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/#/solucoes" className="px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-xl hover:bg-primary-light transition-all">Ver Soluções</a>
            <a href="/#/contato" className="px-10 py-4 bg-white text-primary border border-primary font-bold rounded-xl hover:bg-gray-50 transition-all">Fale com Consultor</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
