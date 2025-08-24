import { NavigationBar } from "./components/NavigationBar";
import { LightRaysBackground } from "./components/LightRaysBackground";
import { SplineSceneBasic } from "./components/Home";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <LightRaysBackground />
      <NavigationBar />
      <SplineSceneBasic />
      <Projects />
    </div>
  );
}

export default App;
