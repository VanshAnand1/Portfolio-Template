"use client";
import { SplineScene } from "./elements/Interactive3DHero/splite";
import { Card } from "./elements/Interactive3DHero/card";
import { Spotlight } from "./elements/Interactive3DHero/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="center-h bg-transparent relative top-40 overflow-hidden lg:h-[500px]">
      <Spotlight
        size={280}
        className="z-20 mix-blend-screen -top-40 left-0 md:left-60 md:-top-20"
      />

      <div className="flex flex-col lg:flex-row h-auto lg:h-[500px]">
        {/* text */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
        </div>

        <div
          className="relative w-full mt-8 lg:mt-0
                    h-[280px] sm:h-[360px] md:h-[420px]   /* mobile/tablet heights */
                    lg:h-full lg:min-h-[500px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
