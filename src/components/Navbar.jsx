import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash scrolling when loaded from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Expertise', href: '/#expertise' },
    { name: 'Connect', href: '/#connect' },
    { name: 'Blog', href: '/blog' },
  ]

  const handleNavigation = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    if (href.startsWith('/#')) {
      const hash = href.substring(1)
      if (location.pathname === '/') {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        window.history.pushState(null, null, href) // Update URL without reload
      } else {
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById(hash.substring(1))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100) // Small delay to ensure page load
      }
    } else {
      navigate(href)
      window.scrollTo(0, 0)
    }
  }

  const navigateHome = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
        window.scrollTo(0, 0)
    } else {
        navigate('/')
        window.scrollTo(0, 0)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a href="/" onClick={navigateHome} className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-olive to-olive-dark rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">RK</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-olive-dark' : 'text-olive-dark'}`}>
              Riddhi Kate
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                  scrolled
                    ? 'text-gray-700 hover:text-olive-dark hover:bg-olive-light/20'
                    : 'text-gray-700 hover:text-olive-dark hover:bg-white/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-olive-light/20'
                : 'text-gray-700 hover:bg-white/50'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-1 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-gray-700 hover:text-olive-dark hover:bg-olive-light/20 transition-all duration-200 font-medium py-3 px-4 rounded-xl block cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
