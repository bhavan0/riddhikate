import { FaHeart, FaGraduationCap, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-olive-light/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream/40 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-olive font-medium text-sm uppercase tracking-wider">Get to know me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-dark mt-2 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-olive-light via-olive to-olive-dark mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-olive-light to-olive rounded-full animate-pulse opacity-20 scale-110"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src="/Riddhi_Profile.jpeg"
                  alt="Riddhi Kate"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-olive-dark text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium">PT Specialist</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-olive-dark">
              My Journey into Physical Therapy
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Physical therapy isn't just my profession—it's my passion. I believe in the
              incredible ability of the human body to heal, adapt, and grow stronger. Every
              person's journey is unique, and I'm here to share knowledge that can help you
              understand your body better.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through my work, I've had the privilege of helping athletes return to their
              sport, supporting individuals through post-surgery recovery, and guiding
              dancers back to the stage. These experiences fuel my desire to educate and
              inspire others.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-gradient-to-br from-olive-light/20 to-cream/50 p-4 rounded-xl text-center">
                <FaHeart className="text-olive text-2xl mx-auto mb-2" />
                <span className="text-gray-700 font-medium text-sm">Patient-Centered</span>
              </div>
              <div className="bg-gradient-to-br from-olive-light/20 to-cream/50 p-4 rounded-xl text-center">
                <FaGraduationCap className="text-olive text-2xl mx-auto mb-2" />
                <span className="text-gray-700 font-medium text-sm">Evidence-Based</span>
              </div>
              <div className="bg-gradient-to-br from-olive-light/20 to-cream/50 p-4 rounded-xl text-center">
                <FaStar className="text-olive text-2xl mx-auto mb-2" />
                <span className="text-gray-700 font-medium text-sm">Specialized Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
