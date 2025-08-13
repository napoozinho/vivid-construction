import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("custom-ease", "0.62, 0.05, 0.01, 0.99");

export const duration = 1.47;
export const staggerAmount = 0.2;
export const customEaseName = "custom-ease";
