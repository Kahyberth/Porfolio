export function Experience() {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Experience
      </h2>
      <div className="grid gap-4">
        <div>
          <h3 className="text-xl font-bold">FarmaStore</h3>
          <p className="text-muted-foreground">Personal Project</p>
          <p className="text-muted-foreground">
            Developed an e-commerce application for an online pharmacy using
            AWS, Nest.js, React, microservices, Docker, Kubernetes, RabbitMQ,
            Zustand, and TailwindCSS. Implemented features such as product
            listings, user registration, shopping cart, and payment gateway,
            allowing users to purchase medications and health products easily
            and securely. Utilized a scalable and distributed architecture with
            microservices and containers managed by Kubernetes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Loan Management System</h3>
          <p className="text-muted-foreground">Personal Project</p>
          <p className="text-muted-foreground">
            Worked on a project for loan management that enabled downloading
            reports and making resource loans depending on access level, time,
            location, and priority. Tech Stack: TypeScript, React 18, Git,
            Telefunc, DrizzleORM, Postgres, Lucia, Vike-react, Zod, NanoId,
            Hono.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Freelance Developer</h3>
          <p className="text-muted-foreground">01/2024 - 03/2024</p>
          <p className="text-muted-foreground">
            Developed an e-commerce website for a startup coffee company,
            allowing them to display and sell products to the public. Integrated
            the store whit the WhatsApp API for direct communication whit the
            seller before purchase. Tech Stack: TypeScript, React 18, Git,
            Jotai, React Router, Axios, Pocketbase
          </p>
        </div>
      </div>
    </div>
  );
}
