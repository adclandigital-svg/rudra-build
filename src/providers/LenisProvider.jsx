"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {

  useEffect(() => {

    if (typeof window === "undefined") return;

    // disable on mobile
    if (window.innerWidth <= 768) return;

    const lenis = new Lenis({
      duration: 2.2,        // smoother easing
      lerp: 0.06,           // lower = smoother
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9, // softer wheel motion
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };

  }, []);

  return children;
}