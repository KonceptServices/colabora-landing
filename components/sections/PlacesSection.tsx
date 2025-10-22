"use client";

import { useState } from "react";
import { placesData } from "@/data/content";

export default function PlacesSection() {
  const [selectedPlace, setSelectedPlace] = useState<typeof placesData.places[0] | null>(null);

  const openModal = (place: typeof placesData.places[0]) => {
    setSelectedPlace(place);
  };

  const closeModal = () => {
    setSelectedPlace(null);
  };

  return (
    <>
      <section id="places" className="py-4 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Título principal */}
          <div className="container mx-auto max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl w-full text-center">
              Descubre nuestros{" "}
              <p className="font-poppins text-2xl md:text-4xl font-semibold leading-tight">
                espacios de trabajo.
              </p>
            </h2>
          </div>

          {/* Grid de espacios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {placesData.places.map((place, index) => (
              <div
                key={place.id}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{
                  minHeight: index === 0 ? '300px' : '400px',
                }}
                onClick={() => openModal(place)}
              >
                {/* Imagen de fondo */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${place.image})`,
                  }}
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <h3 className="text-white text-2xl lg:text-3xl font-medium">
                    {place.name}
                  </h3>
                </div>

                {/* Icono de ampliar */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                    className="md:w-4 md:h-4"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPlace && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[95vh] md:max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-8 md:-top-12 right-0 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2"
                className="md:w-5 md:h-5"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Imagen ampliada */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full h-auto max-h-[85vh] md:max-h-[80vh] object-cover"
              />
              
              {/* Información del lugar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                  {selectedPlace.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

