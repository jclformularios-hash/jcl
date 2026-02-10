
import React from 'react';
import { Link } from 'react-router-dom';
import { SolutionPage } from '../types/siteData';
import { ChevronRight, PiggyBank, Car, TrendingUp, Home, Banknote, CheckCircle } from 'lucide-react';

const iconsMap: Record<string, any> = {
  PiggyBank,
  Car,
  TrendingUp,
  Home,
  Banknote,
  CheckCircle
};

interface SolutionCardProps {
  solution: SolutionPage;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const Icon = iconsMap[solution.icon] || CheckCircle;

  return (
    <Link 
      to={`/solucoes/${solution.slug}`}
      className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="bg-blue-50 text-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
        {solution.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        {solution.shortDescription}
      </p>
      <div className="flex items-center text-sm font-bold text-primary group-hover:text-secondary">
        <span>Saiba mais</span>
        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default SolutionCard;
