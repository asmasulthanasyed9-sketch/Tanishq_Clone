import { useState } from 'react';

const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';

const categories = [
  { label: 'Earrings', img: `${TANISHQ_CDN}/dwe68efad0/header-mega-menu/thumbnail-icons/earrings.png`, fallback: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop' },
  { label: 'Finger Rings', img: `${TANISHQ_CDN}/dwbcf9062f/header-mega-menu/thumbnail-icons/finger-rings.png`, fallback: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop' },
  { label: 'Pendants', img: `${TANISHQ_CDN}/dwc79b9417/header-mega-menu/thumbnail-icons/pendants.png`, fallback: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop' },
  { label: 'Mangalsutra', img: `${TANISHQ_CDN}/dw98f79ed1/header-mega-menu/thumbnail-icons/mangalsutra.png`, fallback: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=100&h=100&fit=crop' },
  { label: 'Bracelets', img: `${TANISHQ_CDN}/dw93502493/header-mega-menu/thumbnail-icons/bracelets.png`, fallback: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=100&h=100&fit=crop' },
  { label: 'Bangles', img: `${TANISHQ_CDN}/dwb27d2fef/header-mega-menu/thumbnail-icons/bangles.png`, fallback: 'https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=100&h=100&fit=crop' },
  { label: 'Chains', img: `${TANISHQ_CDN}/dw7856550b/header-mega-menu/thumbnail-icons/chains.png`, fallback: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&h=100&fit=crop' },
  { label: 'Necklaces', img: `${TANISHQ_CDN}/dw3a28df88/header-mega-menu/thumbnail-icons/necklaces.png`, fallback: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop' },
  { label: 'Nose Pin', img: `${TANISHQ_CDN}/dwde146ca9/header-mega-menu/thumbnail-icons/nosepin.png`, fallback: 'https://images.unsplash.com/photo-1610375461369-d613b564f4c4?w=100&h=100&fit=crop' },
  { label: 'View All', img: `${TANISHQ_CDN}/dw576bc3f9/header-mega-menu/thumbnail-icons/all-jewellery-l3.png`, fallback: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=100&h=100&fit=crop' },
];

export default function ShopByCategory() {
  const [imgErrors, setImgErrors] = useState({});

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
                  src={imgErrors[idx] ? cat.fallback : cat.img}
                  alt={cat.label}
                  onError={() => setImgErrors(e => ({ ...e, [idx]: true }))}
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
