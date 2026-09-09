import './styles/main.scss'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import WeddingCollection from './components/WeddingCollection'
import Collections from './components/Collections'
import ShopByCategory from './components/ShopByCategory'
import TrendingNow from './components/TrendingNow'
import ShopByCommunity from './components/ShopByCommunity'
import TanishqWorld from './components/TanishqWorld'
import Assurance from './components/Assurance'
import ExchangeProgram from './components/ExchangeProgram'
import Testimonials from './components/Testimonials'
import GenderShop from './components/GenderShop'
import TanishqExperience from './components/TanishqExperience'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSlider />
        <WeddingCollection />
        <Collections />
        <ShopByCategory />
        <TrendingNow />
        <ShopByCommunity />
        <TanishqWorld />
        <Assurance />
        <ExchangeProgram />
        <Testimonials />
        <GenderShop />
        <TanishqExperience />
      </main>
      <Footer />
    </div>
  )
}
