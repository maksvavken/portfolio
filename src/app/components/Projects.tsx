import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Website for Hotedršica",
    description: "A comprehensive website for Hotedršica, where all local organisations can post events, share news and more. Each subpart of the website was tailor made for each organisation.",
    image: "../../../image1.png",
    tags: ["Angular", "TypeScript", "Flask", "PostgreSQL", "DevOps"],
    demo: "https://hotedrsica.si/home"
  },
  {
    id: 2,
    title: "RepoTree",
    description: "A github repository visualization tool",
    image: "../../../image.png",
    tags: ["Angular", "Flask"],
    github: "https://github.com/maksvavken/ioi",
  },
  {
    id: 3,
    title: "Nutrichat demo",
    description: "A simple and short demo of my research work at IJS. RAG system with 30k foods to help you with nutrition.",
    image: "../../../nutrichat.png",
    tags: ["Angular", "Django", "Postgres", "ChromaDB"],
    demo: "https://nutrichat.wawken.eu/",
    github: "https://ieeexplore.ieee.org/document/11401545"
  },
  {
    id: 4,
    title: "Redesign Hribi.net",
    description: "Proposal of a hribi.net redesign.",
    image: "../../../hribi.png",
    tags: ["Angular", "Figma", "HCI"],
    github: "https://github.com/maksvavken/hci2025-project"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-3">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <div className="grid grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
