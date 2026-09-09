import { useEffect, useRef, useState } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const categories = [
  {
    img: `${LIB_CDN}/dw581ff437/homepage/HeroBanner/rivaah-signature-desktop.jpg`,
    label: 'Bridal Sets',
    sub: 'Statement necklaces & sets',
  },
  {
    img: `${TANISHQ_CDN}/dw9c7b2030/header-mega-menu/banner-images/gemstone-desktop.jpg`,
    label: 'Mangalsutra',
    sub: 'Symbols of your new beginning',
  },
  {
    img: `${TANISHQ_CDN}/dw916fc98c/header-mega-menu/banner-images/uncut-diamonds-desktop.jpg`,
    label: 'Wedding Bangles',
    sub: 'Kadas & bangles for the bride',
  },
  {
    img: `${TANISHQ_CDN}/dw39dec89e/header-mega-menu/banner-images/solitaire-desktop.jpg`,
    label: 'Bridal Rings',
    sub: 'Rings for every ritual',
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

export default function WeddingCollection() {
  const [ref, visible] = useIntersection({ threshold: 0.15 });

  return (
    <section className="wedding-section section-wrapper" ref={ref}>
      <div className="wedding-motif wedding-motif--left" aria-hidden="true" />
      <div className="wedding-motif wedding-motif--right" aria-hidden="true" />

      <div className="container">
        <div className={`section-heading ${visible ? 'animate-in' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
          <p className="wedding-eyebrow">Rivaah by Tanishq</p>
          <h2>The Wedding Collection</h2>
          <p>Bridal jewellery crafted for every ritual, every region, every love story</p>
        </div>

        <div className="wedding-grid">
          {categories.map((cat, idx) => (
            <a
              href="#"
              className="wedding-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${idx * 0.12}s, transform 0.6s ease ${idx * 0.12}s`,
              }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(cat.label); }}
              />
              <div className="wedding-card-overlay">
                <h3>{cat.label}</h3>
                <p>{cat.sub}</p>
                <span className="wedding-card-cta">Shop Now <i>→</i></span>
              </div>
            </a>
          ))}
        </div>

        <div className="wedding-cta-row">
          <a href="#" className="btn-outline-gold">View Full Rivaah Collection</a>
        </div>
      </div>
    </section>
  );
}
