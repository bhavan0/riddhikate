import { FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L48 91.7C96 83.3 192 66.7 288 58.3C384 50 480 50 576 54.2C672 58.3 768 66.7 864 70.8C960 75 1056 75 1152 70.8C1248 66.7 1344 58.3 1392 54.2L1440 50V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V100Z" fill="white"/>
        </svg>
      </div>

      {/* Main footer */}
      <div className="bg-gradient-to-br from-olive-dark via-olive-dark to-olive pt-24 pb-12">
        {/* Decorative elements */}
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-olive/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-olive-light/10 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            {/* Name with decorative line */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-0.5 bg-olive-light/50"></div>
              <h3 className="text-3xl font-bold text-white">Riddhi Kate</h3>
              <div className="w-12 h-0.5 bg-olive-light/50"></div>
            </div>

            {/* Tagline */}
            <p className="text-olive-light text-center mb-8 max-w-md text-lg">
              Empowering you with knowledge about movement, recovery, and the science of physical therapy.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-10">
              <a
                href="https://www.instagram.com/riddhikate_15"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram size={22} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/riddhi-kate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} className="text-white" />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

            {/* Copyright */}
            <p className="text-white/60 text-sm flex items-center flex-wrap justify-center gap-1">
              <span>&copy; {currentYear} Riddhi Kate.</span>
              <span className="flex items-center">
                Made with <FaHeart className="mx-1 text-olive-light animate-pulse" /> All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
