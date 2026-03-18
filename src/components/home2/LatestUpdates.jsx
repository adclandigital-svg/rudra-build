"use client";

import "./latestUpdates.css";
import Image from "next/image";

const updates = [
  {
    id: 1,
    title: "Rudra Palace Heights Construction Update",
    desc: "Structural work completed and finishing phase now underway.",
    img: "https://img.freepik.com/free-photo/beautiful-view-construction-site-city-sunset_181624-9347.jpg?t=st=1773649850~exp=1773653450~hmac=d912caaf8503fd6537267158044262a0f4ccca1054b09abc1d3056143b8df01d&w=1480",
  },
  {
    id: 2,
    title: "Rudra Aquacasa Phase 2 Launch",
    desc: "Bookings open for premium residences with modern amenities.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 3,
    title: "Luxury Clubhouse Development",
    desc: "Clubhouse with gym, lounge and recreation areas.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default function LatestUpdates() {
  return (
    <section className="updates-section">

      <div className="updates-header">
        <span>LATEST UPDATES</span>
        <h2>Project News & Progress</h2>
      </div>

      <div className="updates-grid">

        {/* BIG IMAGE */}
        <div className="update-large">
          <img src={updates[0].img} alt="" fill className="update-img"/>
          <div className="update-overlay">
            <h3>{updates[0].title}</h3>
            <p>{updates[0].desc}</p>
          </div>
        </div>

        {/* SMALL IMAGE */}
        <div className="update-small">
          <img src={updates[1].img} alt="" fill className="update-img"/>
          <div className="update-overlay">
            <h3>{updates[1].title}</h3>
          </div>
        </div>

        {/* SMALL IMAGE */}
        <div className="update-small">
          <img src={updates[2].img} alt="" fill className="update-img"/>
          <div className="update-overlay">
            <h3>{updates[2].title}</h3>
          </div>
        </div>

      </div>

    </section>
  );
}