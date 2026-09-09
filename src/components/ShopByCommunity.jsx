import { useEffect, useRef, useState } from 'react';

const communities = [
  'Bengali Bride',
  'Punjabi Bride',
  'Gujarati Bride',
  'Tamil Bride',
  'Telugu Bride',
  'Marwari Bride',
];

function MotifIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v8M24 34v8M6 24h8M34 24h8" />
      <path d="M12 12l5.5 5.5M30.5 30.5L36 36M36 12l-5.5 5.5M17.5 30.5L12 36" />
    </svg>
  );
}

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

export default function ShopByCommunity() {
  const [ref, visible] = useIntersection({ threshold: 0.15 });

  return (
    <section className="community-section section-wrapper" ref={ref}>
      <div className="container">
        <div className={`section-heading ${visible ? 'animate-in' : ''}`} style={{ opacity: visible ? 1 : 0 }}>
          <h2>Shop by Community</h2>
          <p>Bridal jewellery rooted in your traditions</p>
        </div>

        <div className="community-grid">
          {communities.map((label, idx) => (
            <a
              href="#"
              className="community-card"
              key={idx}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.9)',
                transition: `opacity 0.5s ease ${idx * 0.08}s, transform 0.5s ease ${idx * 0.08}s`,
              }}
            >
              <span className="community-ring">
                <MotifIcon />
              </span>
              <span className="community-label">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
