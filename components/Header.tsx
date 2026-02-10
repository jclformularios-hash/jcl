
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiteData } from '../types/siteData';
import { Menu, X, Phone, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';

interface HeaderProps {
  site: SiteData;
}

const Header: React.FC<HeaderProps> = ({ site }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar menus ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
           <img
  src="/logo.png"
  alt="JCL Consultoria"
  className="w-10 h-10 rounded-lg object-contain group-hover:opacity-90 transition"
/>

            <div className="flex flex-col">
              <span className="text-primary font-bold text-xl leading-none uppercase tracking-tight">JCL Consultoria</span>
              <span className="text-xs text-secondary font-medium tracking-wide">& Negócios</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors duration-200 ${isActive('/') ? 'text-secondary' : 'text-gray-600 hover:text-primary'}`}
            >
              Home
            </Link>

            {/* Soluções Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className={`flex items-center space-x-1 text-sm font-semibold transition-colors duration-200 ${location.pathname.startsWith('/solucoes') ? 'text-secondary' : 'text-gray-600 hover:text-primary'}`}
              >
                <span>Soluções</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <div 
                  className="absolute top-full -left-4 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in fade-in zoom-in-95 duration-200"
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-gray-50 mb-2">
                    <Link to="/solucoes" className="text-xs font-bold text-secondary uppercase tracking-wider hover:underline">Ver todas as soluções</Link>
                  </div>
                  {site.solutions.map((sol) => (
                    <Link
                      key={sol.slug}
                      to={`/solucoes/${sol.slug}`}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex-grow">
                        <div className="text-sm font-bold text-primary group-hover:text-secondary">{sol.title}</div>
                        <div className="text-[11px] text-gray-400 line-clamp-1">{sol.shortDescription}</div>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sobre"
              className={`text-sm font-semibold transition-colors duration-200 ${isActive('/sobre') ? 'text-secondary' : 'text-gray-600 hover:text-primary'}`}
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className={`text-sm font-semibold transition-colors duration-200 ${isActive('/contato') ? 'text-secondary' : 'text-gray-600 hover:text-primary'}`}
            >
              Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://wa.me/${site.settings.contact.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-md active:scale-95 hover:shadow-green-200"
            >
              <MessageCircle size={18} />
              <span>Falar com Especialista</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl inset-x-0 top-20 bottom-0 overflow-y-auto animate-in slide-in-from-right duration-300" style={{zIndex: 50}}>

          <div className="px-4 pt-4 pb-10 space-y-1">
            <Link to="/" className={`block px-4 py-4 text-lg font-bold rounded-xl ${isActive('/') ? 'bg-blue-50 text-secondary' : 'text-gray-700'}`}>Home</Link>
            
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-black text-gray-400 uppercase tracking-widest">Nossas Soluções</div>
              <div className="grid grid-cols-1 gap-1 mt-2">
                {site.solutions.map((sol) => (
                  <Link
                    key={sol.slug}
                    to={`/solucoes/${sol.slug}`}
                    className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl"
                  >
                    <div className="flex-grow">
                      <div className="text-sm font-bold text-primary">{sol.title}</div>
                    </div>
                    <ArrowRight size={14} className="text-gray-300" />
                  </Link>
                ))}
                <Link to="/solucoes" className="px-4 py-3 text-secondary font-bold text-sm underline">Ver catálogo completo</Link>
              </div>
            </div>

            <Link to="/sobre" className={`block px-4 py-4 text-lg font-bold rounded-xl ${isActive('/sobre') ? 'bg-blue-50 text-secondary' : 'text-gray-700'}`}>Sobre a JCL</Link>
            <Link to="/contato" className={`block px-4 py-4 text-lg font-bold rounded-xl ${isActive('/contato') ? 'bg-blue-50 text-secondary' : 'text-gray-700'}`}>Contato</Link>
            
            <div className="pt-6 border-t border-gray-50 flex flex-col space-y-3">
              <a 
                href={`tel:${site.settings.contact.phone}`}
                className="flex items-center justify-center space-x-2 border-2 border-primary text-primary py-4 rounded-xl font-bold"
              >
                <Phone size={18} />
                <span>Ligar Agora</span>
              </a>
              <a 
                href={`https://wa.me/${site.settings.contact.whatsapp}`}
                className="flex items-center justify-center space-x-2 bg-green-500 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
