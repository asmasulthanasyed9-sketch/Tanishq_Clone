import { useEffect, useRef, useState } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const stories = [
  {
    img: `${LIB_CDN}/dw581ff437/homepage/HeroBanner/rivaah-signature-desktop.jpg`,
    quote: "Tanishq's Rivaah collection made me feel like the most beautiful version of myself on my wedding day. Every piece told a story.",
    name: 'Ananya & Rohan',
    place: 'Mumbai',
  },
  {
    img: `${TANISHQ_CDN}/dw9c7b2030/header-mega-menu/banner-images/gemstone-desktop.jpg`,
    quote: 'The craftsmanship exceeded every expectation. Our mangalsutra and bangles were exactly what our families envisioned for our big day.',
    name: 'Priya & Arjun',
    place: 'Jaipur',
  },
  {
    img: `${TANISHQ_CDN}/dw090fd6cb/header-mega-menu/banner-images/gold-page-desktop.jpg`,
    quote: 'From consultation to the final fitting, the Tanishq team understood exactly what our Bengali wedding traditions needed.',
    name: 'Ritika & Sourav',
    place: 'Kolkata',
  },
];

function useIntersection(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, options);
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function Testimonials() {
  const [ref, visible] = useIntersection({ threshold: 0.15 });

  return (
    <section className="testimonials-section section-wrapper" ref={ref}>
      <div className="container">
        <div className={`section-heading ${visible ? 'animate-in' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
          <p className="wedding-eyebrow">Real Weddings</p>
          <h2>Love Stories, Beautifully Adorned</h2>
          <p>Real brides who trusted Tanishq for their most special day</p>
        </div>

        <div className="testimonials-grid">
          {stories.map((s, idx) => (
            <div
              className="testimonial-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <div className="testimonial-img">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(s.name.split(' ')[0]); }}
                />
              </div>
              <span className="testimonial-quote-mark">&ldquo;</span>
              <p className="testimonial-quote">{s.quote}</p>
              <div className="testimonial-name">{s.name}</div>
              <div className="testimonial-place">{s.place}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
