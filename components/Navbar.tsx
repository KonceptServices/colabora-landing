"use client";

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { navbarData } from "@/data/content";
import { Link } from "@heroui/link";
import React from "react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const handleNavigation = (url: string) => {
    if (url.startsWith('#')) {
      // Scroll suave a la sección
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(url, '_blank');
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar 
      className={`fixed top-0 left-0 right-0 z-50 ${isMenuOpen ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`}
      maxWidth="full"
      height="85px"
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation={true}
    >
      <NavbarContent>
        {/* Botones de navegación - solo desktop */}
        <div className="hidden md:flex items-center space-x-3 w-full justify-end">
          {navbarData.buttons.map((button) => (
            <NavbarItem key={button.id}>
              <Button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  button.variant === 'primary'
                    ? 'bg-default-800/50 text-white hover:bg-default-800'
                    : 'bg-default-200/50 text-default-800 hover:bg-default-300'
                }`}
                onPress={() => handleNavigation(button.url)}
              >
                {button.text}
              </Button>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end" className="md:hidden text-white">
        <div>
          <NavbarMenuToggle />
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-black/20 backdrop-blur-md">
        {/* Elementos del menú móvil */}
        {navbarData.buttons.map((button) => (
          <NavbarMenuItem key={button.id}>
            <Link
              href={button.url}
              onPress={() => handleNavigation(button.url)}
              className="block w-full text-left text-white text-2xl font-bold py-3 transition-colors duration-200 hover:text-gray-300"
            >
              {button.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}