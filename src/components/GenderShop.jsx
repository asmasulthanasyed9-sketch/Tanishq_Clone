import { useEffect, useRef, useState } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const genders = [
  {
    img: `${LIB_CDN}/dw9d4b48f2/homepage/HeroBanner/everyday-diamond-edit-desktop.jpg`,
    title: 'Women',
    sub: 'Shop Now',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw9beb2e53/homepage/HeroBanner/exchange-desktop-2-9-26.jpg`,
    title: 'Men',
    sub: 'Shop Now',
    href: '#',
    objectPosition: 'left center',
  },
  {
    img: `${LIB_CDN}/dw9dbb6f94/homepage/tanishq-collections/gold-coins.jpg`,
    title: 'Kids',
    sub: 'Shop Now',
    href: '#',
  },
];

export default function GenderShop() {
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
    <section className="gender-section section-wrapper" ref={ref}>
      <div className="container">
        <div className="section-heading" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <h2>Curated For You</h2>
          <p>Shop by Gender</p>
        </div>
        <div className="gender-grid">
          {genders.map((g, idx) => (
            <a
              href={g.href}
              className="gender-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                style={g.objectPosition ? { objectPosition: g.objectPosition } : undefined}
                onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(g.title); }}
              />
              <div className="gender-label">
                <h3>{g.title}</h3>
                <span>{g.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
