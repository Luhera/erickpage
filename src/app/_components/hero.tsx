import erickimg from "../../../public/fotos-perfil/WhatsApp Image 2025-05-28 at 14.22.00 (1).jpeg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#dcd4c1] relative overflow-hidden">
      <div className="absolute inset-0 md:hidden ">
        <Image
          src={erickimg}
          alt="Foto de Erick em perfil"
          fill
          className="object-cover object-[center_50%] opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10 px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-[#002B5B] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Defendendo <br />
            Seus Direitos <br />
            com Excelência <br />e Ética
          </h1>

          <p className="text-lg md:text-xl text-[#333]">
            Especialista em Direito Civil e Trabalhista
          </p>

          <a
            href="#"
            className="bg-[#c8a96a] text-white font-semibold px-6 py-3 inline-block hover:bg-[#b28a52] transition"
          >
            Entre em Contato
          </a>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative w-[300px] md:w-[450px] lg:w-[400px] h-[400px]">
            <Image
              src={erickimg}
              alt="Foto de Erick em perfil"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
