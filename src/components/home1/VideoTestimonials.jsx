"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./video-testimonials.css";

export default function VideoReviewSlider() {
  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "Luxury Home Buyer",
      review:
        "Rudra Build delivered beyond expectations. The quality and professionalism were outstanding.",
      video: "https://videocdn.cdnpk.net/videos/6f6a4785-f5f1-5cc9-a818-02c7fd467219/horizontal/previews/watermarked/large.mp4",
    },
    {
      name: "Priya Mehta",
      role: "Property Investor",
      review:
        "Amazing investment opportunity. Smooth process and transparent communication.",
      video: "https://videocdn.cdnpk.net/videos/2033ca61-799f-58f7-aaeb-0983b729244c/horizontal/previews/watermarked/large.mp4",
    },
    {
      name: "Rahul Verma",
      role: "Business Owner",
      review:
        "The team understands modern architecture and delivers premium results.",
      video: "https://videocdn.cdnpk.net/videos/c1e29c45-9aed-5836-ab38-509c401b113b/horizontal/previews/watermarked/large.mp4",
    },
  ];

  return (
    <section className="review-section">
      <div className="review-header">
        <span>CLIENT VOICES</span>
        <h2>What Our Clients Say</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="video-testimonials">
            <div className="review-slide">

              {/* LEFT – VIDEO */}
              <div className="review-video">
                <video src={item.video} controls />
              </div>

              {/* RIGHT – CONTENT */}
              <div className="review-content">
                <h3>{item.name}</h3>
                <p className="role">{item.role}</p>

                <div className="stars">★★★★★</div>

                <p className="review-text">
                  "{item.review}"
                </p>

                <button className="review-btn">
                  Read Full Story →
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}