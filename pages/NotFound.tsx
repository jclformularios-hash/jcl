
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
      <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 text-center space-y-8 max-w-lg w-full">
        <div className="inline-flex p-6 bg-red-50 text-red-500 rounded-full animate-bounce">
          <AlertCircle size={60} />
        </div>
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">404</h1>
          <h2 className="text-2xl font-bold text-gray-800">Página não encontrada</h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            O link que você tentou acessar pode ter sido removido ou não existe mais.
          </p>
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary-light transition-all transform hover:-translate-y-1"
        >
          <Home size={20} />
          <span>Voltar para Início</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
