import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { navbarData } from "@/data/content";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Texto del logo */}
              <span className="text-2xl font-medium text-white">Cover</span>
            </Link>
          </div>

          {/* Botones de navegación */}
          <div className="flex items-center space-x-3 hidden md:flex">
            {navbarData.buttons.map((button) => (
              <Button
                key={button.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  button.variant === 'primary'
                    ? 'bg-default-800/50 text-white hover:bg-default-800'
                    : 'bg-default-200/50 text-default-800 hover:bg-default-300'
                }`}
                onPress={() => {
                  if (button.url.startsWith('#')) {
                    // Scroll suave a la sección
                    const element = document.querySelector(button.url);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.open(button.url, '_blank');
                  }
                }}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}