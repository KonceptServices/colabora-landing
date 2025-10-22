import { Link } from "@heroui/link";
import { footerData } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Paraninfo Business Center</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {footerData.description}
              </p>
            </div>
          </div>

          {/* Columna 1 - Servicios */}
          <div>
            <h4 className="text-white font-medium mb-4 md:mb-6">
              {footerData.services.title}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerData.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2 - Legal */}
          <div>
            <h4 className="text-white font-medium mb-4 md:mb-6">
              {footerData.legal.title}
            </h4>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {footerData.legal.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            {/* Copyright y empresa */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
              <p>{footerData.copyright.company}</p>
              <p>{footerData.copyright.text}</p>
            </div>

            {/* Información adicional */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
              <p>{footerData.additionalInfo.license}</p>
              <p>{footerData.additionalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
