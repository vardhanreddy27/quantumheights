import React from 'react';
import Image from 'next/image';
import { 
  Bell, 
  Calendar, 
  BrainCircuit, 
  Bus,
  BookOpen,
  BarChart3,
  Languages,
  ClipboardCheck,
} from 'lucide-react';

const SmartSchool = () => {
  const appScreens = [
    {
      id: 1,
      image: '/app1.png',
      label: 'Dashboard',
    },
    {
      id: 2,
      image: '/app2.png',
      label: 'Performance',
    },
  ];

  const leftFeatures = [
    {
      icon: <BarChart3 className="h-5 w-5 text-white" />,
      title: 'Live performance updates',
      desc: 'Live updates on attendance, homework, and performance.',
    },
    {
      icon: <Bus className="h-5 w-5 text-white" />,
      title: 'Bus tracking alerts',
      desc: 'Track school bus movement with instant parent notifications.',
    },
    {
      icon: <Languages className="h-5 w-5 text-white" />,
      title: 'Telugu translation support',
      desc: 'Parents can view app content in Telugu for easier understanding.',
    },
  ];

  const rightFeatures = [
    {
      icon: <BrainCircuit className="h-5 w-5 text-white" />,
      title: 'AI weakness insights',
      desc: 'AI-based insights on weak subjects and guided improvement.',
    },
    {
      icon: <BookOpen className="h-5 w-5 text-white" />,
      title: 'Academic resources access',
      desc: 'Access to notes, homework, and academic calendar in one place.',
    },
    {
      icon: <ClipboardCheck className="h-5 w-5 text-white" />,
      title: 'Smart task follow-up',
      desc: 'Actionable practice tasks to improve weak learning areas.',
    },
  ];

  return (
    <section id="smart-school" className="relative overflow-hidden bg-[#fafdfff7] py-20 sm:py-24">
      {/* Gradient background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/8 via-[var(--brand-accent)]/5 to-[var(--brand-secondary)]/8 pointer-events-none"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold text-[var(--brand-primary)] sm:text-4xl md:text-5xl">
            Smart School ERP
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            A complete ecosystem for parents to monitor, engage, and accelerate 
            their child{"'"}s learning journey through data-driven insights.
          </p>
        </div>

        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[300px_auto_300px] lg:gap-12">
          {/* Left Features Column */}
          <div className="mx-auto max-w-sm space-y-4 sm:space-y-6 lg:mx-0">
            {[leftFeatures[0], leftFeatures[1], leftFeatures[2]].map((feature) => (
              <FeaturePoint
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                size="lg"
              />
            ))}
          </div>

          {/* Center: Side-by-Side Tilted Phones */}
          <div className="relative order-first mx-auto h-[420px] w-full max-w-[340px] sm:h-[520px] sm:max-w-[460px] md:h-[580px] md:max-w-[560px] lg:order-none lg:h-[650px] lg:w-[600px]">
            {/* Left Phone - Tilted Left */}
            <div 
              className="absolute left-0 top-2 h-[360px] w-[170px] overflow-hidden rounded-[2rem] border-[6px] border-[var(--brand-accent)]/75 bg-[var(--brand-accent)] shadow-[0_40px_100px_-40px_rgba(18,61,109,0.6)] sm:h-[470px] sm:w-[230px] sm:rounded-[2.3rem] sm:border-[7px] md:h-[540px] md:w-[260px] lg:top-1 lg:h-[580px] lg:w-[280px] lg:rounded-[2.5rem] lg:border-[8px]"
              style={{ 
                transform: 'rotate(-8deg) translateX(-10px)',
              }}
            >
              <Image
                src={appScreens[0].image}
                alt={appScreens[0].label}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Phone - Tilted Right */}
            <div 
              className="absolute right-0 top-0 h-[360px] w-[170px] overflow-hidden rounded-[2rem] border-[6px] border-[var(--brand-accent)]/75 bg-[var(--brand-accent)] shadow-[0_40px_100px_-40px_rgba(18,61,109,0.6)] sm:h-[470px] sm:w-[230px] sm:rounded-[2.3rem] sm:border-[7px] md:h-[540px] md:w-[260px] lg:h-[580px] lg:w-[280px] lg:rounded-[2.5rem] lg:border-[8px]"
              style={{ 
                transform: 'rotate(7deg) translateX(10px)',
              }}
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-secondary)]/35 blur-2xl"></div>
              <Image
                src={appScreens[1].image}
                alt={appScreens[1].label}
                fill
                className="relative object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Features Column */}
          <div className="mx-auto max-w-sm space-y-4 sm:space-y-6 lg:mx-0">
            {[rightFeatures[0], rightFeatures[1], rightFeatures[2]].map((feature, idx) => (
              <FeaturePoint
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
                size="lg"
                highlight={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ icon, title, desc, align = 'left', size = 'md', highlight = false }) => {
  const isBig = size === 'lg';
  
  const bgClass = highlight 
    ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] text-white shadow-[0_15px_40px_-20px_rgba(140,29,44,0.4)]'
    : 'bg-white shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]';
  
  const textColorClass = highlight ? 'text-white' : 'text-slate-900';
  const descColorClass = highlight ? 'text-white/90' : 'text-slate-600';
  const iconBgClass = highlight ? 'bg-white/20' : 'bg-[var(--brand-primary)]';
  
  return (
    <div className={`rounded-2xl ${bgClass} ${align === 'right' ? 'text-left lg:text-right' : 'text-left'} ${isBig ? 'px-5 py-4 sm:px-6 sm:py-5' : 'px-3 py-3'}`}>
      <div className={`mb-3 flex items-center gap-3 ${align === 'right' ? 'lg:justify-end' : ''} ${isBig ? 'gap-3' : 'gap-2'}`}>
        <span className={`flex items-center justify-center rounded-md ${iconBgClass} ${isBig ? 'h-8 w-8' : 'h-6 w-6'}`}>
          {icon}
        </span>
        <h3 className={`${isBig ? 'text-base font-bold' : 'text-sm font-semibold'} ${textColorClass}`}>{title}</h3>
      </div>
      <p className={`${isBig ? 'text-sm leading-relaxed' : 'text-xs leading-relaxed'} ${descColorClass}`}>{desc}</p>
    </div>
  );
};

export default SmartSchool;