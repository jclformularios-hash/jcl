
import React from 'react';
import { SiteData } from '../types/siteData';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import QuickSignupForm from '../components/QuickSignupForm';

interface ContactPageProps {
  site: SiteData;
}

const ContactPage: React.FC<ContactPageProps> = ({ site }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary pt-32 pb-48 px-4 text-center text-white relative">
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{site.pages.contato.title}</h1>
          <p className="text-xl text-blue-100">{site.pages.contato.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 text-secondary rounded-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Telefone</h4>
                  <p className="text-gray-600 text-sm mt-1">{site.settings.contact.phone}</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 text-secondary rounded-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">E-mail</h4>
                  <p className="text-gray-600 text-sm mt-1">{site.settings.contact.email}</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 text-secondary rounded-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Localização</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {site.settings.contact.address.street}, {site.settings.contact.address.number}<br />
                    {site.settings.contact.address.city} - {site.settings.contact.address.state}
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 text-secondary rounded-xl">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Atendimento</h4>
                  <p className="text-gray-600 text-sm mt-1">{site.settings.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-80 relative group">
              <iframe 
                src={site.pages.contato.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <QuickSignupForm site={site} title="Envie uma mensagem direta" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
