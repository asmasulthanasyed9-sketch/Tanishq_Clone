import { useState, useEffect, useRef } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const worlds = [
  {
    img: `${TANISHQ_CDN}/dw2053c663/header-mega-menu/banner-images/wedding-mobile.jpg`,
    label: 'Wedding',
    href: '#',
  },
  {
    img: `${TANISHQ_CDN}/dw090fd6cb/header-mega-menu/banner-images/gold-page-desktop.jpg`,
    label: 'Gold',
    href: '#',
  },
  {
    img: `${TANISHQ_CDN}/dw0ea9d46f/header-mega-menu/banner-images/uncut-diamonds-mobile.jpg`,
    label: 'Diamond',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg`,
    label: 'Dailywear',
    href: '#',
  },
];

export default function TanishqWorld() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="world-section section-wrapper" ref={ref}>
      <div className="container">
        <div className="section-heading" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <h2>Tanishq World</h2>
          <p>A companion for every occasion</p>
        </div>
        <div className="world-grid">
          {worlds.map((w, idx) => (
            <a
              href={w.href}
              className="world-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.55s ease ${idx * 0.1}s, transform 0.55s ease ${idx * 0.1}s`,
              }}
            >
              <img
                src={w.img}
                alt={w.label}
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(w.label); }}
              />
              <span className="world-label">{w.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
