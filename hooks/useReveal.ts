import { useEffect, MutableRefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  scroll?: boolean;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  start?: string;
  useInView?: boolean;
};

const useReveal = (
  ref: MutableRefObject<HTMLElement | null>,
  {
    scroll = false,
    once = false,
    direction = "up",
    delay = 0,
    duration = 1.2,
    start = "top 80%",
    useInView = false,
  }: RevealOptions = {}
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    switch (direction) {
      case "up":
        fromVars.yPercent = 100;
        break;
      case "down":
        fromVars.yPercent = -100;
        break;
      case "left":
        fromVars.xPercent = 100;
        break;
      case "right":
        fromVars.xPercent = -100;
        break;
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      duration,
      delay,
      ease: "power4.out",
    };

    const tween = gsap.fromTo(el, fromVars, toVars);

    if (!scroll) return () => tween.kill();

    if (useInView && "IntersectionObserver" in globalThis) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              tween.play();
              if (once) observer.unobserve(entry.target);
            } else if (!once) {
              tween.reverse();
            }
          };
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    // ✅ ScrollTrigger-powered version
    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      toggleActions: once
        ? "play none none none"
        : "play none none reverse",
      animation: tween,
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [scroll, once, direction, delay, duration, start, useInView, ref]);
}

export default useReveal;