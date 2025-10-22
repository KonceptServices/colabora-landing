"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { tariffsData } from "@/data/content";

export default function TariffsSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="tariffs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Título principal */}
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-5xl w-full text-center pt-8 md:pt-16 pb-8 md:pb-16">Elige la tarifa que mejor se adapte <p className="font-poppins text-2xl md:text-4xl font-semibold leading-tight">a tus necesidades.</p></h2>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {tariffsData.cards.map((card, index) => {
            const isExpanded = expandedCards.includes(index);
            
            return (
              <div
                key={card.id}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 min-h-[400px] md:min-h-[500px] ${
                  isExpanded ? 'bg-gray-900' : ''
                }`}
                style={{
                  backgroundImage: !isExpanded ? `url(${card.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay oscuro cuando está expandido */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center p-4 md:p-8">
                    <div className="text-center text-white">
                      <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">{card.expandedTitle}</h3>
                      <div className="text-left text-sm md:text-base leading-relaxed opacity-90 max-w-sm">
                        {card.expandedDescription.split('\n').map((line, index) => (
                          <p key={index} className="mb-2">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Contenido normal */}
                {!isExpanded && (
                  <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 md:p-8">
                    <div className="text-white">
                      <p className="text-base md:text-lg font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Botón + */}
                <Button
                  isIconOnly
                  className={`absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                  onPress={() => toggleCard(index)}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`transition-transform duration-300 md:w-5 md:h-5 ${
                      isExpanded ? 'rotate-45' : ''
                    }`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
