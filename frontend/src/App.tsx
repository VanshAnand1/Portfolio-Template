import { NavigationBar } from "./components/NavigationBar";
import { LightRaysBackground } from "./components/LightRaysBackground";
import { SplineSceneBasic } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <LightRaysBackground />
      <NavigationBar />
      <SplineSceneBasic />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
