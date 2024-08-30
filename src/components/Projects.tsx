import { Cards } from "@/components/Cards";

export function Projects() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 lg:mx-40">
            <div className="flex flex-col items-center justify-center space-y-4 text-center m-0">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl m-0">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on.
                </p>
              </div>
            </div>
              <Cards />
          </div>
        </section>
    )
}