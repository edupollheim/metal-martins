import Image from 'next/image';

export default function Header() {
    return (
      <header className="w-full bg-slate-950">
        <div className="container mx-auto flex justify-between items-center p-4">
        <Image 
          src="/logo sem nome.png" 
          alt="Logo da Empresa" 
          width={300} // Ajuste a largura
          height={300} // Ajuste a altura
          className="h-12 w-auto p-[-1rem] hover:cursor-pointer hover:brightness-125" // Adicione classes adicionais, se necessário
          onClick={() => window.location.href = '/'} // Adicione um link para a imagem
        />
          <nav className="flex space-x-4">
            <a href="#home" className="text-gray-200 hover:brightness-200">
              Home
            </a>
            <a href="#about" className="text-gray-200 hover:brightness-200">
              Quem Somos
            </a>
            <a href="#contact" className="text-gray-200 hover:brightness-200">
              Contato
            </a>
            <a href="#solutions" className="text-gray-200 hover:brightness-200">
              Soluções
            </a>
            <a href="#location" className="text-gray-200 hover:brightness-200">
              Onde Estamos
            </a>
            <a href="#obras" className="text-gray-200 hover:brightness-200">
              Obras
            </a>
            <a href="#trabalhe-conosco" className="text-gray-200 hover:brightness-200">
              Trabalhe Conosco
            </a>
          </nav>
        </div>
      </header>
    );
  }
  