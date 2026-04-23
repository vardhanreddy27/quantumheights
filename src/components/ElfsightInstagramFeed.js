// ElfsightInstagramFeed.js
// Embeds the Elfsight Instagram Feed widget
import { useEffect } from "react";

export default function ElfsightInstagramFeed() {
  useEffect(() => {
    // Only add the script if it hasn't been added yet
    if (!document.getElementById("elfsight-platform-script")) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = "elfsight-platform-script";
      document.body.appendChild(script);
    }
    // Hide Elfsight branding if possible
    const style = document.createElement("style");
    style.innerHTML = `.elfsight-app [class*='eapps-widget-toolbar'], .elfsight-app [class*='eapps-link'] { display: none !important; }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <section className="relative z-10 mx-auto mb-12 max-w-7xl mt-44  rounded-3xl border border-[var(--brand-secondary)]/20 bg-white/90 px-4 py-10 shadow-lg sm:px-8">
    
      <div className="w-full flex justify-center ">
        <div className="elfsight-app-43f05709-c75e-46d9-8bde-8403cf5c07f8 w-full" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
