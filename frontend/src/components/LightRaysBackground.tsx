import LightRays from "../backgrounds/LightRays/LightRays";

export const LightRaysBackground = () => {
  return (
    <LightRays
      raysOrigin="top-center"
      raysColor="#5200A3"
      raysSpeed={1.5}
      lightSpread={1}
      rayLength={3}
      followMouse
      mouseInfluence={0.3}
      noiseAmount={0.1}
      distortion={0.05}
      className="!fixed !inset-0 !w-screen !h-screen !-z-10 pointer-events-none"
    />
  );
};
