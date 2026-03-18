import { Github, Linkedin, Mail } from "lucide-react";

export function HeroCompact() {
  return (
    <section className="px-4 pt-12 pb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Maks Požarnik Vavken</span>
        </h1>
        <h2 className="mb-4 text-3xl text-gray-700">
          Full Stack Developer and Masters student
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Building modern web applications with Angular, Flask, and Django. 
          Passionate about creating seamless user experiences and scalable solutions.
        </p>
        
        <div className="flex items-center justify-center gap-6 mb-4">
          <a 
            href="https://github.com/maksvavken" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="size-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/maks-p-v-815985378/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="size-6" />
          </a>
          <a 
            href="mailto:makspvavken@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="size-6" />
          </a>
        </div>
        
        <div className="text-sm text-gray-600">
          <p>makspvavken@gmail.com | +358 40 3767637 | Tampere, Finland</p>
        </div>
      </div>
    </section>
  );
}
