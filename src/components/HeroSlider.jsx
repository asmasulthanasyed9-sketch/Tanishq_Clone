import { useState, useEffect, useRef } from 'react';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const slides = [
  {
    img: `${LIB_CDN}/dw581ff437/homepage/HeroBanner/rivaah-signature-desktop.jpg`,
    fallback: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1400&h=700&fit=crop',
    alt: 'Rivaah Signature – Wedding Jewellery',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw9beb2e53/homepage/HeroBanner/exchange-desktop-2-9-26.jpg`,
    fallback: 'https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=1400&h=700&fit=crop',
    alt: 'Gold Exchange Program',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw7ba57e10/homepage/HeroBanner/thejoyofdressing-desktop.jpg`,
    fallback: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=1400&h=700&fit=crop',
    alt: 'The Joy of Dressing',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw9d4b48f2/homepage/HeroBanner/everyday-diamond-edit-desktop.jpg`,
    fallback: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=1400&h=700&fit=crop',
    alt: 'The Everyday Diamond Edit',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg`,
    fallback: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1400&h=700&fit=crop',
    alt: 'Dailywear Earrings',
    href: '#',
  },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = idx => {
    setCurrent(idx);
    startTimer();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  return (
    <section className="hero-slider">
      <div className="slides-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div className="slide" key={idx}>
            <a href={slide.href}>
              <img
                src={imgErrors[idx] ? slide.fallback : slide.img}
                alt={slide.alt}
                onError={() => setImgErrors(e => ({ ...e, [idx]: true }))}
              />
            </a>
          </div>
        ))}
      </div>

      <button className="slider-arrow prev" onClick={prev} aria-label="Previous">
        <ChevronLeft />
      </button>
      <button className="slider-arrow next" onClick={next} aria-label="Next">
        <ChevronRight />
      </button>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
