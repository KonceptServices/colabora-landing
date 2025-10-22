import { Button } from "@heroui/button";
import { contactData } from "@/data/content";

export default function ContactSection() {
  return (
    <section id="contact" className="pb-16 pt-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        {/* Título principal */}
        <div className="mb-12 md:mb-16 max-w-sm mx-auto">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight">
            {contactData.title}
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium font-poppins leading-tight">
            {contactData.subtitle}
          </h3>
        </div>

        {/* Botones de contacto */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-2xl mx-auto">
          {/* Botón Schedule a Call */}
          <Button
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full min-w-[260px] md:min-w-[280px] h-14 md:h-16 flex items-center justify-between transition-all duration-300"
            onPress={() => window.open(contactData.scheduleCall.url, '_blank')}
          >
            <span className="flex-1 text-center font-poppins text-sm md:text-md">{contactData.scheduleCall.text}</span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center ml-3 md:ml-4">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-900 md:w-5 md:h-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
          </Button>

          {/* Botón Send Us a Message */}
          <Button
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full min-w-[260px] md:min-w-[280px] h-14 md:h-16 flex items-center justify-between transition-all duration-300"
            onPress={() => window.open(contactData.sendMessage.url, '_blank')}
          >
            <span className="flex-1 text-center font-poppins text-sm md:text-md">{contactData.sendMessage.text}</span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center ml-3 md:ml-4">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-900 md:w-5 md:h-5"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
