import { NavigationBar } from "./components/NavigationBar";
import { LightRaysBackground } from "./components/LightRaysBackground";
import { SplineSceneBasic } from "./components/Home";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <LightRaysBackground />
      <NavigationBar />
      <SplineSceneBasic />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
