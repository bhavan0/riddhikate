import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import FloatingBalloons from './FloatingBalloons'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-olive-light/40 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-olive/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cream/60 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-olive-light/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-cream/50 to-olive-light/30 -z-10"></div>

      {/* Floating Balloons */}
      <FloatingBalloons />

      {/* Decorative Circles */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-olive rounded-full opacity-60 hidden lg:block"></div>
      <div className="absolute top-52 right-40 w-2 h-2 bg-olive-dark rounded-full opacity-40 hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-olive rounded-full opacity-50 hidden lg:block"></div>
      <div className="absolute bottom-60 left-40 w-2 h-2 bg-olive-light rounded-full opacity-70 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block bg-olive-dark/10 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-6">
            <span className="text-olive-dark font-medium text-sm sm:text-base lg:text-lg">Physical Therapist</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">Hi, I'm </span>
            <span className="gradient-text">Riddhi Kate</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-olive-dark/80 mb-8 font-medium">
            Passionate about movement, recovery & helping you thrive
          </p>

          {/* Intro Text */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Welcome to my corner of the web! I'm dedicated to sharing knowledge about
            physical therapy, movement science, and the incredible ways our bodies can
            heal and grow stronger. Join me on this journey.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#"
              className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-olive-dark hover:text-olive"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-olive-dark hover:text-olive"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-olive-dark hover:text-olive"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#about"
            className="inline-block bg-olive-dark text-white px-8 py-4 rounded-full font-medium hover:bg-olive transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Learn More About Me
          </a>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
