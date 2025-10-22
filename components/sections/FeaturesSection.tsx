"use client";

import { useState, useEffect, useRef } from "react";
import { featuresData } from "@/data/content";

export default function FeaturesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Calcular el progreso del scroll dentro de la sección
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight / 2 - sectionTop) / (sectionHeight - windowHeight)));
      
      // Determinar qué paso debe estar activo
      const stepIndex = Math.floor(scrollProgress * (featuresData.length - 1));
      const clampedIndex = Math.max(0, Math.min(featuresData.length - 1, stepIndex));
      
      if (clampedIndex !== activeStep) {
        setActiveStep(clampedIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep]);

  const currentStep = featuresData[activeStep];

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative min-h-[600vh] md:min-h-[900vh] -mb-16 md:-mb-32 lg:-mb-52 pt-16 md:pt-32"
    >      
      <div className="container mx-auto max-w-xl px-4 md:px-0 md:-mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal w-full text-center">Todo lo que necesitas para trabajar de forma <p className="font-poppins text-2xl md:text-xl lg:text-4xl font-semibold leading-tight">profesional y cómoda.</p></h2>
      </div>
      {/* Contenido fijo */}
      <div className="sticky top-0 h-screen p-2 md:p-4 py-10 md:py-16">
        <div className="gap-2 md:gap-4 p-6 md:p-10 pt-0 w-full h-full flex flex-col items-center bg-secondary-500 rounded-2xl md:rounded-3xl md:bg-transparent md:flex-row">
          {/* Lado izquierdo - Contenido de texto */}
          <div className={`h-full md:w-1/2 md:max-h-[700px] flex items-center justify-center bg-secondary-500 rounded-2xl md:rounded-3xl`}>
            <div className="max-w-xl px-4 md:px-12 text-white">
              <div className="mb-6 md:mb-8">
                <h2 className="text-4xl md:text-3xl lg:text-6xl font-medium mb-4 md:mb-6 leading-tight">
                  {currentStep.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-md lg:text-xl leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Indicadores de progreso */}
              <div className="flex space-x-1 md:space-x-2">
                {featuresData.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeStep 
                        ? 'w-6 md:w-8 bg-white' 
                        : index < activeStep 
                          ? 'w-3 md:w-4 bg-white/60' 
                          : 'w-3 md:w-4 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Contador */}
              <div className="mt-3 md:mt-4 lg:mt-8 text-xs md:text-sm text-gray-300">
                <span className="font-mono">
                  {String(activeStep + 1).padStart(2, '0')} / {String(featuresData.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Lado derecho - Imagen */}
          <div className="relative h-full w-full aspect-[3/4] md:w-1/2 md:max-h-[700px] overflow-hidden rounded-2xl md:rounded-3xl">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-xl md:rounded-2xl"
              style={{ backgroundImage: `url(${currentStep.image})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
