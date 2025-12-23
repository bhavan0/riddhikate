import { useState, useEffect } from 'react'
import { FaTimes, FaHeartbeat, FaMusic, FaCapsules, FaFire, FaSun } from 'react-icons/fa'

const balloons = [
  {
    id: 1,
    icon: FaHeartbeat,
    title: 'Healing',
    summary: 'Your body has an incredible ability to heal itself. Physical therapy supports and accelerates this natural process.',
    position: { top: '15%', left: '3%' },
    tooltipSide: 'right',
    delay: 0,
  },
  {
    id: 2,
    icon: FaMusic,
    title: 'Move with Joy',
    summary: 'Movement should feel good! Finding joy in how you move creates sustainable habits for life.',
    position: { top: '28%', right: '3%' },
    tooltipSide: 'left',
    delay: 0.5,
  },
  {
    id: 3,
    icon: FaCapsules,
    title: 'Movement is Medicine',
    summary: 'Research shows regular movement can be as effective as medication for many conditions.',
    position: { top: '50%', left: '2%' },
    tooltipSide: 'right',
    delay: 1,
  },
  {
    id: 4,
    icon: FaFire,
    title: 'No Pain No Gain',
    summary: 'Progress requires effort, but smart effort. Learn the difference between good and bad pain.',
    position: { top: '62%', right: '2%' },
    tooltipSide: 'left',
    delay: 1.5,
  },
  {
    id: 5,
    icon: FaSun,
    title: 'Positivity',
    summary: 'A positive mindset accelerates recovery. Believe in your body\'s ability to heal.',
    position: { top: '78%', left: '4%' },
    tooltipSide: 'right',
    delay: 2,
  },
]

const FloatingBalloons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 25 }}>
      {balloons.map((balloon) => {
        const isOpen = openId === balloon.id
        const Icon = balloon.icon
        const showOnRight = balloon.tooltipSide === 'right'

        return (
          <div
            key={balloon.id}
            className={`absolute pointer-events-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              ...balloon.position,
              transitionDelay: `${balloon.delay}s`,
              zIndex: isOpen ? 100 : 25,
            }}
          >
            {/* Icon Button */}
            <button
              onClick={() => handleClick(balloon.id)}
              className="relative focus:outline-none group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-olive rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                   style={{ transform: 'scale(1.5)' }} />

              {/* Main Icon - Bigger on desktop */}
              <div className={`relative bg-gradient-to-br from-olive to-olive-dark p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-110 ${isOpen ? 'scale-110' : ''}`}>
                <Icon className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
              </div>
            </button>

            {/* Tooltip */}
            {isOpen && (
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  showOnRight ? 'left-full ml-4' : 'right-full mr-4'
                }`}
                style={{ zIndex: 100 }}
              >
                <div className="relative bg-white rounded-xl shadow-2xl w-56 sm:w-64 lg:w-72 border border-gray-200">
                  {/* Arrow */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-olive-dark rotate-45 ${
                      showOnRight ? '-left-1.5 lg:-left-2' : '-right-1.5 lg:-right-2'
                    }`}
                  />

                  {/* Header */}
                  <div className="bg-gradient-to-r from-olive to-olive-dark px-4 lg:px-5 py-3 lg:py-4 rounded-t-xl lg:rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <Icon className="text-white text-base lg:text-xl" />
                      <span className="text-white font-semibold text-sm lg:text-base">{balloon.title}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenId(null)
                      }}
                      className="text-white/70 hover:text-white p-1"
                    >
                      <FaTimes className="text-sm lg:text-base" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="px-4 lg:px-5 py-3 lg:py-4">
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{balloon.summary}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FloatingBalloons
