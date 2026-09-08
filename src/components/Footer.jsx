const LIB_CDN = 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-border" />

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div>
                <img
                  className="footer-logo"
                  src={`${LIB_CDN}/dw95a24864/images/footer/tanishq-footer-full-logo-final.svg`}
                  alt="Tanishq"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.insertAdjacentHTML('afterbegin', '<span style="font-family:Cormorant Garamond,serif;font-size:22px;font-weight:400;color:white;letter-spacing:0.1em;display:block;margin-bottom:16px;">TANISHQ</span>');
                  }}
                />
                <div className="footer-app">
                  <p>Download the Tanishq App Now</p>
                  <div className="app-badges">
                    <img
                      src={`${LIB_CDN}/dwf3971307/images/footer/footer-playstore.svg`}
                      alt="Google Play"
                      onError={e => (e.target.style.display = 'none')}
                    />
                    <img
                      src={`${LIB_CDN}/dwe9d356b9/images/footer/footer-ios.svg`}
                      alt="App Store"
                      onError={e => (e.target.style.display = 'none')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer-col">
              <h5>Useful Links</h5>
              <ul>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">International Shipping</a></li>
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Track your Order</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Find a Store</a></li>
              </ul>
            </div>

            {/* Information */}
            <div className="footer-col">
              <h5>Information</h5>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Offers &amp; Contest Details</a></li>
                <li><a href="#">Help &amp; FAQs</a></li>
                <li><a href="#">About Tanishq</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Our Brands */}
            <div className="footer-col">
              <h5>Our Brands</h5>
              <ul>
                <li><a href="#">Zoya</a></li>
                <li><a href="#">Mia by Tanishq</a></li>
                <li><a href="#">Titan</a></li>
                <li><a href="#">Fastrack</a></li>
                <li><a href="#">Taneira</a></li>
                <li><a href="#">Titan Eye+</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h5>Contact Us</h5>
              <a href="tel:18002966677" className="contact-phone">1800-296-6677</a>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.04em' }}>Toll free · Mon–Sat 9am–8pm</p>
              <div className="contact-icons">
                <a href="#" aria-label="WhatsApp"><WhatsAppIcon /></a>
                <a href="#" aria-label="Email"><MailIcon /></a>
              </div>

              <h5 style={{ marginTop: 24, marginBottom: 12 }}>Follow Us</h5>
              <div className="footer-social">
                <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-legal">
              <p>© {new Date().getFullYear()} Titan Company Limited. All Rights Reserved.</p>
              <span>|</span>
              <a href="#">Terms &amp; Conditions</a>
              <span>|</span>
              <a href="#">Privacy Notice</a>
              <span>|</span>
              <a href="#">Disclaimer</a>
              <span>|</span>
              <a href="#">Cyber Security Policy</a>
            </div>
            <div className="footer-payments">
              <img src={`${LIB_CDN}/dw7b8761e0/images/footer/footer-visa.svg`} alt="Visa" onError={e => (e.target.style.display = 'none')} />
              <img src={`${LIB_CDN}/dw567d438d/images/footer/footer-mastercard.svg`} alt="Mastercard" onError={e => (e.target.style.display = 'none')} />
              <img src={`${LIB_CDN}/dw5e3e7fa9/images/footer/footer-paypal.svg`} alt="PayPal" onError={e => (e.target.style.display = 'none')} />
              <img src={`${LIB_CDN}/dw54f98ea5/images/footer/footer-americanexpress.svg`} alt="AmEx" onError={e => (e.target.style.display = 'none')} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
