export default function SectionHeading({ eyebrow, title, subtitle, light = false, eyebrowBig = false }) {
  return (
    <div className="max-w-3xl">
      <span
        className={`inline-flex ${
          eyebrowBig
            ? "text-3xl font-extrabold tracking-tight text-[var(--brand-primary)] sm:text-4xl lg:text-5xl"
            : `rounded-full px-3 py-1 text-xs font-semibold tracking-wider ${
                light ? "text-white ring-1" : "text-[var(--brand-primary)] ring-1"
              }`
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-extrabold leading-tight md:text-4xl ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base md:text-lg ${light ? "" : ""}`}>
        {subtitle}
      </p>
    </div>
  );
}
