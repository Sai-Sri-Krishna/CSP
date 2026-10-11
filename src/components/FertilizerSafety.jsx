import React from 'react';
import {
  Sprout,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Star,
  ThumbsUp,
  ThumbsDown,
  ShieldAlert,
  Leaf
} from 'lucide-react';
import fertilizerSackImg from '../assets/fertilizer_sack.jpg';

export default function FertilizerSafety({ onNavigateHome, onOpenCalculator }) {
  const fertilizerTypes = [
    {
      id: 'organic',
      title: 'Organic Fertilizers',
      desc: 'Natural fertilizers like compost, manure and vermicompost that improve soil structure.',
      customIcon: (
        <div className="w-12 h-12 rounded-xl bg-[#E5F3E4] flex items-center justify-center text-[#1B4D2E]">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-3 5-3 5-3-3.34-3-5 1.34-3 3-3zm4 12H8v-1.5h8V18z" />
          </svg>
        </div>
      )
    },
    {
      id: 'bio',
      title: 'Bio-fertilizers',
      desc: 'Contain beneficial microorganisms that enhance nutrient availability in soil.',
      customIcon: (
        <div className="w-12 h-12 rounded-xl bg-[#E5F3E4] flex items-center justify-center text-[#1B4D2E]">
          <Sprout className="w-7 h-7 text-[#1B4D2E]" />
        </div>
      )
    },
    {
      id: 'nitrogen',
      title: 'Nitrogen (N)',
      desc: 'Promotes leafy growth and increases the chlorophyll content in plants.',
      customIcon: (
        <div className="w-12 h-12 rounded-full bg-[#1D60AC] text-white flex items-center justify-center font-extrabold text-xl shadow-sm">
          N
        </div>
      )
    },
    {
      id: 'phosphorus',
      title: 'Phosphorus (P)',
      desc: 'Helps in root development, flowering, fruiting and early crop maturity.',
      customIcon: (
        <div className="w-12 h-12 rounded-full bg-[#E66414] text-white flex items-center justify-center font-extrabold text-xl shadow-sm">
          P
        </div>
      )
    },
    {
      id: 'potassium',
      title: 'Potassium (K)',
      desc: 'Improves plant strength, disease resistance and quality of produce.',
      customIcon: (
        <div className="w-12 h-12 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-extrabold text-xl shadow-sm">
          K
        </div>
      )
    },
    {
      id: 'micronutrients',
      title: 'Micronutrients',
      desc: 'Essential nutrients like Zn, Fe, B, Mn, Cu required in small quantities.',
      customIcon: (
        <div className="w-12 h-12 rounded-xl bg-[#E5F3E4] flex items-center justify-center text-[#1B4D2E]">
          <Leaf className="w-7 h-7 text-[#1B4D2E]" />
        </div>
      )
    }
  ];

  const benefitsList = [
    'Improves soil fertility and structure',
    'Provides balanced plant nutrition',
    'Increases crop yield and quality',
    'Enhances resistance to pests and diseases',
    'Protects environment and water bodies',
    'Ensures long-term soil health'
  ];

  const dosList = [
    'Read and follow instructions on the label carefully.',
    'Use the right type of fertilizer for the right crop.',
    'Follow recommended dosage and application method.',
    'Apply at the right time and growth stage of the crop.',
    'Store fertilizers in a dry, cool and secure place.',
    'Keep fertilizers away from children and animals.'
  ];

  const dontsList = [
    'Do not overuse fertilizers.',
    'Do not mix incompatible fertilizers.',
    'Do not apply fertilizers during strong sunlight or rain.',
    'Do not store near food, feed or drinking water.',
    'Do not reuse empty fertilizer bags.',
    'Do not apply fertilizers near water bodies.'
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-12">

      {/* 1. HERO BANNER FOR FERTILIZER SAFETY (EXACT MATCH TO SCREEN 2 BANNER) */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1B4D2E] text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* Left Hero Text Container */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-10 z-10">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#A8E2A2] text-xs font-bold uppercase tracking-wider mb-6">
              <Sprout className="w-4 h-4 text-[#A8E2A2]" />
              <span>Fertilizer Safety</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
              Use the Right Fertilizer, <br />
              in the Right Amount, <br />
              at the Right Time.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#EAF5E9] font-medium leading-relaxed max-w-xl mb-6">
              Balanced fertilization leads to healthy soil, better yield and a sustainable future.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCalculator}
                className="bg-[#A8E2A2] hover:bg-[#8CD885] text-[#1B4D2E] font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
              >
                Calculate Fertilizer Dosage
              </button>
              <button
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/30 px-5 py-3 rounded-xl text-sm transition-all"
              >
                Back to Home
              </button>
            </div>

          </div>

          {/* Right Visual Image (Burlap Fertilizer Sack on Soil) */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden">
            <img
              src={fertilizerSackImg}
              alt="Fertilizer Sack and Trowel on Soil"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            />
            {/* Soft Edge Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D2E] via-[#1B4D2E]/20 to-transparent lg:block hidden pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. TYPES OF FERTILIZERS & BENEFITS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Types of Fertilizers (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">

          <div className="flex items-center gap-2 mb-4">
            <Sprout className="w-5 h-5 text-[#1B4D2E]" />
            <h2 className="text-xl font-extrabold text-[#1B4D2E] tracking-tight">
              Types of Fertilizers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fertilizerTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-2xl p-4 border border-[#E2EFE1] agri-card-shadow agri-card-hover flex flex-col items-center text-center group"
              >
                <div className="mb-3 transform group-hover:scale-110 transition-transform">
                  {type.customIcon}
                </div>
                <h3 className="text-sm font-bold text-[#1B4D2E] mb-1.5">
                  {type.title}
                </h3>
                <p className="text-xs text-[#4A5D50] leading-snug">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Benefits Card (4 Cols) */}
        <div className="lg:col-span-4 bg-[#F2F9F1] rounded-2xl p-6 border border-[#C2E0C0] agri-card-shadow flex flex-col justify-between relative overflow-hidden">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-[#1B4D2E] fill-[#1B4D2E]" />
              <h2 className="text-base font-extrabold text-[#1B4D2E]">
                Benefits of Proper Fertilizer Use
              </h2>
            </div>

            <div className="space-y-2.5 text-xs font-semibold text-[#2C3E33]">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    ✓
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Leaf Vectors */}
          <div className="mt-6 flex justify-end opacity-20 pointer-events-none">
            <Sprout className="w-16 h-16 text-[#1B4D2E]" />
          </div>

        </div>

      </section>

      {/* 3. DO'S, DON'TS & QUICK TIP ROW */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Card 1: Green Do's Card (5 Cols) */}
        <div className="md:col-span-5 bg-[#F2F9F1] rounded-2xl p-6 border border-[#C2E0C0] agri-card-shadow relative overflow-hidden flex flex-col justify-between">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center">
                <ThumbsUp className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1B4D2E]">Do's</h3>
            </div>

            <div className="space-y-2.5 text-xs text-[#2C3E33] font-medium">
              {dosList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#1B4D2E] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Green Fertilizer Bag Graphic in Bottom Right */}
          <div className="mt-4 flex justify-end">
            <div className="w-12 h-14 bg-[#2B7A4B] rounded-lg relative flex items-center justify-center border-2 border-[#1B4D2E] shadow-sm">
              <Sprout className="w-6 h-6 text-white" />
            </div>
          </div>

        </div>

        {/* Card 2: Red Don'ts Card (4 Cols) */}
        <div className="md:col-span-4 bg-[#FFF2F2] rounded-2xl p-6 border border-[#FFD6D6] agri-card-shadow relative overflow-hidden flex flex-col justify-between">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#D93838] text-white flex items-center justify-center">
                <ThumbsDown className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-extrabold text-[#D93838]">Don'ts</h3>
            </div>

            <div className="space-y-2.5 text-xs text-[#522020] font-medium">
              {dontsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#D93838] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✕
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited Fertilizer Graphic in Bottom Right */}
          <div className="mt-4 flex justify-end">
            <div className="relative">
              <div className="w-10 h-12 bg-white rounded border border-gray-300 p-1 flex items-center justify-center">
                <div className="text-[8px] font-bold text-gray-500 text-center">FERTILIZER</div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldAlert className="w-10 h-10 text-[#D93838]" />
              </div>
            </div>
          </div>

        </div>

        {/* Card 3: Yellow Quick Tip Card (3 Cols) */}
        <div className="md:col-span-3 bg-[#FFFDF0] rounded-2xl p-6 border border-[#FFEAA7] agri-card-shadow flex flex-col justify-between relative overflow-hidden">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-[#D97706]" />
              <h3 className="text-base font-extrabold text-[#92400E]">Quick Tip</h3>
            </div>

            <p className="text-xs text-[#78350F] leading-relaxed font-semibold">
              Get your soil tested at least once a year and apply fertilizers based on the soil test recommendations for best results.
            </p>
          </div>

          {/* Soil Layer Vector Graphic with Sprouts at Bottom */}
          <div className="mt-6 pt-4 border-t border-[#FEF3C7] flex items-end justify-center gap-4 text-[#D97706]">
            <Sprout className="w-5 h-5" />
            <Sprout className="w-7 h-7 text-[#B45309]" />
            <Sprout className="w-6 h-6" />
          </div>

        </div>

      </section>

      {/* 4. BOTTOM BANNER STRIP (EXACT MATCH TO SCREEN 2 BOTTOM BAR) */}
      <section className="bg-[#1B4D2E] text-white rounded-2xl py-3.5 px-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-center sm:text-left">

          <div className="flex items-center gap-2 text-[#A8E2A2]">
            <Sprout className="w-4 h-4 shrink-0" />
            <span>Remember: Balanced fertilization today, better harvest tomorrow.</span>
          </div>

          <div className="hidden sm:block text-[#A8E2A2]/40">|</div>

          <div className="flex items-center gap-2 text-[#EAF5E9]">
            <span>Healthy Soil • Healthy Crops • Healthy Environment</span>
            <Sprout className="w-4 h-4 text-[#A8E2A2] shrink-0" />
          </div>

        </div>
      </section>

    </div>
  );
}
