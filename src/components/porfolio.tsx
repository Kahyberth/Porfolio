

export function Porfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Kahyberth Gonzalez
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm a Backend Developer with a passion for building efficient
                  and scalable server-side applications.
                </p>
              </div>
            </div>
            <img
              src="/aboutme.webp"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
