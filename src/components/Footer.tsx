import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { footerData } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-secondary-500 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Cover</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {footerData.description}
              </p>
            </div>
            
            {/* Redes sociales */}
            <div className="space-y-3">
              {footerData.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                  isExternal
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 1 - Servicios */}
          <div>
            <h4 className="text-white font-medium mb-6">
              {footerData.services.title}
            </h4>
            <ul className="space-y-3">
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

          {/* Columna 2 - Empresa */}
          <div>
            <h4 className="text-white font-medium mb-6">
              {footerData.company.title}
            </h4>
            <ul className="space-y-3">
              {footerData.company.links.map((link) => (
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

          {/* Columna 3 - Legal */}
          <div>
            <h4 className="text-white font-medium mb-6">
              {footerData.legal.title}
            </h4>
            <ul className="space-y-3 mb-8">
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

            {/* Newsletter */}
            <div>
              <h5 className="text-white font-medium mb-4">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                  classNames={{
                    input: "text-sm",
                    inputWrapper: "bg-gray-700 border-gray-600 hover:border-gray-500"
                  }}
                />
                <Button
                  className="bg-white text-secondary-500 hover:bg-gray-100 px-6"
                  size="md"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright y empresa */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>{footerData.copyright.company}</p>
              <p>{footerData.copyright.text}</p>
            </div>

            {/* Información adicional */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>{footerData.additionalInfo.license}</p>
              <p>{footerData.additionalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
