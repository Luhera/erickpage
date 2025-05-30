import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/favicon/Made with insMind-web-app-manifest-512x512.png";

export function NavBar() {
  return (
    <header className="bg-[#001F3F] 5f1e6] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo do escritório"
            height={100}
            className="object-contain cursor-pointer"
          />
        </Link>

        <nav>
          <ul className="flex space-x-6 text-[#f5f1e6] font-medium">
            <li>
              <a href="#About" className="hover:text-[#c8a96a] transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#Areas" className="hover:text-[#c8a96a] transition">
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a href="#Servicos" className="hover:text-[#c8a96a] transition">
                Serviços
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
