
import React from 'react';
import { SiteData } from '../types/siteData';
import { Link } from 'react-router-dom';
// Added MessageCircle to the imported icons from lucide-react
import { ArrowRight, Star, Quote, CheckCircle, ShieldCheck, Zap, TrendingUp, Clock, Users, MessageCircle } from 'lucide-react';
import QuickSignupForm from '../components/QuickSignupForm';
import SolutionCard from '../components/SolutionCard';

interface HomePageProps {
  site: SiteData;
}

const HomePage: React.FC<HomePageProps> = ({ site }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Refined for better conversion */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-20 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
          
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tight animate-in fade-in slide-in-from-left duration-700">
              {site.pages.home.hero.title.split(' ').map((word, i) => 
                word.toLowerCase() === 'futuro' || word.toLowerCase() === 'financeiro' ? 
                <span key={i} className="text-secondary"> {word}</span> : 
                ` ${word}`
              )}
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-left duration-700 delay-200">
              {site.pages.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <a href="#simulacao" className="w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-2xl font-black shadow-xl hover:shadow-secondary/30 hover:-translate-y-1 transition-all flex items-center justify-center group">
                {site.pages.home.hero.cta}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="#solucoes" className="w-full sm:w-auto px-10 py-5 bg-white text-primary border-2 border-gray-100 rounded-2xl font-black hover:bg-gray-50 hover:border-gray-200 transition-all text-center">
                Explorar Soluções
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 text-gray-400">
              <div className="flex flex-col">
                <span className="text-primary font-black text-3xl">98%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Satisfação</span>
              </div>
              <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-3xl">R$ 50M+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Intermediados</span>
              </div>
              <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Client" />)}
                </div>
                <span className="text-xs font-bold text-gray-500">Aprovado por milhares</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
               <img 
                src={site.media.images.hero} 
                alt="Consultoria Profissional" 
                className="rounded-[2rem] object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl">
                 <div className="flex items-center space-x-3">
                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Garantia JCL</p>
                     <p className="text-sm font-bold text-primary">Segurança em cada etapa</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Social Proof */}
      {/* <section className="py-12 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Trabalhamos com os melhores parceiros</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-black tracking-tighter text-primary">BANCO DO BRASIL</span>
            <span className="text-2xl font-black tracking-tighter text-primary">CAIXA</span>
            <span className="text-2xl font-black tracking-tighter text-primary">BRADESCO</span>
            <span className="text-2xl font-black tracking-tighter text-primary">ITAÚ</span>
            <span className="text-2xl font-black tracking-tighter text-primary">SANTANDER</span>
          </div>
        </div>
      </section> */}

      {/* Solutions Section - Visual Refresh */}
      <section className="py-24 bg-white" id="solucoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-secondary tracking-widest uppercase mb-4">Portfólio de Crédito</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-primary leading-tight">Soluções financeiras inteligentes para cada fase da sua vida.</h3>
            </div>
            <Link to="/solucoes" className="inline-flex items-center px-6 py-3 bg-gray-50 text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors group">
              Ver Catálogo Completo
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {site.solutions.map((sol) => (
              <SolutionCard key={sol.id} solution={sol} />
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step - NEW Section for better UX */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-secondary tracking-widest uppercase mb-4">Processo JCL</h2>
            <h3 className="text-3xl sm:text-5xl font-black mb-6">Como funciona sua jornada até o crédito?</h3>
            <p className="text-blue-100/70 text-lg">Sem burocracia. Sem letras miúdas. Apenas 3 passos para o dinheiro na conta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Simulação Online', desc: 'Preencha o formulário rápido com seus dados básicos.', icon: Clock },
              { step: '02', title: 'Análise Consultiva', desc: 'Nossos especialistas buscam as melhores taxas nos bancos parceiros.', icon: Users },
              { step: '03', title: 'Crédito na Conta', desc: 'Após a aprovação digital, o dinheiro cai direto na sua conta bancária.', icon: TrendingUp }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-8 rounded-3xl bg-blue-900/20 border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-secondary/10 transition-colors">{item.step}</div>
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-blue-100/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Refined */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 p-2 bg-gray-100 rounded-[2.5rem] shadow-xl">
                 <img 
                  src="https://fastly.picsum.photos/id/2/1200/600.jpg?hmac=2ZS8RL5FkE4Kp33noyh_3QmbI9CgvQ7yIdnlBxPF0p4" 
                  alt="Sucesso Financeiro"
                />
              </div>
              <div className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 hidden sm:block">
                <div className="flex items-center space-x-3 text-secondary font-black">
                  <CheckCircle size={24} />
                  <span>100% Digital e Seguro</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <div>
                <h2 className="text-sm font-black text-secondary tracking-widest uppercase mb-4">Vantagens Exclusivas</h2>
                <h3 className="text-3xl sm:text-5xl font-black text-primary leading-tight">A consultoria que coloca você em primeiro lugar.</h3>
              </div>
              
              <div className="space-y-6">
                {site.pages.home.benefits.map((benefit, i) => (
                  <div key={i} className="group flex items-start space-x-5 p-6 rounded-2xl border border-gray-100 hover:border-secondary/20 hover:bg-blue-50/30 transition-all duration-300">
                    <div className="bg-primary text-white p-3.5 rounded-xl group-hover:bg-secondary transition-colors">
                      <CheckCircle size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Final Conversion */}
      <section id="simulacao" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 text-secondary font-black text-xs uppercase tracking-widest bg-blue-100/50 px-4 py-1.5 rounded-full">
                <TrendingUp size={14} />
                <span>Simulação Imediata</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-primary leading-tight">
                Recupere seu fôlego financeiro hoje.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                Nossos consultores estão online agora para analisar seu perfil e liberar as melhores condições do mercado.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-primary">0%</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">Taxa de Adesão Inicial</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-primary">24h</div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">Média de Liberação</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/5 rounded-[3rem] blur-2xl -z-10"></div>
              <QuickSignupForm site={site} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-secondary tracking-widest uppercase mb-4">Depoimentos</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-primary mb-6">Confiança que gera resultados</h3>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {site.pages.home.testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-gray-50 opacity-10 group-hover:text-secondary/20 transition-colors">
                  <Quote size={80} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-600 text-xl italic leading-relaxed mb-10">"{t.content}"</p>
                  <div className="mt-auto flex items-center space-x-5">
                    {/* <img src={t.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-lg object-cover" alt={t.name} /> */}
                    <div>
                      <h5 className="font-black text-primary text-lg">{t.name}</h5>
                      <p className="text-sm font-bold text-secondary">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-8 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">Ainda tem dúvidas? Fale com quem entende.</h3>
              <p className="text-blue-100 text-lg">Nosso suporte humano está pronto para tirar suas dúvidas em tempo real.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href={`https://wa.me/${site.settings.contact.whatsapp}`} 
                  className="w-full sm:w-auto px-10 py-5 bg-green-500 text-white font-black rounded-2xl shadow-xl shadow-green-500/20 hover:bg-green-600 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3"
                >
                  <MessageCircle size={22} />
                  <span>Chamar no WhatsApp</span>
                </a>
                <Link to="/contato" className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all">
                  Outras formas de contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
