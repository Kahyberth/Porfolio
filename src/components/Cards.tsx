export function Cards() {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/granito.png"
          alt="Cafe granit marron"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Café granito marrón</h3>
          <p className="text-sm text-muted-foreground">
            Developed an e-commerce website for a startup coffee company,
            allowing them to display and sell products to the public. Integrated
            the store whit the WhatsApp API for direct communication whit the
            seller before purchase. Tech Stack: TypeScript, React 18, Git,
            Jotai, React Router, Axios, Pocketbase
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/Loan.png"
          alt="Loan Management System"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Loan Management System</h3>
          <p className="text-sm text-muted-foreground">
            Worked on a project for loan management that enabled downloading
            reports and making resource loans depending on access level, time,
            location, and priority. Tech Stack: TypeScript, React 18, Git,
            Telefunc, DrizzleORM, Postgres, Lucia, Vike-react, Zod, NanoId,
            Hono.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/farmaStore.png"
          alt="FarmaStore"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">FarmaStore, Microservices</h3>
          <p className="text-sm text-muted-foreground">
            Personal project where I focus on learning new concepts, introducing
            microservices, docker, AWS, sockets, authentication, etc. The
            general idea with this project is to learn more and more by
            introducing myself to topics that I want to learn. In this case, a
            FullStack E-commerce for a pharmacy.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/Linja.png"
          alt="Linja Game AI"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Linja Game IA</h3>
          <p className="text-sm text-muted-foreground">
            Second project done in Introduction to Artificial Intelligence at
            Universidad del Valle, where we applied the minimax algorithm in the
            game of Linja.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/Pokedex.png"
          alt="Pokedex API"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Pokedex API Nest</h3>
          <p className="text-sm text-muted-foreground">
            This project was done in order to strengthen the knowledge acquired
            while studying Nestjs, the project is an Api created from 0 inspired
            by the PokéApi api, which introduces issues of docker, dto, seed,
            validations, among others.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
