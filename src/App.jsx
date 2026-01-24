import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Connect from './components/Connect'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import HomeBlog from './components/HomeBlog'
import DancePainIsInformation from './pages/blogs/DancePainIsInformation'
import CloudflareAnalytics from './components/CloudflareAnalytics'

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <About />
    <Expertise />
    <HomeBlog />
    <Connect />
  </>
)

function App() {
  return (
    <div className="min-h-screen">
      <CloudflareAnalytics />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dance-pain-is-information" element={<DancePainIsInformation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
