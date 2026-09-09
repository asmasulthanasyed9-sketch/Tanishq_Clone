const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

const items = [
  {
    img: `${LIB_CDN}/dw4bdb239f/homepage/assurance/tanishq-quality-crafting.svg`,
    title: 'Quality Craftsmanship',
    sub: 'Crafted by master artisans',
  },
  {
    img: `${LIB_CDN}/dw414b95df/homepage/assurance/tanishq-ethically-sourced.svg`,
    title: 'Ethically Sourced',
    sub: 'Responsibly obtained metals & stones',
  },
  {
    img: `${LIB_CDN}/dweb2d8253/homepage/assurance/tanishq-transparency.svg`,
    title: '100% Transparency',
    sub: 'Karatmeter certified purity',
  },
];

export default function Assurance() {
  return (
    <section className="assurance-section">
      <div className="container">
        <div className="assurance-inner">
          {items.map((item, idx) => (
            <div className="assurance-item" key={idx}>
              <img
                src={item.img}
                alt={item.title}
                onError={e => (e.target.style.display = 'none')}
              />
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
