import { useEffect, useRef, useState } from 'react';

const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const features = [
  {
    img: `${LIB_CDN}/dwd2ac5b8e/homepage/assurance/tanishq-exchange-logo.svg`,
    title: 'Tanishq Exchange',
    sub: '0% deduction on old gold',
  },
  {
    img: `${LIB_CDN}/dw346e1c29/homepage/assurance/tanishq-purity-logo.svg`,
    title: 'The Purity Guarantee',
    sub: 'Karatmeter certified',
  },
  {
    img: `${LIB_CDN}/dw8fc1a591/homepage/assurance/tanishq-trust-logo.svg`,
    title: 'Transparency & Trust',
    sub: 'Complete honesty, always',
  },
  {
    img: `${LIB_CDN}/dwbedd999e/homepage/assurance/tanishq-lifetime-logo.svg`,
    title: 'Lifetime Maintenance',
    sub: 'For all your Tanishq pieces',
  },
];

export default function ExchangeProgram() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="exchange-section" ref={ref}>
      <div className="container">
        <div
          className="exchange-inner"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="exchange-tagline">Trusted by 2.8M+ families</p>
          <h2>Exchange Program</h2>
          <p>Exchange your old gold at Tanishq.<br />Flat 0% deduction* on exchange of old gold (18KT and above) from any jeweller.</p>

          <div className="exchange-stats">
            <div className="stat">
              <strong>2.8M+</strong>
              <span>Families Served</span>
            </div>
            <div className="stat">
              <strong>7000+</strong>
              <span>Designs Available</span>
            </div>
            <div className="stat">
              <strong>400+</strong>
              <span>Stores Nationwide</span>
            </div>
          </div>

          <a href="#" className="btn-primary">Explore Now</a>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '24px',
              marginTop: '48px',
              flexWrap: 'wrap',
            }}
          >
            {features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.3 + idx * 0.1}s`,
                }}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  style={{ width: 52, height: 52, margin: '0 auto 10px', display: 'block' }}
                  onError={e => (e.target.style.display = 'none')}
                />
                <p style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', marginBottom: 4 }}>{f.title}</p>
                <p style={{ fontSize: 11, color: '#888' }}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
