import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// functions

function showAnswer(e) {
  const answer = e.target.nextElementSibling;
  const arrow = e.target.firstElementChild;
  let isOpen = answer.classList.contains("is-open");
  answer.classList.toggle("is-open");
  if (!isOpen) {
    gsap.to(answer, { opacity: 1, duration: 0.3, height: "auto", padding: 16, border: "1px solid var(--accent-color-hover)" });
    gsap.to(arrow, { rotate: 135, duration: 0.3 });
  } else {
    gsap.to(answer, { opacity: 0, height: 0, duration: 0.3, padding: 0, border: "0px solid var(--accent-color-hover)" });
    gsap.to(arrow, { rotate: -45, duration: 0.3 });
  }
}

// main code

// faq animations

gsap.registerPlugin(ScrollTrigger);

const questionElements = document.querySelectorAll(".question");
const scrollAnimationElements = gsap.utils.toArray(".animation-wrapper");
const imgAnimation = document.querySelector(".img-animation");

questionElements.forEach((question) => {
  question.addEventListener("click", showAnswer);
});

// scroll animations

gsap.from(imgAnimation, { scale: 0.95, opacity: 0, duration: 1, rotate: -0.6, scrollTrigger: { trigger: imgAnimation, start: "top 70%", toggleActions: "play none none none" } });

scrollAnimationElements.forEach((element) => {
  gsap.from(element, { y: 24, opacity: 0, duration: 1, ease: "power2.out", stagger: 1.5, scrollTrigger: { trigger: element, start: "top 70%", toggleActions: "play none none none" } });
});
