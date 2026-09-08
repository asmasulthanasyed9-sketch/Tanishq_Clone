import { useState, useEffect } from 'react';

const TANISHQ_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-site-catalog/default';
const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';
const SITE_CDN = 'https://www.tanishq.co.in/on/demandware.static/Sites-Tanishq-Site/-/default';

const navItems = [
  {
    label: 'All Jewellery',
    icon: `${TANISHQ_CDN}/dw2ee8f0b6/header-mega-menu/thumbnail-icons/all-jewellery-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['All Jewellery', 'Earrings', 'Pendants', 'Finger Rings', 'Mangalsutra', 'Chains', 'Nose Pin', 'Necklaces', 'Bangles', 'Bracelets'],
      },
      {
        heading: 'Price',
        links: ['<25K', '25K–50K', '50K–1L', '1L & Above'],
      },
      {
        heading: 'Occasion',
        links: ['Office Wear', 'Modern Wear', 'Casual Wear', 'Traditional Wear'],
      },
      {
        heading: 'Gender',
        links: ['Women', 'Men', 'Kids'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dw090fd6cb/header-mega-menu/banner-images/gold-page-desktop.jpg`,
      title: 'Discover Timeless Crafted Gold Jewellery.',
      cta: 'Explore Now',
    },
  },
  {
    label: 'Gold',
    icon: `${TANISHQ_CDN}/dw981316d3/header-mega-menu/thumbnail-icons/gold-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['All Gold', 'Gold Bangles', 'Gold Bracelets', 'Gold Earrings', 'Gold Chains', 'Gold Pendants', 'Gold Rings', 'Gold Necklaces', 'Gold Nose Pins'],
      },
      {
        heading: 'Price',
        links: ['<25K', '25K–50K', '50K–1L', '1L & Above'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dw916fc98c/header-mega-menu/banner-images/uncut-diamonds-desktop.jpg`,
      title: 'Handcrafted uncut diamond jewellery',
      cta: 'Explore Now',
    },
  },
  {
    label: 'Diamond',
    icon: `${TANISHQ_CDN}/dwc45fe833/header-mega-menu/thumbnail-icons/diamond-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['All Diamond', 'Diamond Bangles', 'Diamond Earrings', 'Diamond Rings', 'Diamond Mangalsutra', 'Diamond Necklaces', 'Diamond Pendants', 'Diamond Nose Pins'],
      },
      {
        heading: 'Price',
        links: ['<25K', '25K–50K', '50K–1L', '1L & Above'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dwbebd506e/header-mega-menu/banner-images/dxc-desktop.jpg`,
      title: 'Natural Diamonds',
      cta: 'Explore Now',
    },
  },
  {
    label: 'Earrings',
    icon: `${TANISHQ_CDN}/dw948435f7/header-mega-menu/thumbnail-icons/earrings-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['All Earrings', 'Drop & Danglers', 'Hoop & Huggies', 'Jhumkas', 'Studs & Tops'],
      },
      {
        heading: 'Occasion',
        links: ['Office Wear', 'Modern Wear', 'Casual Wear', 'Traditional Wear'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dw39dec89e/header-mega-menu/banner-images/solitaire-desktop.jpg`,
      title: 'Singular brilliance, infinite charm',
      cta: 'Shop Now',
    },
  },
  {
    label: 'Daily Wear',
    icon: `${TANISHQ_CDN}/dw7a595219/header-mega-menu/thumbnail-icons/dailywear-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['Dailywear Jewellery', 'Dailywear Chains', 'Dailywear Earrings', 'Dailywear Rings', 'Dailywear Mangalsutra', 'Dailywear Pendants'],
      },
      {
        heading: 'Price',
        links: ['<25K', '25K–50K', '50K–1L', '1L & Above'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dw6ce7dc56/header-mega-menu/banner-images/under-50-desktop.jpg`,
      title: 'Effortless style to make everyday sparkle.',
      cta: 'Shop Now',
    },
  },
  {
    label: 'Wedding',
    icon: `${TANISHQ_CDN}/dw2983a4ba/header-mega-menu/thumbnail-icons/wedding-l1.svg`,
    tabs: [
      {
        heading: 'Category',
        links: ['All Rivaah', 'Wedding Choker', 'Wedding Haram', 'Wedding Bangles', 'Wedding Diamond', 'Wedding Mangalsutra', 'Accessories'],
      },
      {
        heading: 'Community',
        links: ['Bengali Bride', 'Gujarati Bride', 'Punjabi Bride', 'Tamil Bride', 'Telugu Bride'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dw9c7b2030/header-mega-menu/banner-images/gemstone-desktop.jpg`,
      title: 'Natural gemstones, vibrant colours',
      cta: 'Explore Now',
    },
  },
  {
    label: 'Gifting',
    icon: `${TANISHQ_CDN}/dw63798178/header-mega-menu/thumbnail-icons/gifting-l1.svg`,
    tabs: [
      {
        heading: 'Gifts for',
        links: ['Her', 'Him', 'Kids'],
      },
      {
        heading: 'Occasion',
        links: ['Wedding', 'Birthday', 'Anniversary', 'Auspicious'],
      },
    ],
    banner: {
      img: `${TANISHQ_CDN}/dwb580f1df/header-mega-menu/banner-images/giftcard.jpg`,
      title: "Celebrate life's joys with Tanishq.",
      cta: 'View All',
    },
  },
  {
    label: 'Under 50K',
    icon: `${TANISHQ_CDN}/dw0bb9456d/header-mega-menu/thumbnail-icons/rings-l1.svg`,
    noMenu: true,
    highlight: true,
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h9l6 7-10.5 11L2 10z" />
      <path d="M9 3l3 7-2 11" />
      <path d="M15 3l-3 7 2 11" />
      <path d="M2 10h18" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Promo Bar */}
      <div className="promo-bar">
        Get Flat Rs. 500 off on your first order — <span>Login &amp; Enjoy!</span>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Top Row */}
        <div className="navbar-top">
          {/* Logo */}
          <a href="#" className="navbar-logo">
            <img
              src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3ef1a91c/images/tanishq-header-logo.svg"
              alt="Tanishq"
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span style="font-family:Cormorant Garamond,serif;font-size:26px;font-weight:400;color:#7B1C1C;letter-spacing:0.08em;">TANISHQ</span>'; }}
            />
          </a>

          {/* Search */}
          <div className="navbar-search">
            <input type="text" placeholder="Search for gold necklace, diamond rings..." />
            <span className="search-icon"><SearchIcon /></span>
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <a href="#" className="nav-action-btn">
              <StoreIcon />
              <span>Find Store</span>
            </a>
            <div className="nav-divider" />
            <button className="nav-action-btn">
              <UserIcon />
              <span>Log in</span>
            </button>
            <button className="nav-action-btn">
              <HeartIcon />
              <span>Wishlist</span>
            </button>
            <button className="nav-action-btn nav-cart-btn">
              <CartIcon />
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>

        {/* Bottom nav — mega menu */}
        <nav className="navbar-bottom">
          <ul className="nav-menu">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="nav-item"
                onMouseEnter={() => { if (!item.noMenu) { setActiveMenu(idx); setActiveTab(0); } }}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span className={`nav-link ${item.highlight ? 'highlight' : ''}`}>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt=""
                      className="nav-icon"
                      onError={e => (e.target.style.display = 'none')}
                    />
                  )}
                  {item.label}
                </span>

                {!item.noMenu && item.tabs && (
                  <div className={`mega-menu ${activeMenu === idx ? 'mega-menu--active' : ''}`}>
                    <div className="mega-menu-inner">
                      <div className="mega-sidebar">
                        {item.tabs.map((tab, ti) => (
                          <button
                            key={ti}
                            type="button"
                            className={`mega-sidebar-item ${activeTab === ti ? 'active' : ''}`}
                            onMouseEnter={() => setActiveTab(ti)}
                            onFocus={() => setActiveTab(ti)}
                          >
                            {tab.heading}
                          </button>
                        ))}
                      </div>

                      <div className="mega-links-grid">
                        {(item.tabs[activeTab] || item.tabs[0]).links.map((link, li) => (
                          <a href="#" className="mega-link-item" key={li}>
                            <span className="mega-link-icon"><LinkIcon /></span>
                            <span>{link}</span>
                          </a>
                        ))}
                      </div>

                      {item.banner && (
                        <div className="mega-banner">
                          <img
                            src={item.banner.img}
                            alt={item.banner.title}
                            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=220&fit=crop'; }}
                          />
                          <div className="mega-banner-text">
                            <h5>{item.banner.title}</h5>
                            <a href="#">{item.banner.cta} →</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
