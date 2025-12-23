import { FaRunning, FaUserMd, FaBalanceScale, FaMusic } from 'react-icons/fa'

const expertiseAreas = [
  {
    icon: FaRunning,
    title: 'Sports Rehab',
    description:
      'Learn about how athletes recover from injuries, prevent re-injury, and optimize performance through targeted rehabilitation techniques. From sprains to complex surgeries, sports rehab helps you get back in the game stronger.',
    gradient: 'from-emerald-500 to-olive',
  },
  {
    icon: FaUserMd,
    title: 'Post Surgery Recovery',
    description:
      'Understanding the rehabilitation journey after surgery is crucial. Discover what to expect, how physical therapy helps restore function and mobility, and the milestones that guide your path to recovery.',
    gradient: 'from-olive to-olive-dark',
  },
  {
    icon: FaBalanceScale,
    title: 'Vestibular Rehab',
    description:
      'Dizziness and balance disorders can be life-altering. Vestibular rehabilitation uses specialized exercises to help your brain compensate and restore your sense of balance and spatial orientation.',
    gradient: 'from-olive-dark to-emerald-700',
  },
  {
    icon: FaMusic,
    title: 'Dance Rehab',
    description:
      'Dancers have unique physical demands and injury patterns. This specialized area focuses on understanding dancers\' bodies, addressing common injuries, and supporting safe return to dance.',
    gradient: 'from-olive-light to-olive',
  },
]

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-off-white via-cream/30 to-olive-light/20 -z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-olive/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-olive-light/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cream/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-olive font-medium text-sm uppercase tracking-wider">What I specialize in</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-dark mt-2 mb-4">
            My Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the areas I'm most passionate about. Each specialty represents
            years of learning and a deep commitment to understanding how the body moves and heals.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-olive-light via-olive to-olive-dark mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-olive-light/20"
            >
              <div className="flex items-start space-x-5">
                <div className={`bg-gradient-to-br ${area.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="text-white text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-olive-dark mb-3 group-hover:text-olive transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                  {/* Learn more hint */}
                  <div className="mt-4 flex items-center text-olive font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>More content coming soon</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
