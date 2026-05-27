import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import profile1 from '../../../assets/profile1.png';
import profile2 from '../../../assets/profile2.jpeg';
import profile3 from '../../../assets/profile3.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';

const testimonials = [
  {
    image: profile1, initials: 'MJ', color: '#1e40af',
    name: 'Michael Jordan', role: 'CEO, SportsTech', tag: 'Web Design',
    review: 'Working with Areeb was an absolute pleasure. He delivered a stunning portfolio that exceeded expectations — fast, clean, and pixel-perfect on every device.',
    rating: 5,
  },
  {
    image: profile2, initials: 'SA', color: '#0f6e56',
    name: 'Sarah Ahmed', role: 'Founder, DesignCo', tag: 'UI / UX',
    review: 'Areeb built our landing page from scratch in record time. His attention to detail and understanding of modern design trends is truly impressive. Highly recommend!',
    rating: 5,
  },
  {
    image: profile1, initials: 'RK', color: '#7c2d12',
    name: 'Rahul Khan', role: 'Product Manager, AppLab', tag: 'React Dev',
    review: 'The e-commerce site Areeb developed has beautiful UI and smooth UX. Conversion rate improved significantly after launch. Great communicator too.',
    rating: 5,
  },
  {
    image: profile3, initials: 'FN', color: '#3730a3',
    name: 'Fatima Noor', role: 'Marketing Lead, BrandX', tag: 'Portfolio',
    review: 'From concept to deployment, Areeb was professional and responsive. The React components he built are clean, reusable, and exactly what our team needed.',
    rating: 5,
  },
];

export default function Testimonial() {
  const swiperRef = useRef(null);

  return (
    <section className="ts-section" id="Testimonial">

      {/* ── Left Side ── */}
      <div className="ts-header">
        <p className="ts-eyebrow">
          <span className="ts-eyebrow-line" />
          Client Reviews
        </p>
        <h2 className="ts-title">
          WHAT<br />
          <span className="ts-title-accent">CLIENTS</span><br />
          SAY
        </h2>
        <p className="ts-subtitle">
          Real words from people<br />I've had the pleasure to work with.
        </p>

        <div className="ts-nav">
          <button className="ts-btn" aria-label="Previous" onClick={() => swiperRef.current?.slidePrev()}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* <div className="ts-pagination" /> */}
          <button className="ts-btn" aria-label="Next" onClick={() => swiperRef.current?.slideNext()}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Right Side Swiper ── */}
      <div className="ts-swiper-wrap">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          loop={true}
          modules={[Pagination, Autoplay]}
          pagination={{ el: '.ts-pagination', clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          slidesPerView={1}
          spaceBetween={24}
          className="ts-swiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="ts-card">

                {/* Top accent bar */}
                <div className="ts-card-bar" />

                {/* Decorative quote glyph */}
                <div className="ts-glyph" aria-hidden="true">"</div>

                {/* Stars */}
                <div className="ts-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FaStar key={j} size={13} color="#f59e0b" />
                  ))}
                </div>

                {/* Review text */}
                <p className="ts-review">"{t.review}"</p>

                {/* Divider */}
                <div className="ts-divider" />

                {/* Person row */}
                <div className="ts-person">
                  <div className="ts-avatar" style={{ background: t.color }}>
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div className="ts-person-info">
                    <p className="ts-name">{t.name}</p>
                    <p className="ts-role">{t.role}</p>
                  </div>
                  <span className="ts-tag">{t.tag}</span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}