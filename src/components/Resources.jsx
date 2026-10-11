import React from 'react';
import { 
  Sprout, 
  Droplet, 
  ShieldAlert, 
  Smartphone, 
  CloudSun, 
  BookOpen, 
  QrCode, 
  ExternalLink, 
  Lightbulb, 
  CheckCircle2, 
  Globe, 
  Store, 
  TrendingUp, 
  Award,
  MapPin
} from 'lucide-react';
import agriDigitalHeroImg from '../assets/agri_digital_hero.jpg';

export default function Resources({ onNavigateHome }) {
  
  const topicCards = [
    {
      id: 'soil',
      num: '1',
      title: 'Soil Health',
      bgColor: 'bg-[#F2F9F1]',
      borderColor: 'border-[#C2E0C0]',
      iconColor: 'bg-[#1B4D2E] text-white',
      items: [
        'Healthy soil leads to healthy crops.',
        'Test soil regularly.',
        'Use organic matter, compost and green manure.',
        'Practice crop rotation to maintain soil fertility.'
      ],
      bottomGraphic: (
        <div className="flex justify-end pt-2 text-[#1B4D2E]">
          <Sprout className="w-10 h-10" />
        </div>
      )
    },
    {
      id: 'water',
      num: '2',
      title: 'Water Conservation',
      bgColor: 'bg-[#F0F7FD]',
      borderColor: 'border-[#BAE0FF]',
      iconColor: 'bg-[#1890FF] text-white',
      items: [
        'Save every drop, secure our tomorrow.',
        'Use drip or sprinkler irrigation.',
        'Avoid over-irrigation.',
        'Prevent water pollution from chemicals.'
      ],
      bottomGraphic: (
        <div className="flex justify-end pt-2 text-[#1890FF]">
          <Droplet className="w-10 h-10 fill-[#1890FF]" />
        </div>
      )
    },
    {
      id: 'fake',
      num: '3',
      title: 'Fake Agricultural Products',
      bgColor: 'bg-[#FFFBF0]',
      borderColor: 'border-[#FFE58F]',
      iconColor: 'bg-[#FA8C16] text-white',
      items: [
        'Fake products cause big losses.',
        'Buy from authorized dealers only.',
        'Check label, batch no., manufacturing and expiry date.',
        'Keep bill and report suspicious products.'
      ],
      bottomGraphic: (
        <div className="flex justify-end pt-2">
          <div className="bg-[#D93838] text-white font-extrabold text-[10px] px-2 py-0.5 rounded rotate-[ -12deg] tracking-widest shadow-sm">
            FAKE
          </div>
        </div>
      )
    },
    {
      id: 'digital',
      num: '4',
      title: 'Digital Agriculture Resources',
      bgColor: 'bg-[#F2F9F6]',
      borderColor: 'border-[#B7EB8F]',
      iconColor: 'bg-[#52C41A] text-white',
      items: [
        'Use digital tools for better farming decisions.',
        'Check weather updates before farming activities.',
        'Get information about schemes, market prices and expert advice.',
        'Use trusted websites and mobile apps.'
      ],
      bottomGraphic: (
        <div className="flex justify-end pt-2 text-[#52C41A]">
          <Smartphone className="w-10 h-10" />
        </div>
      )
    }
  ];

  const digitalPortals = [
    {
      name: 'IMD Weather',
      desc: 'Get local weather forecast and alerts.',
      domain: 'mausam.imd.gov.in',
      url: 'https://mausam.imd.gov.in/',
      icon: <CloudSun className="w-7 h-7 text-[#1B4D2E]" />
    },
    {
      name: 'Kisan Suvidha',
      desc: 'Information on schemes, loans, fertilizers, pesticides and more.',
      domain: 'kisansuvidha.gov.in',
      url: 'https://kisansuvidha.gov.in/',
      icon: <Sprout className="w-7 h-7 text-[#1B4D2E]" />
    },
    {
      name: 'Soil Health Card',
      desc: 'Check soil health and get fertilizer recommendations.',
      domain: 'soilhealth.dac.gov.in',
      url: 'https://soilhealth.dac.gov.in/',
      icon: <Award className="w-7 h-7 text-[#1B4D2E]" />
    },
    {
      name: 'Agri Exchange',
      desc: 'Daily market prices of agricultural commodities.',
      domain: 'agmarknet.gov.in',
      url: 'https://agmarknet.gov.in/',
      icon: <TrendingUp className="w-7 h-7 text-[#1B4D2E]" />
    },
    {
      name: 'eNAM',
      desc: 'National Agricultural Market - Buy & sell online.',
      domain: 'enam.gov.in',
      url: 'https://enam.gov.in/web/',
      icon: <Store className="w-7 h-7 text-[#1B4D2E]" />
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* 1. HERO BANNER FOR SUSTAINABLE FARMING RESOURCES */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1B4D2E] text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A8E2A2] text-xs font-bold uppercase tracking-wider mb-6">
              <Sprout className="w-4 h-4 text-[#A8E2A2]" />
              <span>SUSTAINABLE FARMING RESOURCES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Knowledge Today, <br />
              Better Tomorrow.
            </h1>

            <p className="text-sm sm:text-base text-[#EAF5E9] font-medium leading-relaxed max-w-xl mb-6">
              Explore essential topics and digital resources to help farmers adopt safe, sustainable and smart farming practices for a better future.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => {
                  const digitalElem = document.getElementById('digital-portals');
                  if (digitalElem) digitalElem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#A8E2A2] hover:bg-[#8CD885] text-[#1B4D2E] font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Explore Portals</span>
              </button>
              <button 
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30 px-5 py-3 rounded-xl text-sm transition-all"
              >
                Back to Home
              </button>
            </div>

          </div>

          {/* Right Visual Image (Laptop & Smartphone Digital AgTech on Wooden Table) */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden">
            <img 
              src={agriDigitalHeroImg} 
              alt="Digital Agriculture Dashboard on Laptop and Mobile" 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            />
            {/* Soft Edge Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D2E] via-[#1B4D2E]/20 to-transparent lg:block hidden pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. ROW 1: 4 KEY TOPIC CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topicCards.map((card) => (
          <div 
            key={card.id}
            className={`${card.bgColor} rounded-2xl p-5 border ${card.borderColor} agri-card-shadow flex flex-col justify-between relative overflow-hidden`}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-8 h-8 rounded-full ${card.iconColor} flex items-center justify-center font-bold text-xs shrink-0 shadow-sm`}>
                  {card.num}
                </div>
                <h2 className="text-base font-extrabold text-[#1B4D2E]">
                  {card.title}
                </h2>
              </div>

              <div className="space-y-2.5 text-xs text-[#2C3E33] font-medium">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4D2E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {card.bottomGraphic}
          </div>
        ))}
      </section>

      {/* 3. ROW 2: USEFUL DIGITAL RESOURCES FOR FARMERS (5 PORTALS + QUICK TIPS) */}
      <section id="digital-portals" className="space-y-6 pt-4">
        
        {/* Section Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-[#A3C9A0]"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B4D2E] tracking-tight">
              Useful Digital Resources for Farmers
            </h2>
            <div className="h-[1px] w-16 bg-[#A3C9A0]"></div>
          </div>
        </div>

        {/* 5 Government Portals + Quick Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 5 Portals Grid (9 Cols) */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {digitalPortals.map((portal, idx) => (
              <a 
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 border border-[#E2EFE1] agri-card-shadow flex flex-col justify-between text-center cursor-pointer block"
                title={`Click or Scan QR to open ${portal.name}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E5F3E4] mx-auto flex items-center justify-center mb-3 text-[#1B4D2E]">
                    {portal.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#1B4D2E] mb-1">
                    {portal.name}
                  </h3>
                  <p className="text-[11px] text-[#4A5D50] leading-snug mb-3 min-h-[36px]">
                    {portal.desc}
                  </p>
                </div>

                <div>
                  {/* Real Scannable & Clickable QR Code Image */}
                  <div className="w-20 h-20 mx-auto mb-2 bg-white border border-[#E2EFE1] p-1 rounded-xl shadow-xs">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(portal.url)}`}
                      alt={`Scannable QR Code for ${portal.name}`}
                      className="w-full h-full object-contain rounded"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-[10px] font-bold text-[#1B4D2E] flex items-center justify-center gap-1">
                    <span className="truncate">{portal.domain}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </div>
                </div>

              </a>
            ))}
          </div>

          {/* Quick Tips Card (3 Cols) */}
          <div className="md:col-span-3 bg-[#F7F5FB] rounded-2xl p-5 border border-[#E2DDF5] agri-card-shadow flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#5B3E96]" />
                <h3 className="text-base font-extrabold text-[#5B3E96]">
                  Quick Tips
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-[#392661] font-semibold">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B3E96] shrink-0 mt-0.5" />
                  <span>Learn regularly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B3E96] shrink-0 mt-0.5" />
                  <span>Ask experts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B3E96] shrink-0 mt-0.5" />
                  <span>Follow safe practices.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5B3E96] shrink-0 mt-0.5" />
                  <span>Use resources wisely.</span>
                </div>
              </div>
            </div>

            {/* Farmer Smartphone Vector Graphic at Bottom */}
            <div className="mt-4 pt-4 border-t border-[#E2DDF5] flex items-center justify-center gap-2 text-[#5B3E96]">
              <Smartphone className="w-6 h-6" />
              <span className="text-[11px] font-bold">Digital Kisan</span>
            </div>

          </div>

        </div>

      </section>

      {/* 4. FOOTER BANNER STRIP */}
      <section className="bg-[#1B4D2E] text-white rounded-2xl py-3.5 px-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-center sm:text-left">
          
          <div className="flex items-center gap-2 text-[#A8E2A2]">
            <Sprout className="w-4 h-4 shrink-0" />
            <span>“Information is Power. Use it for a Better Harvest.”</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#EAF5E9]">
            <MapPin className="w-3.5 h-3.5 text-[#A8E2A2]" />
            <span>Satuluru Village, Guntur District, Andhra Pradesh</span>
          </div>

          <div className="flex items-center gap-2 text-[#A8E2A2]">
            <span>Let's build a sustainable and prosperous farming community.</span>
            <Sprout className="w-4 h-4 shrink-0" />
          </div>

        </div>
      </section>

    </div>
  );
}
