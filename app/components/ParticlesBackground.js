"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // ✅ use slim instead of full

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // load the slim package → smaller bundle
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#C08081", "#AB4E52", "#ffffff"] }, // ✨ match your brand
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        background: { color: "transparent" },
      }}
    />
  );
}
