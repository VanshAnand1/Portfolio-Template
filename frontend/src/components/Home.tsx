"use client";
import { SplineScene } from "./elements/Interactive3DHero/splite";
import { Card } from "./elements/Interactive3DHero/card";
import { Spotlight } from "./elements/Interactive3DHero/spotlight";

export function SplineSceneBasic() {
  return (
    <Card className="center-h bg-transparent relative top-40">
      <Spotlight
        size={280}
        className="z-20 mix-blend-screen -top-40 left-0 md:left-60 md:-top-20"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="min-w-0 lg:basis-2/3 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Your Introduction Here!
          </h1>
          <p className="mt-4 text-neutral-300 max-w-none">
            Talk about yourself here. This area has enough space for ~2 small
            paragraphs. Remember you can change the spline 3D model.
          </p>
        </div>

        <div className="lg:basis-1/3 w-full mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/3] lg:aspect-square">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="absolute inset-0 w-full h-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
