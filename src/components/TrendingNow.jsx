import { useState, useEffect, useRef } from 'react';
import { goldPlaceholder } from '../utils/placeholder';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const trending = [
  {
    img: `${LIB_CDN}/dw7ba57e10/homepage/HeroBanner/thejoyofdressing-desktop.jpg`,
    title: 'Auspicious Occasion',
    cta: 'Explore Now',
    href: '#',
  },
  {
    img: `${TANISHQ_CDN}/dwb580f1df/header-mega-menu/banner-images/giftcard.jpg`,
    title: 'Gifting Jewellery',
    cta: 'Shop Now',
    href: '#',
  },
  {
    img: `${TANISHQ_CDN}/dw6ce7dc56/header-mega-menu/banner-images/under-50-desktop.jpg`,
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
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(item.title); }}
              />
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
