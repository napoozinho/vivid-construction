import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

(() => {
  const component = document.querySelector("[data-component='projects-mask']");

  if (!component || !window.matchMedia("(pointer: fine)").matches) return;

  const projects = component.querySelectorAll("[data-projects-mask='item']");
  const projectsAmmount = projects.length;
  const windowHeight = window.innerHeight;

  gsap.set(component, { height: `${projectsAmmount * 100}vh` });

  projects.forEach((project, i) => {
    const projectOffsetY = (i - 1) * windowHeight;
    gsap.set(project, { zIndex: i + 1 });

    if (i != 0) {
      gsap.fromTo(
        project,
        {
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: project,
            start: `bottom+=${projectOffsetY} bottom`,
            end: `bottom+=${projectOffsetY} top`,
            scrub: true,
          },
        },
      );
    }
  });
})();
