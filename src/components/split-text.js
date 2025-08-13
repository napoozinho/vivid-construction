import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { duration, staggerAmount, customEaseName } from "../utils/variables.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

document.fonts.ready.then(() => {
  const texts = document.querySelectorAll("[data-split-text]");

  texts.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\n/g, "<br>");
  });

  SplitText.create(texts, {
    autoSplit: true,
    type: "lines",
    mask: "lines",
    linesClass: "line",
    aria: "none",
  });

  texts.forEach((textElement) => {
    if (textElement.dataset.autoplay !== "true") return;

    const delay = Number(textElement.dataset.delay) / 1000 || 0;
    const lines = textElement.querySelectorAll(".line");

    gsap.set(textElement, { autoAlpha: 1 });

    const tl = gsap.timeline({ paused: true });
    tl.from(lines, {
      yPercent: 100,
      duration,
      ease: customEaseName,
      stagger: { amount: staggerAmount },
      delay,
    });

    ScrollTrigger.create({
      trigger: textElement,
      start: "0% 100%",
      onEnter: () => tl.play(),
    });
  });
});
