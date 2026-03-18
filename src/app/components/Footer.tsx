import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maks Požarnik Vavken
            </p>
            <p className="text-gray-400 text-sm">
              Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/maksvavken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/maks-p-v-815985378/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            <a 
              href="mailto:makspvavken@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Maks Požarnik Vavken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
