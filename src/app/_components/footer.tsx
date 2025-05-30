"use client";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    descricao: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${formData.nome}.\nMeu contato: ${formData.contato}.\nDescrição do problema: ${formData.descricao}`;
    const whatsappURL = `https://wa.me/558199144073?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    alert("Formulário enviado para o WhatsApp.");
    setFormData({ nome: "", contato: "", descricao: "" });
  };

  return (
    <footer className="bg-[#001F3F] text-[#F0E68C] py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif text-[#FFD700] mb-4">Serviços</h3>
          <ul className="space-y-2">
            <li>Consultoria Jurídica</li>
            <li>Defesa Técnica</li>
            <li>Acompanhamento Processual</li>
            <li>Pareceres Jurídicos</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
            Redes Sociais
          </h3>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://wa.me/558199144073?text=Olá vim pelo site gostaria de mais informações."
              rel="noopener noreferrer"
              className="hover:text-[#c8a96a] transition"
              aria-label="WhatsApp"
            >
              <WhatsappLogoIcon className="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/erickheraclio.adv/"
              rel="noopener noreferrer"
              className="hover:text-[#c8a96a] transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/SEUPERFIL"
              rel="noopener noreferrer"
              className="hover:text-[#c8a96a] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div id="Contato">
          <h3 className="text-2xl font-serif text-[#FFD700] mb-4">
            Contato Rápido
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="p-2 rounded bg-[#F0E68C] text-[#001F3F] placeholder-[#001F3F]"
            />
            <input
              type="text"
              name="contato"
              value={formData.contato}
              onChange={handleChange}
              placeholder="Email ou WhatsApp"
              required
              className="p-2 rounded bg-[#F0E68C] text-[#001F3F] placeholder-[#001F3F]"
            />
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva brevemente seu problema"
              required
              className="p-2 rounded bg-[#F0E68C] text-[#001F3F] placeholder-[#001F3F] h-24"
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-[#001F3F] px-4 py-2 rounded hover:bg-[#c8a96a] transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center border-t border-[#F0E68C] pt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} ANDERSON HENRIQUE LUCENA DO NASCIMENTO
          HERACLIO - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
