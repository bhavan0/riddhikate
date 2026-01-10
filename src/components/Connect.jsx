import { FaInstagram, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaInstagram,
    name: 'Instagram',
    handle: '@riddhikate_15',
    href: 'https://www.instagram.com/riddhikate_15',
    bgGradient: 'from-pink-500 via-purple-500 to-orange-400',
    hoverColor: 'group-hover:text-pink-500',
  },
  {
    icon: FaLinkedin,
    name: 'LinkedIn',
    handle: 'Riddhi Kate',
    href: 'https://www.linkedin.com/in/riddhi-kate',
    bgGradient: 'from-blue-600 to-blue-700',
    hoverColor: 'group-hover:text-blue-600',
  },
]

const Connect = () => {
  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white -z-10"></div>

      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 -z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 15C120 30 240 60 360 75C480 90 600 90 720 82.5C840 75 960 60 1080 52.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#FEFAE0" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-40 right-20 w-20 h-20 bg-olive-light/10 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-cream/40 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-olive font-medium text-sm uppercase tracking-wider">Stay connected</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-dark mt-2 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow my journey as I share insights about physical therapy, movement,
            and wellness. More content coming soon!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-olive-light via-olive to-olive-dark mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group flex flex-col items-center p-8 bg-gradient-to-br from-white to-off-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-olive-light/10"
            >
              <div className={`bg-gradient-to-br ${social.bgGradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <social.icon className="text-white text-3xl" />
              </div>
              <span className={`font-semibold text-olive-dark mt-4 transition-colors ${social.hoverColor}`}>{social.name}</span>
              <span className="text-gray-500 text-sm">{social.handle}</span>
            </a>
          ))}
        </div>

        {/* Email Contact */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-olive-light/20 via-cream/50 to-olive-light/20 px-8 py-5 rounded-2xl shadow-lg border border-olive-light/20">
            <div className="bg-olive-dark p-3 rounded-xl">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">For collaborations & inquiries</p>
              <a
                href="mailto:riddhikate9@gmail.com"
                className="text-olive-dark font-semibold hover:text-olive transition-colors text-lg"
              >
                riddhikate9@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-olive-dark to-olive px-6 py-4 rounded-full shadow-xl">
            <FaPaperPlane className="text-white text-lg" />
            <p className="text-white font-medium">
              Newsletter & more content coming soon! Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
