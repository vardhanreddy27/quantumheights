import Image from "next/image";
import { useRef } from "react";
import { schoolInfo } from "@/constants/schoolData";

const CurvedImageMask = () => (
  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 380" preserveAspectRatio="none" style={{opacity: 0}}>
    <defs>
      <mask id="imageMask" x="0" y="0" width="640" height="380">
        <rect width="640" height="380" fill="white" />
        <path d="M 0,280 Q 160,320 320,300 T 640,280 L 640,0 L 0,0 Z" fill="black" />
      </mask>
    </defs>
  </svg>
);

export default function HeroBanner() {
  const videoRefs = useRef({});

  return (
    <section className="relative overflow-hidden  bg-[#f8fbff] ">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,61,109,0.1),transparent_40%),radial-gradient(circle_at_top_right,rgba(212,161,31,0.15),transparent_45%)]" />

      <div className="relative mx-auto ">
        <div className="overflow-hidden  ">
          <div className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen">
            <Image
              src="/herobg.jpg"
              alt="Happy children learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_top]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(248,251,255,0.96)_8%,rgba(248,251,255,0.88)_46%,rgba(248,251,255,0.22)_74%,rgba(248,251,255,0)_100%)] sm:bg-[linear-gradient(100deg,rgba(248,251,255,0.95)_0%,rgba(248,251,255,0.9)_40%,rgba(248,251,255,0.2)_68%,rgba(248,251,255,0)_100%)]" />

            <div className="relative z-10 flex items-end px-4 pb-12 sm:min-h-[520px] sm:items-center sm:px-8 sm:pb-0 md:px-10 lg:px-12">
              <div className="mt-64 max-w-xl sm:mt-0">
                <span className="inline-flex rounded-full border border-[var(--brand-secondary)]/40 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-primary)]">
                  {schoolInfo.name}
                </span>

                <h1 className="mt-5 text-3xl font-black leading-tight text-p text-[var(--brand-primary)]  sm:text-4xl lg:text-5xl">
                  Where Learning Comes to Life
                </h1>

                <p className="mt-4 text-base text-slate-900 sm:hidden">
                  Hands-on learning and smart classrooms that make every child future-ready.
                </p>
                <p className="mt-4 hidden text-base text-slate-900 sm:block sm:text-lg">
                  Beyond the textbook, we integrate hands-on labs and real-world problem solving into every grade level. From building foundational literacy in early years to mastering advanced analytical thinking in secondary school, our education model is designed to make students future-ready, not just exam-ready.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href="#Programs"
                    className="w-full rounded-full border border-[var(--brand-accent)]/30 bg-white px-3 py-3 text-center text-xs font-bold text-[var(--brand-accent)] sm:w-auto sm:px-6 sm:text-sm"
                  >
                    Explore Programs
                  </a>
                  <a
                    href="#contact"
                    className="w-full rounded-full bg-[var(--brand-primary)] px-3 py-3 text-center text-xs font-bold text-white shadow-[0_10px_24px_rgba(140,29,44,0.25)] sm:w-auto sm:px-6 sm:text-sm"

                  >
                    Contact for Admission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-4 mt-4 grid gap-4 pb-8 sm:mx-6 sm:-mt-40 md:grid-cols-2 md:gap-5 lg:mx-8 lg:-mt-56 lg:grid-cols-3">
          {[
            {
              title: "PRE SCHOOL",
              subtitle: "Nursery, L.K.G & U.K.G",
              tone: "bg-[linear-gradient(180deg,#b84c3f_0%,#a63d32_100%)]",
              img: "/englishlab.jpg",
              video: "/englishlabvideo.mov",
              alt: "Preschool activity class",
              objPos: "object-top",
              mediaShift: "mt-2",
            },
            {
              title: "PRIMARY SCHOOL",
              subtitle: "Grade I to V",
              tone: "bg-[linear-gradient(180deg,#1e4a8b_0%,#123d6d_100%)]",
              img: "/Mathlab.jpg",
              video: "/mathslab.mov",
              alt: "Primary school math lab",
              objPos: "object-center",
              mediaShift: "",
            },
            {
              title: "HIGH SCHOOL",
              subtitle: "Grade VI to X",
              tone: "bg-[linear-gradient(180deg,#c9a22d_0%,#b89424_100%)]",
              img: "/studentsinclass.jpg",
              video: "/studentsinclassvideo.mov",
              alt: "High school students in class",
              objPos: "object-center",
              mediaShift: "",
            },
          ].map((item) => (
            <article
              key={item.title}
              className={`${item.tone} group flex flex-col overflow-hidden rounded-[1.8rem]`}
              onMouseEnter={() => {
                const video = videoRefs.current[item.title];
                if (video) {
                  video.currentTime = 0.01;
                  video.play().catch(() => {});
                }
              }}
              onMouseLeave={() => {
                const video = videoRefs.current[item.title];
                if (video) {
                  video.pause();
                  video.currentTime = 0.01;
                }
              }}
            >
              <div className="flex-1 px-5 pt-2 text-center text-white">
                <p className="text-base font-extrabold uppercase tracking-wide sm:text-lg">{item.title}</p>
              </div>

              <div className="relative overflow-hidden ">
                <div className="relative overflow-hidden" style={{clipPath: "polygon(0 4%, 2% 3%, 4% 4%, 6% 3%, 8% 4%, 10% 3%, 12% 4%, 14% 3%, 16% 4%, 18% 3%, 20% 4%, 22% 3%, 24% 4%, 26% 3%, 28% 4%, 30% 3%, 32% 4%, 34% 3%, 36% 4%, 38% 3%, 40% 4%, 42% 3%, 44% 4%, 46% 3%, 48% 4%, 50% 3%, 52% 4%, 54% 3%, 56% 4%, 58% 3%, 60% 4%, 62% 3%, 64% 4%, 66% 3%, 68% 4%, 70% 3%, 72% 4%, 74% 3%, 76% 4%, 78% 3%, 80% 4%, 82% 3%, 84% 4%, 86% 3%, 88% 4%, 90% 3%, 92% 4%, 94% 3%, 96% 4%, 98% 3%, 100% 4%, 100% 96%, 98% 97%, 96% 96%, 94% 97%, 92% 96%, 90% 97%, 88% 96%, 86% 97%, 84% 96%, 82% 97%, 80% 96%, 78% 97%, 76% 96%, 74% 97%, 72% 96%, 70% 97%, 68% 96%, 66% 97%, 64% 96%, 62% 97%, 60% 96%, 58% 97%, 56% 96%, 54% 97%, 52% 96%, 50% 97%, 48% 96%, 46% 97%, 44% 96%, 42% 97%, 40% 96%, 38% 97%, 36% 96%, 34% 97%, 32% 96%, 30% 97%, 28% 96%, 26% 97%, 24% 96%, 22% 97%, 20% 96%, 18% 97%, 16% 96%, 14% 97%, 12% 96%, 10% 97%, 8% 96%, 6% 97%, 4% 96%, 2% 97%, 0 96%"}}>
                  {item.video ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[item.title] = el;
                      }}
                      onLoadedData={(event) => {
                        const video = event.currentTarget;
                        video.currentTime = 0.01;
                        video.pause();
                      }}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className={`pointer-events-none h-[15rem] w-full object-cover ${item.objPos} ${item.mediaShift} sm:h-[16rem]`}
                    >
                      <source src={item.video} />
                    </video>
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={640}
                      height={350}
                      priority
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className={`h-[15rem] w-full object-cover ${item.objPos} ${item.mediaShift} sm:h-[16rem]`}
                    />
                  )}
                </div>
              </div>

              <div className="px-5 pb-2 text-center text-white">
                <p className="text-sm font-medium text-white/95 sm:text-base">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
