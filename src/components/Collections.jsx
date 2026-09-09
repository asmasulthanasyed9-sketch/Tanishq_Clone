import { useEffect, useRef, useState } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const collections = [
  {
    img: `${LIB_CDN}/dwfba22b76/homepage/tanishq-collections/stunning-every-ear.jpg`,
    label: 'Stunning Every Ear',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw9dbb6f94/homepage/tanishq-collections/gold-coins.jpg`,
    label: 'Gold Coins',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dwc3567360/homepage/tanishq-collections/under-50k-mobile.jpg`,
    label: 'Under 50K',
    href: '#',
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

export default function Collections() {
  const [ref, visible] = useIntersection({ threshold: 0.15 });

  return (
    <section className="collections-section section-wrapper" ref={ref}>
      <div className="container">
        <div className={`section-heading ${visible ? 'animate-in' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
          <h2>Tanishq Collections</h2>
          <p>Explore our newly launched collection</p>
        </div>
        <div className="collections-grid">
          {collections.map((col, idx) => (
            <a
              href={col.href}
              className="collection-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <img
                src={col.img}
                alt={col.label}
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(col.label); }}
              />
              <div className="card-overlay">
                <span className="card-label">{col.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
