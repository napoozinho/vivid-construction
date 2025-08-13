import gsap from "gsap";

(() => {
  const buttons = document.querySelectorAll('[data-component="button"]');

  if (buttons.length <= 0) return;

  const duration = 0.3;

  buttons.forEach((button) => {
    const textElements = button.querySelectorAll("span");
    button.addEventListener("mouseenter", () => animate(textElements, -100));
    button.addEventListener("mouseleave", () => animate(textElements, 0));
  });

  function animate(elements, yPercent) {
    gsap.to(elements, {
      yPercent: yPercent,
      duration: duration,
    });
  }
})();
