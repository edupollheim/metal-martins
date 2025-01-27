import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Quem Somos' },
    { href: '#contact', label: 'Contato' },
    { href: '#solutions', label: 'Soluções' },
    { href: '#location', label: 'Onde Estamos' },
    { href: '#obras', label: 'Obras' },
    { href: '#trabalhe-conosco', label: 'Trabalhe Conosco' },
  ];

  return (
    <header className="w-full bg-slate-950">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Image 
          src="/logo sem nome.png" 
          alt="Logo da Empresa" 
          width={300}
          height={300}
          className="h-12 w-auto p-[-1rem] hover:cursor-pointer hover:brightness-125"
          onClick={() => window.location.href = '/'} 
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-200 hover:brightness-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-950 pb-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-200 hover:brightness-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}