import { Code2, Sparkles, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate software developer with 5+ years of experience building 
              modern web applications. I specialize in React, TypeScript, and Node.js, 
              creating scalable solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development started with a curiosity about how 
              things work behind the scenes. Today, I turn complex problems into 
              elegant, user-friendly solutions.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you'll find me contributing to open source, 
              writing technical articles, or exploring new technologies.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
              <Code2 className="size-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Clean Code</h3>
                <p className="text-gray-600">
                  Writing maintainable, well-documented code that stands the test of time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-purple-50 rounded-lg">
              <Sparkles className="size-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="mb-2">User Experience</h3>
                <p className="text-gray-600">
                  Crafting intuitive interfaces that users love to interact with.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-green-50 rounded-lg">
              <Zap className="size-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Performance</h3>
                <p className="text-gray-600">
                  Optimizing applications for speed and efficiency at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}