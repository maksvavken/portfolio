import { HeroCompact } from "./components/HeroCompact";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <HeroCompact />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}