
import React from 'react';
import { Link } from 'react-router-dom';
import { SiteData } from '../types/siteData';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  site: SiteData;
}

const Footer: React.FC<FooterProps> = ({ site }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg text-primary font-bold text-2xl">J</div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none">JCL Consultoria</span>
              <span className="text-xs text-blue-300 font-medium">Negócios Financeiros</span>
            </div>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            {site.settings.slogan}. Oferecemos as melhores condições do mercado para você realizar seus projetos com segurança.
          </p>
          <div className="flex space-x-4">
            {site.settings.socialMedia.instagram && (
              <a href="#" className="p-2 bg-blue-900/50 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
            )}
            {site.settings.socialMedia.facebook && (
              <a href="#" className="p-2 bg-blue-900/50 rounded-full hover:bg-secondary transition-colors"><Facebook size={20} /></a>
            )}
            {site.settings.socialMedia.linkedin && (
              <a href="#" className="p-2 bg-blue-900/50 rounded-full hover:bg-secondary transition-colors"><Linkedin size={20} /></a>
            )}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Navegação</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-blue-200 hover:text-white flex items-center"><ChevronRight size={14} className="mr-2" /> Home</Link></li>
            <li><Link to="/sobre" className="text-blue-200 hover:text-white flex items-center"><ChevronRight size={14} className="mr-2" /> Sobre a Empresa</Link></li>
            <li><Link to="/solucoes" className="text-blue-200 hover:text-white flex items-center"><ChevronRight size={14} className="mr-2" /> Nossas Soluções</Link></li>
            <li><Link to="/contato" className="text-blue-200 hover:text-white flex items-center"><ChevronRight size={14} className="mr-2" /> Fale Conosco</Link></li>
          </ul>
        </div>

        {/* Soluções rápidas */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Soluções em Destaque</h4>
          <ul className="space-y-4">
            {site.solutions.slice(0, 4).map(sol => (
              <li key={sol.id}>
                <Link to={`/solucoes/${sol.slug}`} className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight size={14} className="mr-2" /> {sol.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-blue-800 pb-2">Contato</h4>
          <ul className="space-y-4 text-blue-200 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 text-secondary shrink-0" />
              <span>{site.settings.contact.address.street}, {site.settings.contact.address.number}<br />{site.settings.contact.address.city} - {site.settings.contact.address.state}</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 text-secondary shrink-0" />
              <span>{site.settings.contact.phone}</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 text-secondary shrink-0" />
              <span>{site.settings.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-blue-400">
        <p>© {year} {site.settings.companyName}. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0">Desenvolvido com foco em SEO & UX</p>
      </div>
    </footer>
  );
};

export default Footer;
