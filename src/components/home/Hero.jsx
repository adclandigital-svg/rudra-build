// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import "./hero.css";

// const slides = [
//   "https://img.freepik.com/premium-photo/urban-oasis-modern-highrise-apartments-nestled-lush-green-park-tranquil-setting-showcasing-harmony-city-nature_618468-27697.jpg?w=1850",
//   "https://img.freepik.com/premium-photo/skyscrapers-city-against-sky_1623504-1.jpg?w=1850",
//   "https://img.freepik.com/premium-photo/hong-kong-architecture_328191-6492.jpg?w=1850",
//   "https://img.freepik.com/premium-photo/view-cityscape-against-clear-blue-sky_1601952-93.jpg?w=1850",
// ];

// export default function Hero() {

//   const imgRefs = useRef([]);
//   const index = useRef(0);

//   const changeSlide = (next) => {

//     const currentImg = imgRefs.current[index.current];
//     const nextImg = imgRefs.current[next];

//     const tl = gsap.timeline();

//     tl.set(nextImg,{zIndex:3})
//       .fromTo(
//         nextImg,
//         {opacity:0, scale:1.3},
//         {opacity:1, scale:1.15, duration:1.5, ease:"power2.out"}
//       )
//       .to(
//         currentImg,
//         {opacity:0, duration:1.2, ease:"power2.out"},
//         "<"
//       );

//     index.current = next;
//   };

//   const nextSlide = () => {
//     const next = (index.current + 1) % slides.length;
//     changeSlide(next);
//   };

//   const prevSlide = () => {
//     const prev = (index.current - 1 + slides.length) % slides.length;
//     changeSlide(prev);
//   };

//   useGSAP(() => {

//     gsap.set(imgRefs.current,{opacity:0, scale:1.2});
//     gsap.set(imgRefs.current[0],{opacity:1});

//     const interval = setInterval(() => {
//       nextSlide();
//     },6000);

//     return ()=> clearInterval(interval);

//   });

//   return (
//     <section className="hero">

//       <div className="hero-bg">
//         {slides.map((src,i)=>(
//           <img
//             key={i}
//             src={src}
//             ref={(el)=> imgRefs.current[i]=el}
//           />
//         ))}
//       </div>

//       <div className="hero-overlay"/>

//       <div className="hero-socials">
//         <a><FaFacebookF/></a>
//         <a><FaInstagram/></a>
//         <a><FaTwitter/></a>
//         <a><FaLinkedinIn/></a>
//       </div>

//       <div className="hero-text">
//         <span className="hero-subtitle">Luxury Living</span>

//         <h1>
//           Ultra Luxury <br/>
//           4 BHK Residences
//         </h1>

//         <p>
//           Experience world-class architecture, premium interiors,
//           and skyline views designed for modern luxury living.
//         </p>

//         <button className="hero-btn">
//           Book Site Visit
//         </button>
//       </div>

//       <div className="hero-nav">
//         <button onClick={prevSlide}>←</button>
//         <button onClick={nextSlide}>→</button>
//       </div>

//     </section>
//   );
// }


"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}
      <div className="hero-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* SOCIALS */}
      <div className="hero-socials">
        <a><FaFacebookF /></a>
        <a><FaInstagram /></a>
        <a><FaTwitter /></a>
        <a><FaLinkedinIn /></a>
      </div>

      {/* TEXT CONTENT */}
      {/* <div className="hero-text">
        <span className="hero-subtitle">Luxury Living</span>

        <h1>
          Ultra Luxury <br />
          4 BHK Residences
        </h1>

        <p>
          Experience world-class architecture, premium interiors,
          and skyline views designed for modern luxury living.
        </p>

        <button className="hero-btn">
          Book Site Visit
        </button>
      </div> */}

    </section>
  );
}