
import React, { useState } from 'react';
import { SiteData, SolutionPage } from '../types/siteData';
import { Send, CheckCircle2, AlertCircle, Loader2, Upload } from 'lucide-react';

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const GOOGLE_SCRIPT_URL_SANDBOX = "https://script.google.com/macros/s/AKfycbxEmRtoBNcWMQIYKyECFmhLD238gkiDV9fUzTpl9cBwcPv2VA9BBvDS-Bmj7I5t_UVk/exec";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMCrDWkHBCoJ3nmc5r2rR1UOKK1-vQvrsyI2CPKkO6AKd3Oj86ug4BYG1W_mk9_dHY9A/exec"; 


interface QuickSignupFormProps {
  site: SiteData;
  fixedSolution?: SolutionPage;
  title?: string;
}

// Remove tudo que não for número
const onlyNumbers = (v: string) => v.replace(/\D/g, '');

// Formata telefone padrão Brasil
const formatPhoneBR = (value: string) => {
  const digits = onlyNumbers(value);

  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

// Formata valor em Real
const formatCurrencyBRL = (value: string) => {
  const digits = onlyNumbers(value);

  if (!digits) return '';

  const number = Number(digits) / 100;

  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};


const QuickSignupForm: React.FC<QuickSignupFormProps> = ({ site, fixedSolution, title }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cnpj: '',
    valor: '',
    observacoes: '',
    solution: fixedSolution?.slug || '',
  });
  const [file, setFile] = useState<File | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    let arquivoBase64 = '';
let arquivoNome = '';
let arquivoMime = '';

if (file) {
  arquivoBase64 = await fileToBase64(file);
  arquivoNome = file.name;
  arquivoMime = file.type;
}

const payload = {
  ...formData,
  arquivoBase64,
  arquivoNome,
  arquivoMime,
};

await fetch(GOOGLE_SCRIPT_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  },
  body: JSON.stringify(payload),
});


    // Como no-cors não permite ler a resposta, consideramos OK se não deu erro de rede.
    setStatus('success');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cnpj: '',
      valor: '',
      observacoes: '',
      solution: fixedSolution?.slug || '',
    });
    setFile(null);
  } catch (err) {
    setStatus('error');
  }
};

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
        <p className="text-gray-600 mb-6">Um de nossos especialistas entrará em contato em breve para realizar sua simulação.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-secondary font-semibold hover:underline"
        >
          Fazer outra solicitação
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-primary mb-2">{title || 'Solicite sua Simulação'}</h3>
      <p className="text-gray-500 text-sm mb-8">Preencha os dados abaixo para receber uma proposta personalizada.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">Nome Completo *</label>
            <input 
              required
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">E-mail *</label>
            <input 
              required
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="joao@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">WhatsApp / Celular *</label>
            <input 
              required
              type="tel"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={e =>
  setFormData({
    ...formData,
    telefone: formatPhoneBR(e.target.value),
  })
}

            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">Solução Desejada</label>
            <select 
              disabled={!!fixedSolution}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-gray-50 disabled:cursor-not-allowed appearance-none"
              value={formData.solution}
              onChange={e => setFormData({...formData, solution: e.target.value})}
            >
              <option value="">Selecione...</option>
              {site.solutions.map(sol => (
                <option key={sol.slug} value={sol.slug}>{sol.title}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">CNPJ (Opcional)</label>
            <input 
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="00.000.000/0001-00"
              value={formData.cnpj}
              onChange={e => setFormData({...formData, cnpj: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">Valor Desejado</label>
            <input 
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="Ex: R$ 50.000,00"
              value={formData.valor}
              onChange={e =>
  setFormData({
    ...formData,
    valor: formatCurrencyBRL(e.target.value),
  })
}

            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-700 uppercase">Anexar Documento (Opcional)</label>
          <div className="relative group">
            <input 
              type="file" 
              accept=".pdf,.jpg,.png"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
            <div className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-200 group-hover:border-secondary transition-colors flex items-center justify-center text-gray-500 space-x-2">
              <Upload size={18} />
              <span className="text-sm truncate">{file ? file.name : 'Selecionar PDF ou Imagem'}</span>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-700 uppercase">Observações</label>
          <textarea 
            rows={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Conte-nos um pouco mais sobre sua necessidade..."
            value={formData.observacoes}
            onChange={e => setFormData({...formData, observacoes: e.target.value})}
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            <AlertCircle size={16} />
            <span>Ocorreu um erro ao enviar. Tente novamente mais tarde.</span>
          </div>
        )}

        <button 
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition-all transform active:scale-[0.98] shadow-lg disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Processando...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Simular Agora Grátis</span>
            </>
          )}
        </button>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          Ao enviar, você concorda com nossa Política de Privacidade.
        </p>
      </form>
    </div>
  );
};

export default QuickSignupForm;
