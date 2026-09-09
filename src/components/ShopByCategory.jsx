import { goldPlaceholder } from '../utils/placeholder';

const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const categories = [
  { label: 'Earrings', img: `${TANISHQ_CDN}/dwe68efad0/header-mega-menu/thumbnail-icons/earrings.png` },
  { label: 'Finger Rings', img: `${TANISHQ_CDN}/dwbcf9062f/header-mega-menu/thumbnail-icons/finger-rings.png` },
  { label: 'Pendants', img: `${TANISHQ_CDN}/dwc79b9417/header-mega-menu/thumbnail-icons/pendants.png` },
  { label: 'Mangalsutra', img: `${TANISHQ_CDN}/dw98f79ed1/header-mega-menu/thumbnail-icons/mangalsutra.png` },
  { label: 'Bracelets', img: `${TANISHQ_CDN}/dw93502493/header-mega-menu/thumbnail-icons/bracelets.png` },
  { label: 'Bangles', img: `${TANISHQ_CDN}/dwb27d2fef/header-mega-menu/thumbnail-icons/bangles.png` },
  { label: 'Chains', img: `${TANISHQ_CDN}/dw7856550b/header-mega-menu/thumbnail-icons/chains.png` },
  { label: 'Necklaces', img: `${TANISHQ_CDN}/dw3a28df88/header-mega-menu/thumbnail-icons/necklaces.png` },
  { label: 'Nose Pin', img: `${TANISHQ_CDN}/dwde146ca9/header-mega-menu/thumbnail-icons/nosepin.png` },
  { label: 'View All', img: `${TANISHQ_CDN}/dw576bc3f9/header-mega-menu/thumbnail-icons/all-jewellery-l3.png` },
];

export default function ShopByCategory() {
  return (
    <section className="categories-section section-wrapper">
      <div className="container">
        <div className="section-heading">
          <h2>Find Your Perfect Match</h2>
          <p>Shop by Categories</p>
        </div>
        <div className="categories-scroll">
          {categories.map((cat, idx) => (
            <a href="#" className="cat-item" key={idx}>
              <div className="cat-circle">
                <img
                  src={cat.img}
                  alt={cat.label}
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = goldPlaceholder(cat.label.slice(0, 2)); }}
                />
              </div>
              <span className="cat-name">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
