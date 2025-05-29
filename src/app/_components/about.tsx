import erickimg from '../../../public/fotos-perfil/WhatsApp Image 2025-05-28 at 14.22.00 (2).jpeg'
import Image from 'next/image'
export function About() {
  return (
    <section id='About' className="bg-[#f5f1e6]">

    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div className="flex justify-center">
          <Image
            src={erickimg}
            alt='foto de erick em perfil'
            className='object-contain rounded-md'
            fill
          />
        </div>

        <div>
          <h2 className="text-3xl font-serif text-[#002B5B] mb-4">Sobre</h2>
          <p className="text-gray-700 leading-relaxed">
            João Silva, um graduado em Direito pela Universidade de São Paulo, atua com excelência e ética nas áreas de Direito Civil e Trabalhista. Ao longo dos anos, construiu uma reputação sólida, representando clientes com justiça e responsabilidade.
          </p>
        </div>
      </div>

    </section>
    

  )
}