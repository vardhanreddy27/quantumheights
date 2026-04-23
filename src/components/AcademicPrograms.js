import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

function AnimatedWords({ text, animateKey, className = "", delayStep = 28, baseDelay = 0 }) {
  const words = text.split(" ");

  return (
    <span key={animateKey} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="word-shell" style={{ animationDelay: `${baseDelay + index * delayStep}ms` }}>
          <span className="word-core">{word}</span>{" "}
        </span>
      ))}
    </span>
  );
}

export default function AcademicPrograms() {
  const sectionRef = useRef(null);
  const maxStepReachedRef = useRef(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = useMemo(
    () => [
      {
        phase: "Experience",
        title: "1. Hands-On First",
        description:
          "We start with hands-on experiments. By doing first, students build a real mental map of concepts before touching a textbook.",
        topImage: "/physicslab.jpeg",
        bottomImage: "/mathslabsection.jpg",
        topCardTitle: "Quick Discovery",
        topCardText: "Students quickly discover what they enjoy and where they naturally excel through lab activities.",
        midCardTitle: "Talent Discovery",
        midCardText:
          "Our labs act as a mirror for your child’s potential by revealing early strengths in logic and creativity.",
        topCardBg: "rgba(18, 61, 109, 0.14)",
        topTitleColor: "text-[var(--brand-accent)]",
        topTextColor: "text-slate-700",
        midCardBg: "rgba(212, 161, 31, 0.24)",
        midTitleColor: "black",
        midTextColor: "text-slate-700",
      },
      {
        phase: "Understand",
        title: "2. Interactive Classes",
        description:
          "Mentors then connect those practical experiences to theory in our smart classrooms, turning curiosity into deep academic knowledge.",
        topImage: "/classroom2.jpeg",
        bottomImage: "/classroom.jpeg",
        topCardTitle: "Concept Clarity",
        topCardText: "Every concept is connected to something students have already experienced with their own hands.",
        midCardTitle: "Live Discussion",
        midCardText:
          "Students actively question, explain, and collaborate so understanding becomes durable and exam-ready.",
        topCardBg: "rgba(212, 161, 31, 0.3)",
        topTitleColor: "text-[var(--brand-primary)]",
        topTextColor: "text-slate-700",
        midCardBg: "rgba(18, 61, 109, 0.2)",
        midTitleColor: "text-[var(--brand-accent)]",
        midTextColor: "text-slate-700",
      },
      {
        phase: "Excel",
        title: "3. Academic Excellence",
        description:
          "Because they have seen it and lived it, students approach assessments with confidence, clarity, and complete understanding.",
        topImage: "/students.jpeg",
        bottomImage: "/exam.jpeg",
        topCardTitle: "Exam Confidence",
        topCardText: "Concept-backed preparation helps students perform calmly under pressure.",
        midCardTitle: "Future Ready",
        midCardText:
          "From classroom mastery to competitive exams, students grow with a strong base and sharp thinking.",
        topCardBg: "rgba(18, 61, 109, 0.16)",
        topTitleColor: "text-[var(--brand-accent)]",
        topTextColor: "text-slate-700",
        midCardBg: "#7ec1ff82",
        midTitleColor: "black",
        midTextColor: "text-slate-700",
      },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 640) {
        maxStepReachedRef.current = 0;
        if (activeStep !== 0) setActiveStep(0);
        return;
      }

      const node = sectionRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top > vh * 0.65) {
        maxStepReachedRef.current = 0;
        setActiveStep(0);
        return;
      }

      if (rect.bottom < vh * 0.2) return;

      const scrollSpan = Math.max(node.offsetHeight - vh * 0.6, 1);
      const rawProgress = (vh * 0.18 - rect.top) / scrollSpan;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      let candidate = 0;
      if (progress >= 0.56) candidate = 2;
      else if (progress >= 0.26) candidate = 1;

      maxStepReachedRef.current = Math.max(maxStepReachedRef.current, candidate);
      if (activeStep !== maxStepReachedRef.current) {
        setActiveStep(maxStepReachedRef.current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeStep]);

  const current = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      id="academics" // For About/New Way of Learning
      className="mx-auto bg-white px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:min-h-[380vh] lg:px-8 lg:pt-40"
    >
      <div className="grid items-stretch gap-10 lg:sticky lg:top-32 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl font-black leading-[0.95] tracking-tight text-[var(--brand-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
              New Way of Learning
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-base">
              {steps.map((step, index) => (
                <span
                  key={step.phase}
                  className={`text-slate-500 sm:${index === activeStep ? "text-[var(--brand-primary)]" : "text-slate-400"} sm:transition-colors sm:duration-300`}
                >
                  {step.phase}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const isVisible = index <= activeStep;
              const isActive = index === activeStep;
              const isLast = index === steps.length - 1;
              const borderTone =
                index === 0 ? "border-[var(--brand-secondary)]" : index === 1 ? "border-[var(--brand-accent)]" : "border-[var(--brand-primary)]";

              return (
                <div key={step.title} className="group flex flex-col items-center">
                  <div
                    className={`w-full max-h-[240px] translate-y-0 overflow-hidden rounded-2xl border border-[var(--brand-secondary)]/20 bg-white/90 opacity-100 shadow-sm sm:transition-all sm:duration-700 ${
                      isVisible
                        ? "sm:max-h-[240px] sm:translate-y-0 sm:opacity-100"
                        : "sm:max-h-0 sm:-translate-y-2 sm:opacity-0"
                    }`}
                  > 
                    <div className={`border-l-4 ${borderTone} p-4 sm:p-5`}>
                      <p className={`text-lg font-extrabold sm:hidden ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                        {step.title}
                      </p>
                      <AnimatedWords
                        text={step.title}
                        animateKey={`${step.title}-${isVisible ? "on" : "off"}`}
                        className={`hidden text-lg font-extrabold sm:block sm:text-xl ${isActive ? "text-slate-900" : "text-slate-700"}`}
                        delayStep={24}
                      />
                      <p className="mt-2 block text-sm leading-relaxed text-slate-600 sm:hidden">
                        {step.description}
                      </p>
                      <AnimatedWords
                        text={step.description}
                        animateKey={`${step.description.slice(0, 20)}-${isVisible ? "on" : "off"}`}
                        className="mt-2 hidden text-sm leading-relaxed text-slate-600 sm:block sm:text-base"
                        delayStep={16}
                        baseDelay={90}
                      />
                    </div>
                  </div>

                  {/* Scroll Down Indicator */}
                  {!isLast && (
                    <div 
                      className={`hidden sm:flex flex-col items-center mt-4 transition-all duration-700 delay-500 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">
                        Scroll Down
                      </span>
                      <svg 
                        className="w-5 h-5 text-slate-300 animate-bounce-slow" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Images and Feature Cards */}
        <div className="grid h-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 sm:gap-6">
            <article className="relative min-h-[320px] flex-1 overflow-hidden rounded-[2rem] bg-[var(--brand-accent)]/8 shadow-xl sm:min-h-[400px] sm:rounded-[2.5rem]">
              <div key={current.topImage} className="absolute inset-0 animate-wipe-up">
                <Image src={current.topImage} alt="Practical Labs" fill className="object-cover" />
              </div>
            </article>

            <article
              className="rounded-[2rem] p-5 shadow-sm transition-colors duration-500 sm:rounded-[2.5rem] sm:p-8"
              style={{ backgroundColor: current.midCardBg }}
            >
              <div key={current.midCardTitle} className="animate-fade-up">
                <p className={`text-xl font-black sm:hidden ${current.midTitleColor}`}>{current.midCardTitle}</p>
                <AnimatedWords
                  text={current.midCardTitle}
                  animateKey={`mid-title-${activeStep}`}
                  className={`hidden text-xl font-black sm:block sm:text-2xl ${current.midTitleColor}`}
                  delayStep={24}
                />
                <p className={`mt-3 text-sm font-medium leading-relaxed sm:hidden ${current.midTextColor}`}>{current.midCardText}</p>
                <AnimatedWords
                  text={current.midCardText}
                  animateKey={`mid-text-${activeStep}`}
                  className={`mt-3 hidden text-sm font-medium leading-relaxed sm:block ${current.midTextColor}`}
                  delayStep={14}
                  baseDelay={80}
                />
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <article
              className={`rounded-[2rem] p-5 shadow-sm transition-colors duration-500 sm:rounded-[2.5rem] sm:p-8 ${
                current.topCardTitle === "Exam Confidence" ? "hidden sm:block" : ""
              }`}
              style={{ backgroundColor: current.topCardBg }}
            >
              <div key={current.topCardTitle} className="animate-fade-up">
                <p className={`text-xl font-black sm:hidden ${current.topTitleColor}`}>{current.topCardTitle}</p>
                <AnimatedWords
                  text={current.topCardTitle}
                  animateKey={`top-title-${activeStep}`}
                  className={`hidden text-xl font-black sm:block sm:text-2xl ${current.topTitleColor}`}
                  delayStep={24}
                />
                <p className={`mt-3 text-sm font-medium leading-relaxed sm:hidden ${current.topTextColor}`}>{current.topCardText}</p>
                <AnimatedWords
                  text={current.topCardText}
                  animateKey={`top-text-${activeStep}`}
                  className={`mt-3 hidden text-sm font-medium leading-relaxed sm:block ${current.topTextColor}`}
                  delayStep={14}
                  baseDelay={80}
                />
              </div>
            </article>

            <article className="relative min-h-[260px] flex-[1.4] overflow-hidden rounded-[2rem] bg-[var(--brand-accent)]/8 shadow-xl sm:min-h-[280px] sm:rounded-[2.5rem]">
              <div key={current.bottomImage} className="absolute inset-0 animate-wipe-up">
                <Image src={current.bottomImage} alt="Smart Classrooms" fill className="object-cover" />
              </div>
            </article>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-up {
          animation: fadeUp 760ms cubic-bezier(0.2, 0.65, 0.2, 1) both;
        }

        .animate-wipe-up {
          animation: wipeUp 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .word-shell {
          display: inline-block;
          overflow: hidden;
          clip-path: inset(0 0 100% 0);
          animation: wordClip 560ms cubic-bezier(0.2, 0.72, 0.2, 1) both;
          vertical-align: bottom;
          will-change: clip-path, transform, opacity;
        }

        .word-core {
          display: inline-block;
          transform: translateY(110%);
          opacity: 0;
          animation: wordRise 560ms cubic-bezier(0.2, 0.72, 0.2, 1) both;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(-15%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wipeUp {
          from {
            clip-path: inset(70% 0 0 0);
            opacity: 0.6;
          }
          to {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        @keyframes wordClip {
          from {
            clip-path: inset(0 0 100% 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes wordRise {
          from {
            transform: translateY(110%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}