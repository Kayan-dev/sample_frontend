import "./Particles.css";

export const ParticleOptions = {
  fps_limit: 30,
  particles: {
    number: {
      value: 105,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: "#343538",
    line_linked: {
      enable: true,
      distance: 150,
      color: "#343538",
      opacity: 0.7,
      width: 1,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },

    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4,
          width: 1,
        },
      },
      bubble: {
        distance: 300,
        size: 12,
        duration: 2,
        opacity: 8,
        speed: 1,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
