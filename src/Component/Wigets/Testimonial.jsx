import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import profile1 from './../../assets/profile1.png';
import profile2 from './../../assets/profile2.jpeg';
import profile3 from './../../assets/profile3.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';

const testimonial = [
  {
    image: profile1, initials: 'MJ', color: '#2563eb',
    name: 'Michael Jordan', role: 'CEO, SportsTech', tag: 'Web Design',
    Review: 'Working with Areeb was an absolute pleasure. He delivered a stunning portfolio that exceeded expectations — fast, clean, and pixel-perfect on every device.',
  },
  {
    image: profile2, initials: 'SA', color: '#0f6e56',
    name: 'Sarah Ahmed', role: 'Founder, DesignCo', tag: 'UI/UX',
    Review: 'Areeb built our landing page from scratch in record time. His attention to detail and understanding of modern design trends is truly impressive. Highly recommend!',
  },
  {
    image: profile1, initials: 'RK', color: '#993c1d',
    name: 'Rahul Khan', role: 'Product Manager, AppLab', tag: 'React Dev',
    Review: 'The e-commerce site Areeb developed has beautiful UI and smooth UX. Conversion rate improved significantly after launch. Great communicator too.',
  },
  {
    image: profile3, initials: 'FN', color: '#534ab7',
    name: 'Fatima Noor', role: 'Marketing Lead, BrandX', tag: 'Portfolio',
    Review: 'From concept to deployment, Areeb was professional and responsive. The React components he built are clean, reusable, and exactly what our team needed.',
  },
];

export default function Testimonial() {
  return (
    <section className="ts-section" id="Testimonial">

      <div className="ts-header">
        <div className="ts-eyebrow">
          <span className="ts-line" />Testimonials<span className="ts-line" />
        </div>
        <h2 className="ts-title">CLIENTS <span>REVIEWS</span></h2>
      </div>

      <div className="ts-wrap">
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay]}
          pagination={{ el: '.ts-pagination', clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          className="ts-swiper"
        >
          {testimonial.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="ts-card">
                <div className="ts-card-accent" />
                <div className="ts-quote">"</div>

                <div className="ts-stars">
                  {[...Array(5)].map((_, j) => <FaStar key={j} size={15} color="#f59e0b" />)}
                </div>

                <p className="ts-review">"{t.Review}"</p>

                <div className="ts-person">
                  <div className="ts-avatar" style={{ background: t.color }}>
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <p className="ts-name">{t.name}</p>
                    <p className="ts-role">{t.role}</p>
                  </div>
                  <span className="ts-tag">{t.tag}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ts-nav">
          <button className="ts-btn ts-prev" onClick={(e) => e.currentTarget.closest('.ts-wrap').querySelector('.swiper').swiper.slidePrev()}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* <div className="" style={{width:'100px'}} /> */}
          <button className="ts-btn ts-next" onClick={(e) => e.currentTarget.closest('.ts-wrap').querySelector('.swiper').swiper.slideNext()}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}