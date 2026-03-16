"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./projectsSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const images = gsap.utils.toArray(".project-image");

      images.forEach((img) => {
        gsap.fromTo(
          img,
          { backgroundPosition: "50% 0%" },
          {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="projects-row">
        {/* PROJECT 1 */}
        <div className="project">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
            }}
          ></div>

          <div className="project-content">
            <h3>Rudra Palace Heights</h3>

            <p>
              Premium 1–4 BHK residences in Greater Noida West with modern
              amenities and excellent connectivity.
            </p>

            <Link href="/projects/rudra-heights" className="view-btn">
              View More →
            </Link>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project project-down">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)",
            }}
          ></div>

          <div className="project-content">
            <h3>Rudra Aquacasa</h3>

            <p>
              Spacious homes in Noida Extension offering modern living with
              green surroundings and lifestyle amenities.
            </p>

            <Link href="/projects/rudra-aquacasa" className="view-btn">
              View More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
