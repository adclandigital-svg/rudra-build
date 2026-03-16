"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBuilding, FaUsers, FaHome, FaAward } from "react-icons/fa";
import "./rudraStory.css";

gsap.registerPlugin(ScrollTrigger);

export default function RudraStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate all elements with .rudra-anim
    const animElems = sectionRef.current.querySelectorAll(".rudra-anim");
    gsap.from(animElems, {
      // y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate counters
    const counters = sectionRef.current.querySelectorAll(".count");
    counters.forEach((counter) => {
      const value = +counter.getAttribute("data-value");
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

  }, []);

  return (
    <section ref={sectionRef} className="rudra-section">
      <div className="rudra-wrapper">

        {/* LEFT TEXT */}
        <div className="rudra-content">
          <span className="rudra-label rudra-anim">Rudra Builder</span>
          <h2 className="rudra-title rudra-anim">
            Forward Living is at the finishing line of that race
          </h2>
          <p className="rudra-text rudra-anim">
            What is life if not a journey to find the best there is? Our deepest desires are always associated with wanting
            more in life. We are driven to discover better spaces, better moments, and a better way of living.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="rudra-stats">
          <div className="stat rudra-anim">
            <FaBuilding className="stat-icon" />
            <h3><span className="count" data-value="15">0</span>+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="stat rudra-anim">
            <FaHome className="stat-icon" />
            <h3><span className="count" data-value="1200">0</span>+</h3>
            <p>Happy Homes</p>
          </div>

          <div className="stat rudra-anim">
            <FaUsers className="stat-icon" />
            <h3><span className="count" data-value="20">0</span>+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat rudra-anim">
            <FaAward className="stat-icon" />
            <h3><span className="count" data-value="8">0</span>+</h3>
            <p>Industry Awards</p>
          </div>
        </div>

      </div>
    </section>
  );
}