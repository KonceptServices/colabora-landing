
import { heroData } from "@/data/content";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute block md:hidden inset-0"
        style={{
          backgroundImage: `url(/heroVertical.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url(/heroHorizontal.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Logo */}
      <div className="absolute top-7 sm:left-16 left-6">
        {/* Texto del logo */}
        <span className="text-3xl font-black text-white">PBC</span>
      </div>
      <div className="relative z-10 flex w-full sm:px-16 px-6 flex-col items-start text-left">
        <h1 
          className="text-6xl font-medium mb-6 text-white"
          style={{ textShadow: "0 0 30px rgba(0, 0, 0, 0.9)" }}
        >
          {heroData.title}
        </h1>
        <p 
          className="text-xl mb-8 text-default-100"
          style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.9)" }}
        >
          {heroData.subtitle}
        </p>
      </div>
    </section>
  );
}
