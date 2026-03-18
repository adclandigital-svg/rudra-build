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
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="projects-section">
      
      {/* ROW 1 */}
      <div className="projects-row">
        
        {/* Palace Heights */}
        <div className="project">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
            }}
          ></div>

          <div className="project-content">
            <h3>Palace Heights</h3>
            <p>
              A premium residential project offering spacious 1–4 BHK homes
              with modern architecture, lush green surroundings, and seamless
              connectivity to Noida and Delhi.
            </p>

            <Link href="/projects/rudra-heights" className="view-btn">
              View More →
            </Link>
          </div>
        </div>

        {/* Aquacasa */}
        <div className="project project-down">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)",
            }}
          ></div>

          <div className="project-content">
            <h3>Aquacasa</h3>
            <p>
              Thoughtfully designed homes surrounded by greenery, offering a
              peaceful lifestyle with premium amenities, open spaces, and a
              vibrant community in Noida Extension.
            </p>

            <Link href="/projects/rudra-aquacasa" className="view-btn">
              View More →
            </Link>
          </div>
        </div>

      </div>

      {/* ROW 2 */}
      <div className="projects-row">
        
        {/* Skytracks */}
        <div className="project">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)",
            }}
          ></div>

          <div className="project-content">
            <h3>Skytracks</h3>
            <p>
              Elevated living experience with high-rise towers, skyline views,
              and cutting-edge design, crafted for those who seek luxury above
              the ordinary.
            </p>

            <Link href="/projects/skytracks" className="view-btn">
              View More →
            </Link>
          </div>
        </div>

        {/* Pavo Real */}
        <div className="project project-down">
          <div
            className="project-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600607687644-c7171b42498f)",
            }}
          ></div>

          <div className="project-content">
            <h3>Pavo Real</h3>
            <p>
              A luxurious residential destination blending elegant design with
              world-class amenities, offering a sophisticated lifestyle in a
              prime location.
            </p>

            <Link href="/projects/pavo-real" className="view-btn">
              View More →
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}