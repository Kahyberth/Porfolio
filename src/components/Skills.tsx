import { Component1Icon, MagicWandIcon } from "@radix-ui/react-icons";
import { BoxIcon, SlashIcon } from "lucide-react";

export function Skills() {
  return (
    <div className="md:px-6 lg:mx-80">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">JavaScript</h3>
                <p className="text-center text-muted-foreground">
                  Proficient in modern JavaScript, including ES6+ features and
                  popular frameworks like React.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">TypeScript</h3>
                <p className="text-center text-muted-foreground">
                  Proficient in TypeScript, with a strong understanding of type
                  safety, interfaces, and advanced TypeScript features.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">React</h3>
                <p className="text-center text-muted-foreground">
                  Skilled in React, with experience in building responsive UIs using hooks and state management.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <LayoutTemplateIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">CSS</h3>
                <p className="text-center text-muted-foreground">
                  Experienced in writing clean, modular CSS using preprocessors
                  like Sass and utility-first frameworks like Tailwind CSS.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <DatabaseIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">SQL</h3>
                <p className="text-center text-muted-foreground">
                  Proficient in writing complex SQL queries and managing
                  relational databases.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CloudIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">AWS</h3>
                <p className="text-center text-muted-foreground">
                  Experienced in deploying and managing applications on AWS
                  using services like EC2, S3, and Lambda.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <GitBranchIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Git</h3>
                <p className="text-center text-muted-foreground">
                  Experienced in using Git for version control, including
                  branching, merging, and collaborating on projects.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CpuIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Python</h3>
                <p className="text-center text-muted-foreground">
                  Proficient in Python, including writing scripts, automating
                  tasks, and building data-driven applications.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CodeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">PHP</h3>
                <p className="text-center text-muted-foreground">
                  Experienced in PHP, with strong skills in building and maintaining dynamic web applications.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <DatabaseIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Laravel</h3>
                <p className="text-center text-muted-foreground">
                Proficient in Laravel, with experience in building robust web applications using its MVC framework and features like Eloquent ORM and Blade templating
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <DatabaseIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Express</h3>
                <p className="text-center text-muted-foreground">
                Experienced in Express.js, with skills in building RESTful APIs and middleware for Node.js applications.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <DatabaseIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Nest</h3>
                <p className="text-center text-muted-foreground">
                  Proficient in NestJS, with experience in building scalable and maintainable server-side applications using TypeScript.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <BoxIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Docker</h3>
                <p className="text-center text-muted-foreground">
                Skilled in Docker, with experience in containerizing applications and managing development environments.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <SlashIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Kubernetes</h3>
                <p className="text-center text-muted-foreground">
                Experienced in Kubernetes, with knowledge of deploying, scaling, and managing containerized applications in a cluster.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <Component1Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">RabbitMQ</h3>
                <p className="text-center text-muted-foreground">
                Proficient in RabbitMQ, with experience in implementing message-driven architectures and asynchronous communication.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="bg-primary rounded-full p-3 text-primary-foreground">
                  <CloudIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">Google Cloud</h3>
                <p className="text-center text-muted-foreground">
                Experienced in deploying and managing applications on Google Cloud using services like Compute Engine, Cloud Storage, and Cloud Functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GitBranchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function LayoutTemplateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  );
}
