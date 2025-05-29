import erickimg from "../../../public/fotos-perfil/WhatsApp Image 2025-05-28 at 14.22.00.jpeg";
import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#001F3F]">
      <div className="container mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[400px] flex justify-center">
          <Image
            src={erickimg}
            alt="foto de erick perfil"
            fill
            quality={100}
            priority
            className="object-contain rounded-md"
          />
        </div>

        <div>
          <h2 id="About" className="text-3xl font-serif text-[#FFD700] mb-4">
            Sobre
          </h2>
          <p className="text-[#F0E68C] leading-relaxed mb-6">
            Olá, sou Erick Heraclio, advogado formado em 2024 pela Faculdade
            Nova Roma, e atuo com um compromisso firme: oferecer uma advocacia
            ética, empática e verdadeiramente próxima de quem precisa. Acredito
            que cada pessoa traz consigo uma história única — por isso, minha
            atuação é sempre técnica, mas também humanizada e individualizada.
          </p>
          <h3 className="text-2xl font-serif text-[#FFD700] mb-2">Missão</h3>
          <p className="text-[#F0E68C] leading-relaxed mb-6">
            Minha missão é facilitar o acesso à justiça com acolhimento, clareza
            e responsabilidade, cuidando de cada caso com o olhar atento que ele
            merece. Seja um processo judicial ou uma simples dúvida, aqui o
            atendimento é direto, transparente e feito com escuta ativa.
          </p>
          <a
            target="blank"
            href={`https://wa.me/558199144073?text=Olá vim pelo site gostaria de mais informações.`}
            className="bg-[#c8a96a] text-white font-semibold px-6 py-3 inline-block hover:bg-[#b28a52] transition"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
