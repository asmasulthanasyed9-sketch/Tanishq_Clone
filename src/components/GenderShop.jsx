import { useEffect, useRef, useState } from 'react';

const genders = [
  {
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=480&fit=crop',
    title: 'Women',
    sub: 'Shop Now',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&h=480&fit=crop',
    title: 'Men',
    sub: 'Shop Now',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=480&fit=crop',
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
              <img src={g.img} alt={g.title} />
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
