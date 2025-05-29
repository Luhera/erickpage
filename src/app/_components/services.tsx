"use client";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scale,
  Gavel,
  Handshake,
} from "lucide-react";
import { title } from "process";

const services = [
  {
    title: "Direito Trabalhista",
    description:
      "Proteção dos direitos dos trabalhadores e resolução de conflitos com justiça.",
    icon: <Gavel />,
    linkText:
      "Olá, vi no site sobre Direito do Trabalhista gostaria de saber mais.",
  },
  {
    title: "Direito Penal",
    description:
      "Defesa estratégica e firme, sempre respeitando os direitos fundamentais.",
    icon: <Scale />,
    linkText: "Olá, vi no site sobre Direito Penal gostaria de saber mais.",
  },
  {
    title: "Direito do Consumidor",
    description:
      "Apoio na correção de abusos e desequilíbrios nas relações de consumo.",
    icon: <Handshake />,
    linkText:
      "Olá, vi no site sobre Direito do Consumidor gostaria de saber mais.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  return (
    <section className="bg-[#dcd4c1] py-16">
      <div className="container mx-auto px-4 ite">
        <h2
          id="Areas"
          className="text-4xl font-bold mb-12 r text-center text-[#002B5B]"
        >
          Áreas de Atuação
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((items, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%]min-w-0 md:flex-[0_0_calc(100%/3)] px-3 "
                >
                  <article className="bg-[#001F3F] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{items.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {items.title}
                          </h3>
                          <p className="text-[#F0E68C] text-sm select-none   ">
                            {items.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center">
                      <a
                        target="blank"
                        href={`https://wa.me/558199144073?text=Olá vim pelo site gostaria de mais informações sobre ${items.title}`}
                        className="flex items-center justify-center gap-2 hover:bg-[#F0E68C] px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogoIcon className="w-5 h-5 " />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
