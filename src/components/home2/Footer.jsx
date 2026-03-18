"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="rudra-footer">
      <div className="rudra-footer-container">

        {/* LEFT SECTION: Branding + CTA */}
        <div className="footer-left">
          <h2 className="footer-title">
            Building the Future <br />
            <span>of Luxury Living</span>
          </h2>
          <p className="footer-text">
            Explore our latest projects and discover homes crafted with precision and luxury.
          </p>
          <a href="#" className="footer-btn">
            Get Brochure <span className="arrow">↗</span>
          </a>
        </div>

        {/* RIGHT SECTION: Links + Contact + Socials */}
        <div className="footer-right">

          {/* Company Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
          </div>

          {/* Projects */}
          <div className="footer-col">
            <h4>Projects</h4>
            <Link href="#">Residential</Link>
            <Link href="#">Commercial</Link>
            <Link href="#">Upcoming</Link>
            <Link href="#">Luxury Villas</Link>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>

          {/* Contact & Social */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Noida, India</p>
            <p style={{fontFamily:"none"}}>+91 9560895659</p>
            <p>info@rudrabuildwell.com</p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Rudra Buildwell — Crafted with Precision
      </div>
    </footer>
  );
}