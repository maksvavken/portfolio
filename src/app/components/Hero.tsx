import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Maks P. Vavken</span>
          </h1>
          <p className="text-4xl md:text-5xl mb-6 text-gray-700">
            Full Stack Developer
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am a CS student that loves to build things. Currently studying in
            the University of Tampere. Lets get in touch!
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button size="lg" className="gap-2">
            <Mail className="size-5" />
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/maksvavken" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="size-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/maks-p-v-815985378/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="size-8" />
          </a>
          <a 
            href="mailto:makspvavken@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="size-8" />
          </a>
        </div>

        <button 
          onClick={scrollToProjects}
          className="mt-16 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
        >
          <ArrowDown className="size-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}
