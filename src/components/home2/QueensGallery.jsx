"use client";

import "./queensGallery.css";

const queens = [
  "http://rudrabuildwell.com/images/queens-img-1.jpg",
  "http://rudrabuildwell.com/images/queens-img-2.jpg",
  "http://rudrabuildwell.com/images/queens-img-3.jpg",
  "http://rudrabuildwell.com/images/queens-img-4.jpg",
  "http://rudrabuildwell.com/images/queens-img-5.jpg",
  "http://rudrabuildwell.com/images/queens-img-6.jpg",
  "http://rudrabuildwell.com/images/queens-img-7.jpg",
  "http://rudrabuildwell.com/images/queens-img-8.jpg",
  "http://rudrabuildwell.com/images/queens-img-9.jpg",
  "http://rudrabuildwell.com/images/queens-img-10.jpg",
  "http://rudrabuildwell.com/images/queens-img-11.jpg",
  "http://rudrabuildwell.com/images/queens-img-12.jpg",
  "http://rudrabuildwell.com/images/queens-img-13.jpg",
  "http://rudrabuildwell.com/images/queens-img-14.jpg",
];

export default function QueensCarousel() {
  return (
    <div className="queens-carousel-wrapper">
      <h1>QUEENS OF RUDRA</h1>
      <div className="carousel-container">
        <div className="carousel-track">
          {queens.concat(queens).map((img, idx) => (
            <div key={idx} className="carousel-item">
              <img src={img} alt={`Queen ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}