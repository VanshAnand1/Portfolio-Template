import React, { useEffect, useState } from "react";
import LightRays from "../backgrounds/LightRays/LightRays";

type RaysOrigin =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isMobile;
}

const defaultEnableRays = true;
const defaultRaysOrigin = "top-center";
const defaultRaysColor = "#5200A3";
const defaultRaysSpeed = 1.5;
const defaultLightSpread = 1.0;
const defaultRayLength = 4;
const defaultFollowMouse = true;
const defaultMouseInfluence = 0.5;
const defaultNoiseAmount = 0.1;
const defaultDistortion = 0.05;

export const LightRaysBackground: React.FC = () => {
  // === Live (applied) values ===
  const [enableRays, setEnableRays] = useState(defaultEnableRays);
  const [raysOrigin, setRaysOrigin] = useState<RaysOrigin>(defaultRaysOrigin);
  const [raysColor, setRaysColor] = useState(defaultRaysColor);
  const [raysSpeed, setRaysSpeed] = useState(defaultRaysSpeed);
  const [lightSpread, setLightSpread] = useState(defaultLightSpread);
  const [rayLength, setRayLength] = useState(defaultRayLength);
  const [followMouse, setFollowMouse] = useState(defaultFollowMouse);
  const [mouseInfluence, setMouseInfluence] = useState(defaultMouseInfluence);
  const [noiseAmount, setNoiseAmount] = useState(defaultNoiseAmount);
  const [distortion, setDistortion] = useState(defaultDistortion);

  // === Draft (menu) values ===
  const [dEnableRays, setDEnableRays] = useState(enableRays);
  const [dRaysOrigin, setDRaysOrigin] = useState<RaysOrigin>(raysOrigin);
  const [dRaysColor, setDRaysColor] = useState(raysColor);
  const [dRaysSpeed, setDRaysSpeed] = useState(raysSpeed);
  const [dLightSpread, setDLightSpread] = useState(lightSpread);
  const [dRayLength, setDRayLength] = useState(rayLength);
  const [dFollowMouse, setDFollowMouse] = useState(followMouse);
  const [dMouseInfluence, setDMouseInfluence] = useState(mouseInfluence);
  const [dNoiseAmount, setDNoiseAmount] = useState(noiseAmount);
  const [dDistortion, setDDistortion] = useState(distortion);

  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!open) return;
    setDEnableRays(enableRays);
    setDRaysOrigin(raysOrigin);
    setDRaysColor(raysColor);
    setDRaysSpeed(raysSpeed);
    setDLightSpread(lightSpread);
    setDRayLength(rayLength);
    setDFollowMouse(followMouse);
    setDMouseInfluence(mouseInfluence);
    setDNoiseAmount(noiseAmount);
    setDDistortion(distortion);
  }, [
    open,
    enableRays,
    raysOrigin,
    raysColor,
    raysSpeed,
    lightSpread,
    rayLength,
    followMouse,
    mouseInfluence,
    noiseAmount,
    distortion,
  ]);

  // Apply drafts → live
  const applyChanges = () => {
    setEnableRays(dEnableRays);
    setRaysOrigin(dRaysOrigin);
    setRaysColor(dRaysColor);
    setRaysSpeed(dRaysSpeed);
    setLightSpread(dLightSpread);
    setRayLength(dRayLength);
    setFollowMouse(dFollowMouse);
    setMouseInfluence(dMouseInfluence);
    setNoiseAmount(dNoiseAmount);
    setDistortion(dDistortion);
    setOpen(false);
  };

  return (
    <div>
      {/* Background uses ONLY live values */}
      <LightRays
        raysOrigin={raysOrigin}
        raysColor={raysColor}
        raysSpeed={raysSpeed}
        lightSpread={lightSpread}
        rayLength={enableRays ? rayLength : 0}
        followMouse={followMouse}
        mouseInfluence={mouseInfluence}
        noiseAmount={noiseAmount}
        distortion={distortion}
        className="!fixed !inset-0 !w-screen !h-screen !-z-10 pointer-events-none"
      />

      {/* Settings Button — hidden on mobile */}
      {!isMobile && (
        <div className="fixed top-4 right-4 z-50">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="lightrays-settings"
            className="flex items-center gap-2 rounded-xl bg-neutral-900/80 border border-[#ddccff]/60 px-3 py-2 text-sm text-white shadow-md backdrop-blur hover:bg-neutral-900 hover:border-[#ddccff] transition"
            title="Adjust light rays"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
      )}

      {/* Settings Panel — controls DRAFT values only */}
      {open && !isMobile && (
        <div
          id="lightrays-settings"
          className="fixed top-20 right-4 z-50 w-80 rounded-2xl bg-neutral-900/95 border border-[#ddccff]/60 p-4 text-white shadow-2xl backdrop-blur"
          role="dialog"
          aria-label="Light Rays Settings"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-[#ddccff]">
              Light Rays Menu
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 text-sm border border-[#ddccff]/50 hover:border-[#ddccff] hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>

          {/* enableRays */}
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm text-[#ddccff]">Light Rays</label>
            <button
              type="button"
              onClick={() => setDEnableRays((v) => !v)}
              className={`rounded-full text-xs px-3 py-1 border transition ${
                dEnableRays
                  ? "bg-[#ddccff] text-white border-[#ddccff]"
                  : "border-[#ddccff]/60 text-white hover:bg-white/5"
              }`}
            >
              {dEnableRays ? "On" : "Off"}
            </button>
          </div>

          {/* raysOrigin */}
          <label className="block text-sm text-[#ddccff] mb-1">Origin</label>
          <select
            value={dRaysOrigin}
            onChange={(e) => setDRaysOrigin(e.target.value as RaysOrigin)}
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
              value={dRaysColor}
              onChange={(e) => setDRaysColor(e.target.value)}
              className="h-9 w-9 rounded border border-[#ddccff]/60 bg-transparent"
            />
            <input
              type="text"
              value={dRaysColor}
              onChange={(e) => setDRaysColor(e.target.value)}
              className="flex-1 rounded-lg bg-neutral-800 border border-[#ddccff]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
              placeholder="#5200A3"
            />
          </div>

          {/* sliders (draft) */}
          <label
            htmlFor="raysSpeed"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Speed: <span className="text-white">{dRaysSpeed.toFixed(2)}</span>
          </label>
          <input
            id="raysSpeed"
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={dRaysSpeed}
            onChange={(e) => setDRaysSpeed(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          <label
            htmlFor="lightSpread"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Light Spread:{" "}
            <span className="text-white">{dLightSpread.toFixed(2)}</span>
          </label>
          <input
            id="lightSpread"
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={dLightSpread}
            onChange={(e) => setDLightSpread(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          <label
            htmlFor="rayLength"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Ray Length:{" "}
            <span className="text-white">{dRayLength.toFixed(2)}</span>
          </label>
          <input
            id="rayLength"
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={dRayLength}
            onChange={(e) => setDRayLength(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm text-[#ddccff]">Follow Mouse</label>
            <button
              type="button"
              onClick={() => setDFollowMouse((v) => !v)}
              className={`rounded-full text-xs px-3 py-1 border transition ${
                dFollowMouse
                  ? "bg-[#ddccff] text-white border-[#ddccff]"
                  : "border-[#ddccff]/60 text-white hover:bg-white/5"
              }`}
            >
              {dFollowMouse ? "On" : "Off"}
            </button>
          </div>

          <label
            htmlFor="mouseInfluence"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Mouse Influence:{" "}
            <span className="text-white">{dMouseInfluence.toFixed(2)}</span>
          </label>
          <input
            id="mouseInfluence"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={dMouseInfluence}
            onChange={(e) => setDMouseInfluence(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          <label
            htmlFor="noiseAmount"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Noise Amount:{" "}
            <span className="text-white">{dNoiseAmount.toFixed(2)}</span>
          </label>
          <input
            id="noiseAmount"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={dNoiseAmount}
            onChange={(e) => setDNoiseAmount(Number(e.target.value))}
            className="mb-3 w-full accent-[#ddccff]"
          />

          <label
            htmlFor="distortion"
            className="block text-sm text-[#ddccff] mb-1"
          >
            Distortion:{" "}
            <span className="text-white">{dDistortion.toFixed(2)}</span>
          </label>
          <input
            id="distortion"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={dDistortion}
            onChange={(e) => setDDistortion(Number(e.target.value))}
            className="mb-6 w-full accent-[#ddccff]"
          />

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg border border-[#ddccff]/60 text-white hover:bg-white/5 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={applyChanges}
              className="px-4 py-2 rounded-lg bg-[#ddccff] text-[#ddccff] font-semibold hover:bg-[#cbb3ff] transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
