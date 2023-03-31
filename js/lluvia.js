"use strict";
let lluviaJs;
const rain = (active) => {
  const lluvia = document.querySelector("#tsparticles");
  if (active) {
    lluvia.classList.remove("hidden");
    lluvia.classList.add("shown");
    lluviaJs = tsParticles.load("tsparticles", {
      fpsLimit: 60,
      fullScreen: {
        enable: true,
      },
      detectRetina: true,
      reduceDuplicates: false,
      particles: {
        collisions: {
          bounce: {
            horizontal: {
              random: { enable: false, minimumValue: 0.1 },
              value: 1,
            },
            vertical: {
              random: { enable: false, minimumValue: 0.1 },
              value: 1,
            },
          },
          enable: false,
          mode: "bounce",
          overlap: { enable: true, retries: 0 },
        },
        move: {
          angle: { offset: 0, value: 90 },
          attract: {
            distance: 200,
            enable: false,
            rotate: { x: 600, y: 1200 },
          },
          center: { x: 50, y: 50, radius: 0 },
          decay: 0,
          distance: {},
          direction: "bottom",
          drift: 0,
          enable: true,
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          straight: false,
          vibrate: false,
          warp: false,
        },
        number: {
          density: { enable: true, area: 800, factor: 1000 },
          limit: 0,
          value: 75,
        },
        orbit: {
          animation: { count: 0, enable: false, speed: 1, sync: false },
          enable: false,
          opacity: 1,
          rotation: { random: { enable: false, minimumValue: 0 }, value: 45 },
          width: 1,
        },
        rotate: {
          animation: {
            enable: true,
            speed: 5,
            sync: false,
          },
        },
        shape: {
          character: [
            {
              fill: true,
              value: ["🤯", "💣", "❤️", "🚀", "🥳", "👀", "🏠", "👻"],
            },
          ],
          polygon: { nb_sides: 5 },
          stroke: { color: "random", width: 1 },
          type: "char",
        },
        size: {
          random: { enable: true, minimumValue: 25 },
          value: { min: 25, max: 50 },
          animation: {
            enable: false,
            speed: 25,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 25,
          },
        },
      },
    });
  } else {
    lluviaJs = "";
    lluvia.classList.remove("shown");
    lluvia.classList.add("hidden");
  }
};

export { rain };
