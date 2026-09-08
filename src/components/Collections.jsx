import { useEffect, useRef, useState } from 'react';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const collections = [
  {
    img: `${LIB_CDN}/dwfba22b76/homepage/tanishq-collections/stunning-every-ear.jpg`,
    fallback: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    label: 'Stunning Every Ear',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dw9dbb6f94/homepage/tanishq-collections/gold-coins.jpg`,
    fallback: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=600&h=400&fit=crop',
    label: 'Gold Coins',
    href: '#',
  },
  {
    img: `${LIB_CDN}/dwc3567360/homepage/tanishq-collections/under-50k-mobile.jpg`,
    fallback: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
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
  const [imgErrors, setImgErrors] = useState({});

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
                src={imgErrors[idx] ? col.fallback : col.img}
                alt={col.label}
                onError={() => setImgErrors(e => ({ ...e, [idx]: true }))}
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
