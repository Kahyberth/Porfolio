import { Contact } from "@/components/Contact";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Aboutme } from "@/components/Aboutme";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </main>
  );
}
