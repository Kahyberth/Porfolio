import { Contact } from "@/components/Contact";
import { Porfolio } from "../components/Porfolio";
import { Projects } from "../components/Projects";
import { Aboutme } from "@/components/Aboutme";

export default function Home() {
  return (
    <main>
      <Porfolio />
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
