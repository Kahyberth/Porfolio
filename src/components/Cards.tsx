export function Cards() {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/placeholder.svg"
          alt="Project 1"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-sm text-muted-foreground">
            A minimalist web application.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/placeholder.svg"
          alt="Project 1"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-sm text-muted-foreground">
            A minimalist web application.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/placeholder.svg"
          alt="Project 1"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-sm text-muted-foreground">
            A minimalist web application.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        <img
          src="/placeholder.svg"
          alt="Project 1"
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-sm text-muted-foreground">
            A minimalist web application.
          </p>
        </div>
      </div>
    </div>
  );
}
