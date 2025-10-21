
import { heroData } from "@/data/content";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-start px-6 text-left">
        <h1 className="text-6xl font-medium mb-6 text-white">
          {heroData.title}
        </h1>
        <p className="text-lg mb-8 text-gray-100">{heroData.subtitle}</p>
      </div>
    </section>
  );
}
