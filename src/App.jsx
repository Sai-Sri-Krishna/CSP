import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Users, 
  Presentation, 
  BookOpen, 
  Target, 
  ShieldCheck, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  Calculator,
  Download
} from 'lucide-react';
import heroFarmerImg from './assets/hero_farmer.jpg';
import FertilizerSafety from './components/FertilizerSafety.jsx';
import PesticideSafety from './components/PesticideSafety.jsx';
import Resources from './components/Resources.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // Auto Scroll to Top whenever active navigation tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showGetInvolvedModal, setShowGetInvolvedModal] = useState(false);
  const [showSafetyGuidesModal, setShowSafetyGuidesModal] = useState(false);
  const [showCalculatorModal, setShowCalculatorModal] = useState(false);
  const [stats, setStats] = useState({
    farmersSurveyed: "30+",
    awarenessSessions: 5,
    pamphletsDistributed: "100+",
    keyAwarenessTopics: 7,
    primaryGoal: "Sustainable Farming"
  });

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', phone: '', village: 'Satuluru Village, Guntur', message: '', role: 'Farmer' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactError, setContactError] = useState('');

  // Volunteer Modal State
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    phone: '',
    contribution: 'Distribute Pamphlets in Satuluru'
  });
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerError, setVolunteerError] = useState('');

  // Fertilizer Calculator State
  const [calcAcres, setCalcAcres] = useState(1);
  const [calcCrop, setCalcCrop] = useState('Paddy (Rice)');

  // Focus Area Cards Data matching exact reference picture icons & content
  const focusAreas = [
    {
      id: 'fertilizer-safety',
      title: 'Fertilizer Safety',
      desc: 'Use the right fertilizer, in the right amount, at the right time.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Nutrient Mgmt',
      details: [
        'Perform Soil Testing (STBF) before applying macro-nutrients.',
        'Split Urea application into 3 equal doses: Basal, Tillering, and Panicle Initiation.',
        'Store fertilizer bags minimum 6 inches off ground in damp-free storage.',
        'Mix Bio-fertilizers (Azospirillum / PSB) with seed or FYM for 15-20% chemical saving.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M12,6C13.66,6 15,7.34 15,9C15,11.25 12,14 12,14C12,14 9,11.25 9,9C9,7.34 10.34,6 12,6M16,18H8V16.5H16V18Z" />
        </svg>
      )
    },
    {
      id: 'pesticide-safety',
      title: 'Pesticide Safety',
      desc: 'Protect your crops without risking your health.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Chemical Handling',
      details: [
        'Always read label safety triangle colors: Red (Extreme), Yellow (High), Blue (Moderate), Green (Slight).',
        'Wear full PPE: Face shield, N95 respirator mask, rubber gloves, and waterproof apron.',
        'Never spray opposite to wind direction or during extreme heat.',
        'Safely rinse empty chemical containers 3 times and puncture before disposal in recycling pits.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      )
    },
    {
      id: 'soil-health',
      title: 'Soil Health',
      desc: 'Healthy soil leads to healthy crops and a better future.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Soil Regeneration',
      details: [
        'Maintain Soil Organic Carbon (SOC) above 0.75% using green manuring.',
        'Cultivate Dhaincha / Sunn Hemp for 45 days and plough into soil prior to main crop.',
        'Maintain optimum soil pH (6.5 - 7.5) with targeted gypsum/lime applications.',
        'Adopt zero/minimum tillage to prevent earthworm habitat destruction.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      )
    },
    {
      id: 'farmer-health',
      title: 'Farmer Health & Safety',
      desc: 'Use protective equipment and stay safe.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Occupational Safety',
      details: [
        'Hydrate regularly with ORS or buttermilk during hot field hours to prevent heat stroke.',
        'Bothe body with soap immediately after spraying chemicals and change dedicated spray suits.',
        'Keep medical emergency helpline numbers handy (108 Ambulance / Poison Control).',
        'Undergo quarterly blood cholinesterase health checkups for pesticide exposure monitoring.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 0114 0H5z"/>
        </svg>
      )
    },
    {
      id: 'water-conservation',
      title: 'Water Conservation',
      desc: 'Save water today for a better tomorrow.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Micro Irrigation',
      details: [
        'Implement Drip Irrigation systems with subsidy under Pradhan Mantri Krishi Sinchayee Yojana.',
        'Practice Alternate Wetting and Drying (AWD) in paddy fields using field water tubes.',
        'Mulch crop beds with paddy straw to reduce soil evaporation loss by 35%.',
        'Build farm ponds for community rainwater storage during monsoon months.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      )
    },
    {
      id: 'fake-products',
      title: 'Fake Agricultural Products',
      desc: 'Be aware. Check. Verify. Stay Safe.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'Anti-Counterfeit',
      details: [
        'Purchase inputs only from authorized dealers with GST printed bills.',
        'Scan QR codes on seed bags and fertilizer bags using the Govt. Sathi App.',
        'Check holographic seals on chemical bottles before breaking outer seals.',
        'Report non-germinating seeds or dubious chemical batches to the local Agriculture Officer.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v6h-2V7zm0 8h2v2h-2v-2z"/>
        </svg>
      )
    },
    {
      id: 'digital-agri',
      title: 'Digital Agriculture Resources',
      desc: 'Use digital tools for better decisions and higher yield.',
      iconBg: 'bg-[#E5F3E4]',
      badge: 'AgTech Apps',
      details: [
        'Utilize Kisan Suvidha & e-NAM apps for real-time market price discovery.',
        'Leverage AI pest diagnosis apps (Plantix / Agrio) for instant photo-based disease detection.',
        'Subscribe to Meghdoot weather alerts for rain & storm warnings tailored to Satuluru village.',
        'Access government subsidy schemes via Andhra Pradesh Rythu Bharosa Kendra (RBK) portal.'
      ],
      customSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      )
    }
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setContactError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setContactSubmitted(true);
        setTimeout(() => {
          setContactSubmitted(false);
          setContactForm({ name: '', phone: '', village: 'Satuluru Village, Guntur', message: '', role: 'Farmer' });
        }, 5000);
      } else {
        setContactError(result.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setContactError('Unable to connect to server. Please ensure the backend is running.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingVolunteer(true);
    setVolunteerError('');

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(volunteerForm),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setVolunteerSubmitted(true);
        setTimeout(() => {
          setVolunteerSubmitted(false);
          setVolunteerForm({
            name: '',
            phone: '',
            contribution: 'Distribute Pamphlets in Satuluru',
          });
          setShowGetInvolvedModal(false);
        }, 2500);
      } else {
        setVolunteerError(result.message || 'Failed to register. Please try again.');
      }
    } catch (err) {
      console.error('Volunteer registration error:', err);
      setVolunteerError('Unable to connect to server. Please ensure the backend is running.');
    } finally {
      setIsSubmittingVolunteer(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6FAF5] text-[#1C2B20] flex flex-col font-sans">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2EFE1] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('Home')}>
            <div className="w-12 h-12 rounded-full bg-[#E4F2E2] flex items-center justify-center border border-[#C2E0C0]">
              <Sprout className="w-7 h-7 text-[#1B4D2E]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-[#1B4D2E] leading-tight">
                KrishiRaksha360
              </span>
              <span className="text-xs font-semibold text-[#4A5D50] tracking-wide">
                Smart Farming Awareness Program
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C3E33]">
            {[
              { id: 'Home', label: 'Home' },
              { id: 'Fertilizer Safety', label: 'Fertilizer Safety' },
              { id: 'Pesticide & Safety', label: 'Pesticide & Safety' },
              { id: 'Resources', label: 'Resources' },
              { id: 'Contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'Contact') {
                    setActiveTab('Home');
                    setTimeout(() => {
                      const contactElem = document.getElementById('contact');
                      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`relative py-2 transition-colors hover:text-[#1B4D2E] ${
                  activeTab === tab.id ? 'font-bold text-[#1B4D2E]' : 'text-[#4A5D50]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1B4D2E] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Get Involved Button */}
          <button 
            onClick={() => setShowGetInvolvedModal(true)}
            className="flex items-center gap-2 bg-[#1B4D2E] hover:bg-[#123820] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all hover:shadow-md active:scale-98"
          >
            <Users className="w-4 h-4" />
            <span>Get Involved</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        
        {/* TAB ROUTING FOR ALL SCREENS */}
        {activeTab === 'Fertilizer Safety' ? (
          <FertilizerSafety 
            onNavigateHome={() => setActiveTab('Home')}
            onOpenCalculator={() => setShowCalculatorModal(true)}
          />
        ) : activeTab === 'Pesticide & Safety' ? (
          <PesticideSafety 
            onNavigateHome={() => setActiveTab('Home')}
            onOpenSafetyGuides={() => setShowSafetyGuidesModal(true)}
          />
        ) : activeTab === 'Resources' ? (
          <Resources 
            onNavigateHome={() => setActiveTab('Home')}
          />
        ) : (
          /* SCREEN 1 (HOME PAGE) */
          <>
            <section className="relative overflow-hidden bg-[#F6FAF5] pt-4 pb-16 lg:pt-8 lg:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 z-10 pr-0 lg:pr-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F2E2] border border-[#C6E4C2] text-[#1B4D2E] text-xs font-bold uppercase tracking-wider mb-6">
                    <Sprout className="w-4 h-4 text-[#1B4D2E]" />
                    <span>Community Service Project</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B4D2E] tracking-tight leading-[1.1] mb-4">
                    Smart Farming <br className="hidden sm:inline" />
                    Awareness Program
                  </h1>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#1B4D2E] leading-snug mb-6 max-w-xl">
                    Safe and Responsible Use of <span className="text-[#1B4D2E] underline decoration-[#A3C9A0] decoration-2 underline-offset-4">Fertilizers & Pesticides</span> in Satuluru Village
                  </h2>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-[#A3C9A0]"></div>
                    <Sprout className="w-5 h-5 text-[#1B4D2E]" />
                    <div className="h-[1px] w-24 bg-[#A3C9A0]"></div>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#1C2B20] tracking-wide mb-8">
                    Healthy Farmers • Healthy Crops • Healthy Environment
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => {
                        const focusElem = document.getElementById('focus-areas');
                        if (focusElem) focusElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-2.5 bg-[#1B4D2E] hover:bg-[#143821] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-md transition-all hover:translate-y-[-2px]"
                    >
                      <Sprout className="w-5 h-5" />
                      <span>Learn More</span>
                    </button>

                    <button 
                      onClick={() => setShowSafetyGuidesModal(true)}
                      className="flex items-center gap-2.5 bg-white border-2 border-[#1B4D2E] text-[#1B4D2E] hover:bg-[#E4F2E2] px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm transition-all hover:translate-y-[-2px]"
                    >
                      <ShieldCheck className="w-5 h-5 text-[#1B4D2E]" />
                      <span>Safety Guides</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Expanded Hero Visual Image + Floating Quote Card */}
                <div className="lg:col-span-6 relative mt-6 lg:mt-0 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group w-full">
                    <img 
                      src={heroFarmerImg} 
                      alt="Satuluru Village Farmer inspecting green healthy crops" 
                      className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123820]/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-5 right-5 max-w-[300px] bg-[#1B4D2E] text-white p-4.5 rounded-2xl shadow-xl border border-white/20">
                      <div className="flex items-start gap-2.5">
                        <span className="text-3xl font-serif text-[#A8E2A2] leading-none">“</span>
                        <p className="text-xs sm:text-sm font-semibold italic text-[#EAF5E9] leading-tight">
                          Small steps today, safer farms tomorrow.
                        </p>
                        <span className="text-3xl font-serif text-[#A8E2A2] leading-none self-end">”</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section className="relative z-20 -mt-6 sm:-mt-10 mb-16">
              <div className="bg-white rounded-3xl p-6 sm:p-8 agri-stats-shadow border border-[#E2EFE1]">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2EFE1]">
                  
                  <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#E5F3E4] flex items-center justify-center shrink-0">
                      <Users className="w-7 h-7 text-[#1B4D2E]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4D2E] leading-none mb-1">
                        {stats.farmersSurveyed}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A5D50]">
                        Farmers Surveyed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E5F3E4] flex items-center justify-center shrink-0">
                      <Presentation className="w-7 h-7 text-[#1B4D2E]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4D2E] leading-none mb-1">
                        {stats.awarenessSessions}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A5D50]">
                        Awareness Sessions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E5F3E4] flex items-center justify-center shrink-0">
                      <BookOpen className="w-7 h-7 text-[#1B4D2E]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4D2E] leading-none mb-1">
                        {stats.pamphletsDistributed}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A5D50]">
                        Pamphlets Distributed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E5F3E4] flex items-center justify-center shrink-0">
                      <Sprout className="w-7 h-7 text-[#1B4D2E]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4D2E] leading-none mb-1">
                        {stats.keyAwarenessTopics}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A5D50]">
                        Key Awareness Topics
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E5F3E4] flex items-center justify-center shrink-0">
                      <Target className="w-7 h-7 text-[#1B4D2E]" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4D2E] leading-none mb-1">
                        1
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A5D50]">
                        Goal: Sustainable Farming
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section id="focus-areas" className="py-12 pb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E4F2E2] text-[#1B4D2E] text-xs font-bold uppercase tracking-widest mb-3 border border-[#C2E0C0]">
                  OUR FOCUS AREAS
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4D2E] tracking-tight mb-3">
                  Key Topics for Safe & Sustainable Farming
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-12 bg-[#A3C9A0]"></div>
                  <Sprout className="w-4 h-4 text-[#1B4D2E]" />
                  <div className="h-[1px] w-12 bg-[#A3C9A0]"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.id}
                    onClick={() => {
                      if (area.id === 'fertilizer-safety') {
                        setActiveTab('Fertilizer Safety');
                      } else if (area.id === 'pesticide-safety' || area.id === 'farmer-health') {
                        setActiveTab('Pesticide & Safety');
                      } else if (area.id === 'soil-health' || area.id === 'water-conservation' || area.id === 'fake-products' || area.id === 'digital-agri') {
                        setActiveTab('Resources');
                      } else {
                        setSelectedTopic(area);
                      }
                    }}
                    className="bg-white rounded-2xl p-5 border border-[#E2EFE1] hover:border-[#1B4D2E] agri-card-shadow agri-card-hover cursor-pointer flex flex-col justify-between text-center group transition-all duration-300"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-full bg-[#E5F3E4] mx-auto flex items-center justify-center mb-4 group-hover:bg-[#1B4D2E] text-[#1B4D2E] group-hover:text-white transition-all duration-300">
                        {area.customSvg}
                      </div>

                      <h3 className="text-base font-bold text-[#1B4D2E] leading-tight mb-2 group-hover:text-[#143821]">
                        {area.title}
                      </h3>

                      <p className="text-xs text-[#4A5D50] leading-snug mb-4 font-normal">
                        {area.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0F7EF] flex items-center justify-center gap-1 text-xs font-semibold text-[#1B4D2E] group-hover:underline">
                      <span>Explore Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-[#1B4D2E] to-[#2B7A4B] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                    <Calculator className="w-7 h-7 text-[#A8E2A2]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Interactive Fertilizer & Spray Calculator</h4>
                    <p className="text-xs sm:text-sm text-[#EAF5E9]">
                      Calculate accurate dosage of Urea, DAP, and Potash based on your exact land acreage in Satuluru village.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button 
                    onClick={() => setShowCalculatorModal(true)}
                    className="bg-white text-[#1B4D2E] font-bold px-6 py-3 rounded-xl hover:bg-[#E4F2E2] transition-all text-sm shadow-md"
                  >
                    Launch Calculator
                  </button>
                  <button 
                    onClick={() => setShowSafetyGuidesModal(true)}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-5 py-3 rounded-xl transition-all text-sm flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Flyers</span>
                  </button>
                </div>
              </div>
            </section>

            {/* FIELD COMMUNITY SURVEY & CONTACT SECTION */}
            <section id="contact" className="py-12 bg-white border-t border-[#E2EFE1] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F2E2] text-[#1B4D2E] text-xs font-bold uppercase mb-4">
                      <MapPin className="w-4 h-4 text-[#1B4D2E]" />
                      <span>Field Project Site</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#1B4D2E] tracking-tight mb-4">
                      Satuluru Village CSP Initiative
                    </h2>
                    <p className="text-sm text-[#4A5D50] leading-relaxed mb-6">
                      KrishiRaksha360 is dedicated to raising awareness among smallholder and commercial farmers in Satuluru Village, Guntur District, Andhra Pradesh. Our mission is to reduce chemical hazard risks, encourage soil regeneration, and enhance rural agricultural sustainability.
                    </p>

                    <div className="space-y-4 text-sm font-medium">
                      <div className="flex items-start gap-3 p-3 bg-[#F6FAF5] rounded-xl border border-[#E2EFE1]">
                        <MapPin className="w-5 h-5 text-[#1B4D2E] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-[#1B4D2E]">Target Location</div>
                          <div className="text-[#4A5D50] text-xs">Satuluru Village, Guntur District, Andhra Pradesh, India</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#F6FAF5] rounded-xl border border-[#E2EFE1]">
                        <Phone className="w-5 h-5 text-[#1B4D2E] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-[#1B4D2E]">Kisan Helpline & Support</div>
                          <div className="text-[#4A5D50] text-xs">+91 1800-180-1551 (Toll-Free Agricultural Advisory)</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-[#F6FAF5] rounded-xl border border-[#E2EFE1]">
                        <Mail className="w-5 h-5 text-[#1B4D2E] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-[#1B4D2E]">Project Email</div>
                          <div className="text-[#4A5D50] text-xs">csp.satuluru@krishiraksha360.org</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-[#F6FAF5] p-6 sm:p-8 rounded-3xl border border-[#E2EFE1] agri-card-shadow">
                    <h3 className="text-xl font-bold text-[#1B4D2E] mb-2">
                      Connect with Field Volunteers
                    </h3>
                    <p className="text-xs text-[#4A5D50] mb-6">
                      Have questions about chemical spray safety, soil test reports, or government subsidy schemes? Send us a message below.
                    </p>

                    {contactSubmitted ? (
                      <div className="bg-[#E4F2E2] border border-[#A3C9A0] text-[#1B4D2E] p-6 rounded-2xl text-center">
                        <CheckCircle2 className="w-12 h-12 text-[#1B4D2E] mx-auto mb-2" />
                        <h4 className="text-lg font-bold">Message Received!</h4>
                        <p className="text-xs text-[#4A5D50] mt-1">
                          Our Satuluru Village CSP team will reach out to you shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        {contactError && (
                          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                            {contactError}
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Full Name</label>
                            <input 
                              type="text" 
                              required
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              placeholder="e.g. Ramesh Reddy"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none bg-white text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              value={contactForm.phone}
                              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none bg-white text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">I am a</label>
                            <select 
                              value={contactForm.role}
                              onChange={(e) => setContactForm({ ...contactForm, role: e.target.value })}
                              className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none bg-white text-sm"
                            >
                              <option value="Farmer">Local Farmer</option>
                              <option value="Agri Dealer">Pesticide / Seed Dealer</option>
                              <option value="Student">Student Volunteer</option>
                              <option value="Officer">Agricultural Officer</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Village / Region</label>
                            <input 
                              type="text" 
                              value={contactForm.village}
                              onChange={(e) => setContactForm({ ...contactForm, village: e.target.value })}
                              placeholder="Satuluru Village, Guntur"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none bg-white text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Your Inquiry / Feedback</label>
                          <textarea 
                            rows="3"
                            required
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder="Ask about fertilizer ratios, pesticide precautions, or awareness sessions..."
                            className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none bg-white text-sm"
                          />
                        </div>

                        <button 
                          type="submit"
                          disabled={isSubmittingContact}
                          className="w-full bg-[#1B4D2E] hover:bg-[#123820] disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          {isSubmittingContact ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              <span>Saving Inquiry to Database...</span>
                            </>
                          ) : (
                            'Submit Inquiry'
                          )}
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              </div>
            </section>
          </>
        )}

      </main>

      {/* FOOTER BAR */}
      <footer className="bg-[#1B4D2E] text-white py-4 border-t border-[#2B7A4B] text-xs font-medium mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#A8E2A2]" />
            <span>KrishiRaksha360: Smart Farming Awareness Program</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#EAF5E9]">
            <MapPin className="w-3.5 h-3.5 text-[#A8E2A2]" />
            <span>Satuluru Village, Guntur District, Andhra Pradesh</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#A8E2A2] font-semibold">
            <Sprout className="w-3.5 h-3.5" />
            <span>Together we grow, together we protect.</span>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2EFE1] relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedTopic(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6FAF5] hover:bg-[#E4F2E2] flex items-center justify-center text-[#1B4D2E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F3E4] flex items-center justify-center">
                {selectedTopic.customSvg}
              </div>
              <div>
                <span className="text-xs font-bold text-[#1B4D2E] bg-[#E4F2E2] px-2.5 py-0.5 rounded-full">
                  {selectedTopic.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-[#1B4D2E] mt-0.5">
                  {selectedTopic.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#1C2B20] mb-6 italic bg-[#F6FAF5] p-3 rounded-xl border border-[#E2EFE1]">
              "{selectedTopic.desc}"
            </p>

            <h4 className="text-sm font-bold text-[#1B4D2E] uppercase tracking-wider mb-3">
              Essential Safety & Implementation Rules:
            </h4>

            <div className="space-y-3 mb-6">
              {selectedTopic.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#4A5D50]">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4D2E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#F0F7EF]">
              <button 
                onClick={() => setSelectedTopic(null)}
                className="bg-[#1B4D2E] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#143821]"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

      {showCalculatorModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2EFE1] relative">
            <button 
              onClick={() => setShowCalculatorModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6FAF5] hover:bg-[#E4F2E2] flex items-center justify-center text-[#1B4D2E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F3E4] flex items-center justify-center">
                <Calculator className="w-6 h-6 text-[#1B4D2E]" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#1B4D2E]">Fertilizer Dosage Calculator</h3>
                <p className="text-xs text-[#4A5D50]">Recommended dosage for Satuluru soil conditions</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Select Target Crop</label>
                <select 
                  value={calcCrop}
                  onChange={(e) => setCalcCrop(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] bg-white text-sm"
                >
                  <option value="Paddy (Rice)">Paddy (Rice)</option>
                  <option value="Cotton">Cotton (Kapus)</option>
                  <option value="Chilli">Chilli (Mirchi)</option>
                  <option value="Maize">Maize (Corn)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Land Area (in Acres)</label>
                <input 
                  type="number" 
                  min="0.5" 
                  step="0.5"
                  value={calcAcres}
                  onChange={(e) => setCalcAcres(parseFloat(e.target.value) || 1)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C2E0C0] bg-white text-sm"
                />
              </div>

              <div className="bg-[#E4F2E2] p-4 rounded-2xl border border-[#A3C9A0]">
                <div className="text-xs font-bold text-[#1B4D2E] uppercase mb-2">Estimated Requirement ({calcAcres} Acres):</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white p-2.5 rounded-xl border border-[#C2E0C0]">
                    <div className="text-xs font-semibold text-[#4A5D50]">Urea</div>
                    <div className="text-base font-extrabold text-[#1B4D2E]">{Math.round(calcAcres * 45)} kg</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#C2E0C0]">
                    <div className="text-xs font-semibold text-[#4A5D50]">DAP</div>
                    <div className="text-base font-extrabold text-[#1B4D2E]">{Math.round(calcAcres * 30)} kg</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#C2E0C0]">
                    <div className="text-xs font-semibold text-[#4A5D50]">MOP (Potash)</div>
                    <div className="text-base font-extrabold text-[#1B4D2E]">{Math.round(calcAcres * 20)} kg</div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowCalculatorModal(false)}
              className="w-full bg-[#1B4D2E] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#123820]"
            >
              Close Calculator
            </button>
          </div>
        </div>
      )}

      {showSafetyGuidesModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2EFE1] relative">
            <button 
              onClick={() => setShowSafetyGuidesModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6FAF5] hover:bg-[#E4F2E2] flex items-center justify-center text-[#1B4D2E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F3E4] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#1B4D2E]" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#1B4D2E]">Awareness Pamphlets & Downloads</h3>
                <p className="text-xs text-[#4A5D50]">Distributed during Satuluru Village CSP sessions</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { title: 'Pesticide Safety Chart (Telugu & English)', size: '2.4 MB PDF' },
                { title: 'Fertilizer Soil Health Guide 2026', size: '1.8 MB PDF' },
                { title: 'PPE Protective Gear Poster', size: '3.1 MB PDF' },
                { title: 'Authentic Agri Input Dealer Verification', size: '1.2 MB PDF' }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[#F6FAF5] rounded-xl border border-[#E2EFE1]">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#1B4D2E]" />
                    <div>
                      <div className="text-xs font-bold text-[#1B4D2E]">{doc.title}</div>
                      <div className="text-[10px] text-[#4A5D50]">{doc.size}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert(`Downloading: ${doc.title}`)}
                    className="flex items-center gap-1 bg-[#1B4D2E] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#123820]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowSafetyGuidesModal(false)}
              className="w-full bg-[#F6FAF5] border border-[#C2E0C0] text-[#1B4D2E] font-bold py-2.5 rounded-xl text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {showGetInvolvedModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E2EFE1] relative">
            <button 
              onClick={() => setShowGetInvolvedModal(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6FAF5] hover:bg-[#E4F2E2] flex items-center justify-center text-[#1B4D2E]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F3E4] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#1B4D2E]" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#1B4D2E]">Get Involved</h3>
                <p className="text-xs text-[#4A5D50]">Join KrishiRaksha360 CSP Drive</p>
              </div>
            </div>

            <p className="text-xs text-[#4A5D50] mb-4">
              Whether you are a student, agricultural enthusiast, or local farmer, join our mission to spread safe farming practices in Satuluru.
            </p>

            {volunteerSubmitted ? (
              <div className="p-6 bg-[#E5F3E4] border border-[#C2E0C0] rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-[#1B4D2E] mx-auto mb-2" />
                <h4 className="font-extrabold text-[#1B4D2E] text-base">Volunteer Registered!</h4>
                <p className="text-xs text-[#4A5D50] mt-1">
                  Thank you for supporting sustainable farming in Satuluru. We will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-3">
                {volunteerError && (
                  <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                    {volunteerError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    placeholder="Full Name" 
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C2E0C0] text-sm focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">Mobile Number</label>
                  <input 
                    required 
                    type="tel" 
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    placeholder="+91..." 
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C2E0C0] text-sm focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1B4D2E] uppercase mb-1">How would you like to contribute?</label>
                  <select 
                    value={volunteerForm.contribution}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, contribution: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#C2E0C0] text-sm focus:ring-2 focus:ring-[#1B4D2E] focus:outline-none"
                  >
                    <option value="Distribute Pamphlets in Satuluru">Distribute Pamphlets in Satuluru</option>
                    <option value="Conduct Farmer Awareness Sessions">Conduct Farmer Awareness Sessions</option>
                    <option value="Help Farmers with Digital Apps">Help Farmers with Digital Apps</option>
                    <option value="Donate Soil Testing Kits">Donate Soil Testing Kits</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmittingVolunteer}
                  className="w-full bg-[#1B4D2E] text-white font-bold py-3 rounded-xl text-sm hover:bg-[#123820] disabled:opacity-60 transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmittingVolunteer ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Registering...</span>
                    </>
                  ) : (
                    'Register as Volunteer'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
