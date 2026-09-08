import { useState, useEffect, useRef } from 'react';

const worlds = [
  {
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=400&fit=crop',
    label: 'Wedding',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=500&h=400&fit=crop',
    label: 'Gold',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=400&fit=crop',
    label: 'Diamond',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=400&fit=crop',
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
              <img src={w.img} alt={w.label} />
              <span className="world-label">{w.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
