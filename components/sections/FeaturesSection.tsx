"use client";

import { useState, useEffect, useRef } from "react";
import { featuresData } from "@/data/content";

export default function FeaturesSection() {
  const [mobileActiveStep, setMobileActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Listener para scroll horizontal en móvil
  useEffect(() => {
    const handleHorizontalScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 320; // w-80 = 320px
      const gap = 16; // gap-4 = 16px
      const totalCardWidth = cardWidth + gap;
      
      // Calcular qué card está más visible
      const cardIndex = Math.round(scrollLeft / totalCardWidth);
      const clampedIndex = Math.max(0, Math.min(featuresData.length - 1, cardIndex));
      
      if (clampedIndex !== mobileActiveStep) {
        setMobileActiveStep(clampedIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleHorizontalScroll);
      return () => container.removeEventListener('scroll', handleHorizontalScroll);
    }
  }, [mobileActiveStep]);

  // Función para formatear números con una fuente diferente
  const formatDescriptionWithNumbers = (text: string) => {
    // Dividir el texto por números y mantener los números
    const parts = text.split(/(\d+)/);
    return parts.map((part, index) => {
      // Si es un número, envolverlo en un span con clase de fuente monospace
      if (/^\d+$/.test(part)) {
        return (
          <span key={index} className="font-serif" style={{ fontSize: '1rem' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="relative pt-16 md:pt-32"
    >      
      <div className="container mx-auto max-w-xl px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal w-full text-center">Todo lo que necesitas para trabajar de forma <p className="font-poppins text-2xl md:text-xl lg:text-4xl font-semibold leading-tight">profesional y cómoda.</p></h2>
      </div>
      
      {/* Vista móvil - Scroll horizontal */}
      <div className="block md:hidden">
        <div className="px-4 py-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {featuresData.map((feature, index) => (
              <div
                key={feature.id}
                className="flex-shrink-0 w-80 bg-secondary-500 rounded-2xl overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="h-64 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-medium mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {formatDescriptionWithNumbers(feature.description)}
                  </p>
                  {feature.additionalPricing && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <p className="text-xs  mb-2">Horas adicionales</p>
                      <div className="text-xs">
                        <p>{feature.additionalPricing.hourly}</p>
                        <p>{feature.additionalPricing.daily}</p>
                        <p>{feature.additionalPricing.bonus}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores de progreso para móvil */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuresData.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === mobileActiveStep 
                    ? 'w-8 bg-secondary-500' 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vista desktop - Scroll vertical con imágenes alternadas */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-20">
          {featuresData.map((feature, index) => {
            const isEven = index % 2 === 0;
            const isImageLeft = isEven;
            
            // Variar tamaños para hacerlo más dinámico
            const sizeVariation = index % 3;
            const imageSize = sizeVariation === 0 ? 'md:w-[45%]' : sizeVariation === 1 ? 'md:w-[50%]' : 'md:w-[55%]';
            const textSize = sizeVariation === 0 ? 'md:w-[55%]' : sizeVariation === 1 ? 'md:w-[50%]' : 'md:w-[45%]';
            const maxHeight = sizeVariation === 0 ? 'max-h-[550px]' : sizeVariation === 1 ? 'max-h-[650px]' : 'max-h-[600px]';
            const aspectRatio = sizeVariation === 0 ? 'aspect-[4/5]' : sizeVariation === 1 ? 'aspect-[3/4]' : 'aspect-[5/6]';
            
            return (
              <div 
                key={feature.id}
                className="mb-20 md:mb-32 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-stretch ${
                  isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Imagen */}
                  <div className={`w-full ${imageSize} ${aspectRatio} ${maxHeight} overflow-hidden rounded-3xl md:rounded-[2rem] shadow-2xl transition-transform duration-300 hover:scale-[1.02]`}>
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-3xl md:rounded-[2rem]"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                  </div>

                  {/* Contenido de texto */}
                  <div className={`w-full ${textSize} ${aspectRatio} ${maxHeight} flex items-center justify-center bg-secondary-500 rounded-3xl md:rounded-[2rem] p-8 md:p-14 shadow-2xl`}>
                    <div className="max-w-xl text-white">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-5 md:mb-7 leading-tight">
                        {feature.title}
                      </h2>
                      <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                        {formatDescriptionWithNumbers(feature.description)}
                      </p>
                      {feature.additionalPricing && (
                        <div className="mt-6 pt-5 border-t border-white/10">
                          <p className="text-sm md:text-base mb-3">Horas adicionales:</p>
                          <div className="text-sm md:text-base">
                            <p>{feature.additionalPricing.hourly}</p>
                            <p>{feature.additionalPricing.daily}</p>
                            <p>{feature.additionalPricing.bonus}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
