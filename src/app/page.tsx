import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <main> 
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </main>
  );
}
