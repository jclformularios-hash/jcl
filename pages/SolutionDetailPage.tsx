
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SiteData } from '../types/siteData';
import QuickSignupForm from '../components/QuickSignupForm';
import { Check, Info, ArrowRight, HelpCircle } from 'lucide-react';

interface SolutionDetailPageProps {
  site: SiteData;
}

const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ site }) => {
  const { slug } = useParams<{ slug: string }>();
  const solution = site.solutions.find(s => s.slug === slug);

  if (!solution) return <Navigate to="/solucoes" replace />;

  return (
    <div className="bg-white">
      {/* Solution Header */}
      <section className="bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <nav className="flex space-x-2 text-sm text-gray-400">
                <span className="hover:text-primary cursor-pointer">Soluções</span>
                <span>/</span>
                <span className="text-secondary font-bold">{solution.title}</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
                {solution.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {solution.benefits.map((b, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold flex items-center">
                    <Check size={14} className="mr-2" /> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:pl-8">
              <QuickSignupForm site={site} fixedSolution={solution} title="Simular Agora" />
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {/* How it works */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary flex items-center">
                <Info className="mr-3 text-secondary" /> Como Funciona?
              </h3>
              <div className="relative border-l-2 border-blue-100 ml-4 space-y-12">
                {solution.howItWorks.map((step, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-white border-2 border-secondary rounded-full flex items-center justify-center font-bold text-secondary">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gray-50 p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-primary">Pré-requisitos</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.requirements.map((req, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-700">
                    <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                      <Check size={12} />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary flex items-center">
                <HelpCircle className="mr-3 text-secondary" /> Dúvidas Frequentes
              </h3>
              <div className="space-y-4">
                {solution.faqs.map((faq, i) => (
                  <details key={i} className="group border border-gray-100 rounded-2xl p-6 open:bg-blue-50/50 transition-all cursor-pointer">
                    <summary className="font-bold text-primary flex justify-between items-center list-none">
                      {faq.question}
                      <ArrowRight size={18} className="group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed border-t border-blue-100 pt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-32 bg-primary p-8 rounded-3xl text-white">
              <h4 className="text-xl font-bold mb-4">Ainda tem dúvidas?</h4>
              <p className="text-blue-100 mb-8 leading-relaxed">Fale agora mesmo com um consultor especialista pelo WhatsApp.</p>
              <a 
                href={`https://wa.me/${site.settings.contact.whatsapp}?text=Olá, gostaria de saber mais sobre ${solution.title}`}
                className="block w-full bg-secondary hover:bg-secondary-light py-4 rounded-xl text-center font-bold transition-all shadow-xl"
              >
                Falar com Especialista
              </a>
              <div className="mt-8 pt-8 border-t border-blue-900 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${i + 20}/50/50`} className="w-10 h-10 rounded-full border-2 border-primary" alt="Team" />
                  ))}
                </div>
                <p className="text-xs text-blue-200">Consultores disponíveis online agora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetailPage;
