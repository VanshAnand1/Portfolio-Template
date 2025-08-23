import { NavigationBar } from "./components/NavigationBar";
import { LightRaysBackground } from "./components/LightRaysBackground";
import { SplineSceneBasic } from "./components/Home";

function App() {
  return (
    <div>
      <LightRaysBackground />
      <NavigationBar />
      <SplineSceneBasic />
    </div>
  );
}

export default App;
