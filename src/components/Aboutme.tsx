import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function Aboutme() {
  return (
    <>
      <div className="md:px-6 lg:mx-80 lg:mt-80">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I’m Kahyberth, a Backend Developer with over 1 years of
                experience working with technologies like Node.js, Python, and
                both SQL and NoSQL databases. I specialize in building and
                optimizing robust, efficient systems, leveraging frameworks such
                as Express, Nest, Laravel and Django. I’m also well-versed in
                SCRUM methodologies for agile project management
              </p>
            </div>
            <Experience />
          </div>
        </section>
      </div>
      <Skills />
    </>
  );
}
