import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDevider from "@/components/SectionDevider";
import Skills from "@/components/Skills";

export default function Home() {
   return (
      <main className="flex flex-col items-center justify-center px-4">
         <Intro />
         <SectionDevider />
         <About />
         <SectionDevider />
         <Projects />
         <SectionDevider />
         <Skills />
         <SectionDevider />
         <Experience />
         <Contact />
         <Footer />
      </main>
   );
}
