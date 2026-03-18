"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import "./navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.6,
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            <Image src="/Rudra Logo white.png" alt="logo" width={150} height={60} />
          </Link>
          <div className="nav-righ">
            <Link href="#">Aquacasa</Link>
            <Link href="#">Palace Heights</Link>
            <Link href="#">Pavo Real</Link>
            <Link href="#">Skytracks</Link>
            <Link href="#">Uno</Link>
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="mobile-overlay"
        onClick={() => setMenuOpen(false)}
      />

      <div ref={sidebarRef} className="mobile-sidebar">
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <nav ref={menuRef} className="sidebar-menu">
          {/* PROJECT DROPDOWN */}
          <div className="sidebar-project">
            <div className="menu-link project-title">
              <span>01</span> Projects
            </div>

            <div className="project-submenu">
              <Link href="#" className="menu-link">
                <span>01</span> Aquacasa
              </Link>
              <Link href="#" className="menu-link">
                <span>02</span> Palace Heights
              </Link>
              <Link href="#" className="menu-link">
                <span>03</span> Pavo Real
              </Link>
              <Link href="#" className="menu-link">
                <span>04</span> Skytracks
              </Link>
              <Link href="#" className="menu-link">
                <span>05</span> Uno
              </Link>
            </div>
          </div>

          <Link href="#" className="menu-link">
            <span>02</span> Blogs
          </Link>

          <Link href="/about" className="menu-link">
            <span>03</span> Gallery
          </Link>

          <Link href="/projects" className="menu-link">
            <span>04</span> Media Centre
          </Link>

          <Link href="/contact" className="menu-link">
            <span>05</span> Construction Updates
          </Link>

          <Link href="/contact" className="menu-link">
            <span>6</span> Job Openings
          </Link>

          <Link href="/contact" className="menu-link">
            <span>7</span> Reach Us
          </Link>
        </nav>
      </div>
    </>
  );
}
