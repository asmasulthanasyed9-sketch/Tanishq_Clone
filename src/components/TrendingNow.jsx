import { useState, useEffect, useRef } from 'react';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const trending = [
  {
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=500&fit=crop',
    title: 'Auspicious Occasion',
    cta: 'Explore Now',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=600&h=500&fit=crop',
    title: 'Gifting Jewellery',
    cta: 'Shop Now',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&h=500&fit=crop',
    title: 'Origami Edit',
    cta: 'Discover',
    href: '#',
  },
];

export default function TrendingNow() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="trending-section section-wrapper" ref={ref}>
      <div className="container">
        <div className="section-heading" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <h2>Trending Now</h2>
          <p>Jewellery pieces everyone's eyeing right now</p>
        </div>
        <div className="trending-grid">
          {trending.map((item, idx) => (
            <a
              href={item.href}
              className="trending-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <img src={item.img} alt={item.title} />
              <div className="trending-overlay">
                <div className="trending-title">{item.title}</div>
                <span className="trending-cta">{item.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
