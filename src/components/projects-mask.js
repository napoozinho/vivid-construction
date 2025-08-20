import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobileDevice } from "../utils/functions";

gsap.registerPlugin(ScrollTrigger);

(() => {
  const component = document.querySelector("[data-component='projects-mask']");

  if (!component) return;

  const projects = component.querySelectorAll("[data-projects-mask='item']");
  const projectsAmmount = projects.length;
  const windowHeight = isMobileDevice() ? window.screen.height : window.innerHeight

  if(isMobileDevice) {
    gsap.set(component, { height: `${projectsAmmount * windowHeight}px` });
    gsap.set(projects, { height: windowHeight });
    gsap.set(projects[0].parentElement, { height: windowHeight });
  } else {
    gsap.set(component, { height: `${projectsAmmount * 100}svh` });
  }

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
          ease: "none",
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
