import React, { useState } from "react";
import LightRays from "../backgrounds/LightRays/LightRays";

type RaysOrigin =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export const LightRaysBackground: React.FC = () => {
  // Defaults from your current usage
  const [raysOrigin, setRaysOrigin] = useState<RaysOrigin>("top-center");
  const [raysColor, setRaysColor] = useState("#5200A3");
  const [raysSpeed, setRaysSpeed] = useState(1.5);
  const [lightSpread, setLightSpread] = useState(1);
  const [rayLength, setRayLength] = useState(4);
  const [followMouse, setFollowMouse] = useState(true);
  const [mouseInfluence, setMouseInfluence] = useState(0.5);
  const [noiseAmount, setNoiseAmount] = useState(0.1);
  const [distortion, setDistortion] = useState(0.05);

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Background */}
      <LightRays
        raysOrigin={raysOrigin}
        raysColor={raysColor}
        raysSpeed={raysSpeed}
        lightSpread={lightSpread}
        rayLength={rayLength}
        followMouse={followMouse}
        mouseInfluence={mouseInfluence}
        noiseAmount={noiseAmount}
        distortion={distortion}
        className="!fixed !inset-0 !w-screen !h-screen !-z-10 pointer-events-none"
      />

      {/* Top-right Settings Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="lightrays-settings"
          className="flex items-center gap-2 rounded-xl bg-neutral-900/80 border border-[#ddccff]/60 px-3 py-2 text-sm text-white shadow-md backdrop-blur hover:bg-neutral-900 hover:border-[#ddccff] transition"
          title="Adjust light rays"
        >
          {/* tiny gear icon (inline svg) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
              stroke="#ddccff"
              strokeWidth="1.5"
            />
            <path
              d="M19.4 15.97a7.97 7.97 0 0 0 .02-7.94M4.58 8.03a7.97 7.97 0 0 0 .02 7.94M8.03 19.42a7.97 7.97 0 0 0 7.94-.02M15.97 4.6a7.97 7.97 0 0 0-7.94.02"
              stroke="#ddccff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[#ddccff]">Rays</span>
        </button>
      </div>

      {/* Settings Panel */}
      {open && (
        <div
          id="lightrays-settings"
          className="fixed top-14 right-4 z-50 w-80 rounded-2xl bg-neutral-900/95 border border-[#ddccff]/60 p-4 text-white shadow-2xl backdrop-blur"
          role="dialog"
          aria-label="Light Rays Settings"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-[#ddccff]">Light Rays</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-sm border border-[#ddccff]/50 hover:border-[#ddccff] hover:bg-white/5 transition"
            >
              Close
            </button>
          </div>

          {/* raysOrigin */}
          <label className="block text-sm text-[#ddccff] mb-1">Origin</label>
          <select
            value={raysOrigin}
            onChange={(e) => setRaysOrigin(e.target.value as RaysOrigin)}
            className="mb-3 w-full rounded-lg bg-neutral-800 border border-[#ddccff]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
          >
            {[
              "top-left",
              "top-center",
              "top-right",
              "bottom-left",
              "bottom-center",
              "bottom-right",
            ].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {/* raysColor */}
          <label className="block text-sm text-[#ddccff] mb-1">Color</label>
          <div className="mb-3 flex items-center gap-3">
            <input
              type="color"
              value={raysColor}
              onChange={(e) => setRaysColor(e.target.value)}
              className="h-9 w-9 rounded border border-[#ddccff]/60 bg-transparent"
            />
            <input
              type="text"
              value={raysColor}
              onChange={(e) => setRaysColor(e.target.value)}
              className="flex-1 rounded-lg bg-neutral-800 border border-[#ddccff]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
              placeholder="#5200A3"
            />
          </div>

          {/* raysSpeed */}
          <label
            htmlFor="raysSpeed"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Speed: <span className="text-white">{raysSpeed.toFixed(2)}</span>
          </label>
          <input
            id="raysSpeed"
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={raysSpeed}
            onChange={(e) => setRaysSpeed(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          {/* lightSpread */}
          <label
            htmlFor="lightSpread"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Light Spread:{" "}
            <span className="text-white">{lightSpread.toFixed(2)}</span>
          </label>
          <input
            id="lightSpread"
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={lightSpread}
            onChange={(e) => setLightSpread(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          {/* rayLength */}
          <label
            htmlFor="rayLength"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Ray Length:{" "}
            <span className="text-white">{rayLength.toFixed(2)}</span>
          </label>
          <input
            id="rayLength"
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={rayLength}
            onChange={(e) => setRayLength(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          {/* followMouse */}
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm text-[#ddccff]">Follow Mouse</label>
            <button
              type="button"
              onClick={() => setFollowMouse((v) => !v)}
              className={`rounded-full text-xs px-3 py-1 border transition ${
                followMouse
                  ? "bg-[#ddccff] text-white border-[#ddccff]"
                  : "border-[#ddccff]/60 text-white hover:bg-white/5"
              }`}
            >
              {followMouse ? "On" : "Off"}
            </button>
          </div>

          {/* mouseInfluence */}
          <label
            htmlFor="mouseInfluence"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Mouse Influence:{" "}
            <span className="text-white">{mouseInfluence.toFixed(2)}</span>
          </label>
          <input
            id="mouseInfluence"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={mouseInfluence}
            onChange={(e) => setMouseInfluence(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          {/* noiseAmount */}
          <label
            htmlFor="noiseAmount"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Noise Amount:{" "}
            <span className="text-white">{noiseAmount.toFixed(2)}</span>
          </label>
          <input
            id="noiseAmount"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={noiseAmount}
            onChange={(e) => setNoiseAmount(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          {/* distortion */}
          <label
            htmlFor="distortion"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Distortion:{" "}
            <span className="text-white">{distortion.toFixed(2)}</span>
          </label>
          <input
            id="distortion"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={distortion}
            onChange={(e) => setDistortion(Number(e.target.value))}
            className="mb-1 w-full accent-[#ddccff]"
          />
        </div>
      )}
    </div>
  );
};
