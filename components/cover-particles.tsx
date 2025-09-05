"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    init && (
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                push: { quantity: 5 },
                repulse: { distance: 180, duration: 0.5 },
              },
            },
            particles: {
              color: { value: ["#10b981", "#ffffff", "#9ca3af"] },
              links: { enable: false }, // desactivamos las líneas
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: { default: "bounce" },
              },
              number: { value: 90, density: { enable: true} },
              opacity: { value: 0.6 },
              shape: { type: ["circle", "star"] },
              size: { value: { min: 2, max: 6 } },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default CoverParticles;