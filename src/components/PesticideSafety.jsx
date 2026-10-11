import React from 'react';
import { 
  Sprout, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  PhoneCall, 
  ShieldAlert, 
  Lock, 
  Droplet, 
  HeartPulse, 
  Activity, 
  UserCheck, 
  Sparkles,
  Eye,
  Wind,
  Layers,
  Thermometer,
  Headphones,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import pesticideSprayerImg from '../assets/pesticide_sprayer.jpg';

export default function PesticideSafety({ onNavigateHome, onOpenSafetyGuides }) {
  
  const pesticideTypes = [
    {
      id: 'insecticides',
      title: 'Insecticides',
      desc: 'Control insects and pests that damage crops.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#1B4D2E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l1.37-1.37a1 1 0 0 0-1.41-1.41l-1.9 1.9A5.96 5.96 0 0 0 12 5c-1.18 0-2.29.34-3.23.93l-1.9-1.9a1 1 0 0 0-1.41 1.41l1.37 1.37A5.985 5.985 0 0 0 5 8H3.19a1 1 0 0 0 0 2H5v2H3.19a1 1 0 0 0 0 2H5v2H3.19a1 1 0 0 0 0 2H5a5.992 5.992 0 0 0 5.23 5.93V21a1 1 0 1 0 2 0v-1.07A5.992 5.992 0 0 0 19 14h1.81a1 1 0 1 0 0-2H19v-2h1.81a1 1 0 1 0 0-2H19V8zm-7 10c-2.21 0-4-1.79-4-4v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4c0 2.21-1.79 4-4 4z"/>
        </svg>
      )
    },
    {
      id: 'fungicides',
      title: 'Fungicides',
      desc: 'Control fungal diseases and prevent spread.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#1B4D2E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a9 9 0 0 0-9 9c0 3.87 2.45 7.17 5.88 8.44C9.17 19.8 9 20.38 9 21a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0c0-.62-.17-1.2-.88-1.56C17.55 18.17 20 14.87 20 11a9 9 0 0 0-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
      )
    },
    {
      id: 'herbicides',
      title: 'Herbicides',
      desc: 'Control unwanted weeds in the field.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#1B4D2E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L3.35 19.2a1 1 0 1 0 1.41 1.41l1.62-1.62A8.95 8.95 0 0 0 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7 0-1.63.56-3.13 1.5-4.34l9.84 9.84C15.13 18.44 13.63 19 12 19z"/>
        </svg>
      )
    },
    {
      id: 'rodenticides',
      title: 'Rodenticides',
      desc: 'Control rats and other rodents.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#1B4D2E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3c-4.97 0-9 4.03-9 9 0 3.06 1.53 5.76 3.87 7.37l-1.58 1.58a1 1 0 1 0 1.41 1.41l1.76-1.76C10.74 20.8 11.84 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
        </svg>
      )
    }
  ];

  const ppeItems = [
    { name: 'Hat', icon: '🤠' },
    { name: 'Mask', icon: '😷' },
    { name: 'Goggles', icon: '🥽' },
    { name: 'Gloves', icon: '🧤' },
    { name: 'Boots', icon: '🥾' },
    { name: 'Full Sleeve Shirt', icon: '👔' },
    { name: 'Full Pants', icon: '👖' }
  ];

  const safeSprayingRules = [
    'Read the label carefully before use.',
    'Measure the quantity correctly.',
    'Use the right pesticide for the right pest.',
    'Avoid spraying in windy conditions.',
    'Spray in the early morning or late evening.',
    'Wash hands and face after spraying.',
    'Clean the sprayer after each use.',
    'Keep people and animals away during spraying.'
  ];

  const commonMistakes = [
    { label: 'Not using protective equipment', icon: '🚫😷' },
    { label: 'Using more than recommended dosage', icon: '🚫🧪' },
    { label: 'Reusing pesticide containers', icon: '🚫🪣' },
    { label: 'Spraying near water bodies', icon: '🚫🌊' },
    { label: 'Not reading the product label', icon: '🚫📄' }
  ];

  const symptomsList = [
    { name: 'Headache', icon: '🤕' },
    { name: 'Dizziness', icon: '😵' },
    { name: 'Nausea', icon: '🤢' },
    { name: 'Skin Irritation', icon: '🫱💥' },
    { name: 'Breathing Difficulty', icon: '🫁' },
    { name: 'Blurred Vision', icon: '👁️' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* 1. HERO BANNER FOR PESTICIDE & FARMER SAFETY */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1B4D2E] text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A8E2A2] text-xs font-bold uppercase tracking-wider mb-6">
              <Sprout className="w-4 h-4 text-[#A8E2A2]" />
              <span>PESTICIDE & FARMER SAFETY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Protect Your Crop <br />
              Without Risking Your Health.
            </h1>

            <p className="text-sm sm:text-base text-[#EAF5E9] font-medium leading-relaxed max-w-xl mb-6">
              Safe handling of pesticides protects you, your family, beneficial insects, and the environment.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={onOpenSafetyGuides}
                className="bg-[#A8E2A2] hover:bg-[#8CD885] text-[#1B4D2E] font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Download PPE Safety Poster</span>
              </button>
              <button 
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30 px-5 py-3 rounded-xl text-sm transition-all"
              >
                Back to Home
              </button>
            </div>

          </div>

          {/* Right Visual Image (Knapsack Sprayer Farmer in Crop Field) */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden">
            <img 
              src={pesticideSprayerImg} 
              alt="Farmer in PPE Spraying Crops" 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            />
            {/* Soft Edge Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D2E] via-[#1B4D2E]/20 to-transparent lg:block hidden pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. TOP ROW: TYPES OF PESTICIDES | PROTECTIVE EQUIPMENT | SAFE SPRAYING PRACTICES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Col 1: Types of Pesticides (3.5 Cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-[#E2EFE1] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0F7EF]">
              <div className="w-8 h-8 rounded-lg bg-[#E5F3E4] flex items-center justify-center">
                <Sprout className="w-5 h-5 text-[#1B4D2E]" />
              </div>
              <h2 className="text-base font-extrabold text-[#1B4D2E]">
                Types of Pesticides
              </h2>
            </div>

            <div className="space-y-3.5">
              {pesticideTypes.map((item) => (
                <div key={item.id} className="flex items-start gap-3 text-xs">
                  <div className="mt-0.5 shrink-0">
                    {item.iconSvg}
                  </div>
                  <div>
                    <div className="font-bold text-[#1B4D2E]">{item.title}</div>
                    <div className="text-[#4A5D50] leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col 2: Protective Equipment (Always Use) (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-[#E2EFE1] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0F7EF]">
              <ShieldCheck className="w-6 h-6 text-[#1B4D2E]" />
              <h2 className="text-base font-extrabold text-[#1B4D2E]">
                Protective Equipment (Always Use)
              </h2>
            </div>

            {/* PPE Gear Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center mb-4">
              {ppeItems.map((ppe, idx) => (
                <div key={idx} className="bg-[#F6FAF5] p-3 rounded-xl border border-[#E2EFE1] flex flex-col items-center justify-center hover:border-[#1B4D2E] transition-colors">
                  <span className="text-2xl mb-1">{ppe.icon}</span>
                  <span className="text-xs font-bold text-[#1B4D2E]">{ppe.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Green Banner Pill */}
          <div className="bg-[#E4F2E2] p-2.5 rounded-xl border border-[#C2E0C0] text-center text-xs font-bold text-[#1B4D2E] flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1B4D2E]" />
            <span>Your safety is in your hands. Use complete protection.</span>
          </div>
        </div>

        {/* Col 3: Safe Spraying Practices (3.5 Cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-[#E2EFE1] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0F7EF]">
              <Sprout className="w-5 h-5 text-[#1B4D2E]" />
              <h2 className="text-base font-extrabold text-[#1B4D2E]">
                Safe Spraying Practices
              </h2>
            </div>

            <div className="space-y-2 text-xs font-medium text-[#2C3E33]">
              {safeSprayingRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4D2E] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 3. MIDDLE ROW: COMMON MISTAKES TO AVOID | SAFE STORAGE & DISPOSAL */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card: Common Mistakes to Avoid (6 Cols) */}
        <div className="lg:col-span-6 bg-[#FFF2F2] rounded-2xl p-6 border border-[#FFD6D6] agri-card-shadow">
          <div className="flex items-center gap-2 mb-5">
            <XCircle className="w-6 h-6 text-[#D93838]" />
            <h2 className="text-lg font-extrabold text-[#D93838]">
              Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-[#FFC1C1] flex flex-col items-center justify-center">
                <span className="text-3xl mb-2">{mistake.icon}</span>
                <span className="text-[11px] font-bold text-[#522020] leading-tight">{mistake.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Safe Storage & Disposal (6 Cols) */}
        <div className="lg:col-span-6 bg-[#F7F5FB] rounded-2xl p-6 border border-[#E2DDF5] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-[#5B3E96]" />
              <h2 className="text-lg font-extrabold text-[#5B3E96]">
                Safe Storage & Disposal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 space-y-2 text-xs text-[#392661] font-medium">
                <p>◦ Store pesticides in original containers only.</p>
                <p>◦ Keep them in a cool, dry and locked place.</p>
                <p>◦ Do not store near food, fodder or medicines.</p>
                <p>◦ Do not reuse empty pesticide containers.</p>
                <p>◦ Triple rinse empty containers and dispose of as per local guidelines.</p>
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl border border-[#D1C7F0] p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <Lock className="w-8 h-8 text-[#5B3E96] mb-1" />
                  <span className="text-[10px] font-bold text-[#5B3E96]">Locked Shed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#FFFBEB] p-2.5 rounded-xl border border-[#FDE68A] text-xs font-bold text-[#92400E] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>Improper storage and disposal can harm your family and the environment.</span>
          </div>
        </div>

      </section>

      {/* 4. BOTTOM ROW: SYMPTOMS OF PESTICIDE EXPOSURE | EMERGENCY CONTACTS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Card: Symptoms of Pesticide Exposure (6 Cols) */}
        <div className="lg:col-span-6 bg-[#FFF2F2] rounded-2xl p-6 border border-[#FFD6D6] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PlusCircle className="w-6 h-6 text-[#D93838]" />
              <h2 className="text-lg font-extrabold text-[#D93838]">
                Symptoms of Pesticide Exposure
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center mb-4">
              {symptomsList.map((sym, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#FFC1C1] flex flex-col items-center">
                  <span className="text-2xl mb-1">{sym.icon}</span>
                  <span className="text-[10px] font-bold text-[#522020] leading-tight">{sym.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FFE6E6] border border-[#FFB3B3] text-[#990000] p-2.5 rounded-xl text-center text-xs font-bold">
            If you feel any of these symptoms, get medical help immediately.
          </div>
        </div>

        {/* Right Card: Emergency Contacts (6 Cols) */}
        <div className="lg:col-span-6 bg-[#F2F9F1] rounded-2xl p-6 border border-[#C2E0C0] agri-card-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PhoneCall className="w-5 h-5 text-[#1B4D2E]" />
              <h2 className="text-lg font-extrabold text-[#1B4D2E]">
                Emergency Contacts
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              
              <div className="bg-white p-3 rounded-xl border border-[#C2E0C0]">
                <UserCheck className="w-6 h-6 text-[#1B4D2E] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#1B4D2E]">Agriculture Officer</div>
                <div className="text-xs font-extrabold text-[#2C3E33] mt-1">1234567890</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C2E0C0]">
                <Headphones className="w-6 h-6 text-[#1B4D2E] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#1B4D2E]">Farmer Helpline</div>
                <div className="text-xs font-extrabold text-[#2C3E33] mt-1">1800-180-1551</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C2E0C0]">
                <ShieldAlert className="w-6 h-6 text-[#1B4D2E] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#1B4D2E]">Pesticide Helpline</div>
                <div className="text-xs font-extrabold text-[#2C3E33] mt-1">1076</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#C2E0C0]">
                <HeartPulse className="w-6 h-6 text-[#D93838] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#D93838]">Medical Emergency</div>
                <div className="text-xs font-extrabold text-[#D93838] mt-1">108</div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* 5. FOOTER BANNER STRIP */}
      <section className="bg-[#1B4D2E] text-white rounded-2xl py-3.5 px-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-center sm:text-left">
          
          <div className="flex items-center gap-2 text-[#A8E2A2]">
            <Sprout className="w-4 h-4 shrink-0" />
            <span>Be Safe, Be Aware, Protect Yourself, Your Family and Your Farm.</span>
          </div>

          <div className="flex items-center gap-2 text-[#EAF5E9]">
            <span>Together we grow, together we protect.</span>
            <Sprout className="w-4 h-4 text-[#A8E2A2] shrink-0" />
          </div>

        </div>
      </section>

    </div>
  );
}
