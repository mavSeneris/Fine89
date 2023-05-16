import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Reviews from './components/Reviews'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Reviews />
        <Contact/>
      </main>
      <Footer />
    </div >
  )
}

export default App
