import { useState, useEffect } from 'react'
import { FaLightbulb, FaTimes, FaRunning, FaUserMd, FaBalanceScale, FaMusic, FaHeart, FaStar } from 'react-icons/fa'

const tips = [
  {
    id: 'welcome',
    triggerPosition: 0.08,
    icon: FaHeart,
    title: 'Welcome!',
    message: 'Scroll to explore the world of physical therapy',
    color: 'from-olive to-olive-dark',
    position: 'left',
  },
  {
    id: 'about',
    triggerPosition: 0.22,
    icon: FaLightbulb,
    title: 'Fun Fact',
    message: 'PT can help you avoid surgery in many cases!',
    color: 'from-amber-400 to-orange-500',
    position: 'right',
  },
  {
    id: 'sports',
    triggerPosition: 0.42,
    icon: FaRunning,
    title: 'Sports Tip',
    message: '60% less re-injury with proper rehab',
    color: 'from-emerald-400 to-green-600',
    position: 'left',
  },
  {
    id: 'surgery',
    triggerPosition: 0.52,
    icon: FaUserMd,
    title: 'Recovery',
    message: 'Early PT speeds recovery by 30%',
    color: 'from-blue-400 to-indigo-600',
    position: 'right',
  },
  {
    id: 'vestibular',
    triggerPosition: 0.62,
    icon: FaBalanceScale,
    title: 'Balance',
    message: '80% of patients see improvement',
    color: 'from-purple-400 to-violet-600',
    position: 'left',
  },
  {
    id: 'dance',
    triggerPosition: 0.72,
    icon: FaMusic,
    title: 'Dance PT',
    message: 'Specialized care for performers',
    color: 'from-pink-400 to-rose-600',
    position: 'right',
  },
  {
    id: 'connect',
    triggerPosition: 0.88,
    icon: FaStar,
    title: 'Follow Me',
    message: 'More tips & content coming soon!',
    color: 'from-olive-dark to-olive',
    position: 'left',
  },
]

const FloatingBubble = ({ tip, onDismiss }) => {
  const isLeft = tip.position === 'left'

  return (
    <div
      className={`fixed z-40 ${isLeft ? 'left-4' : 'right-4'} animate-float-in`}
      style={{
        top: '50%',
        transform: 'translateY(-50%)',
        animation: `${isLeft ? 'floatInLeft' : 'floatInRight'} 0.6s ease-out forwards`,
      }}
    >
      <div className="relative group">
        {/* Outer glow ring */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tip.color} rounded-full blur-xl opacity-40 animate-pulse scale-125`}></div>

        {/* Main circular container */}
        <div className={`relative bg-gradient-to-br ${tip.color} p-1 rounded-full shadow-2xl`}>
          <div className="bg-white rounded-full p-2">
            <div className={`bg-gradient-to-br ${tip.color} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-inner`}>
              <tip.icon className="text-white text-xl sm:text-2xl" />
            </div>
          </div>
        </div>

        {/* Content bubble that extends from circle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isLeft ? 'left-full ml-3' : 'right-full mr-3'
          } bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[200px] max-w-[240px] border border-gray-100`}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${tip.color} px-4 py-2 flex items-center justify-between`}>
            <span className="text-white font-bold text-sm">{tip.title}</span>
            <button
              onClick={onDismiss}
              className="text-white/80 hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <FaTimes size={12} />
            </button>
          </div>

          {/* Message */}
          <div className="px-4 py-3">
            <p className="text-gray-700 text-sm leading-relaxed">{tip.message}</p>
          </div>

          {/* Animated dots */}
          <div className="px-4 pb-3 flex space-x-1">
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          </div>
        </div>

        {/* Connector line */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-3 bg-gradient-to-r ${tip.color} ${
            isLeft ? 'left-full' : 'right-full'
          }`}
        ></div>

        {/* Orbiting particles */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '8s' }}>
          <div className={`absolute -top-1 left-1/2 w-2 h-2 bg-gradient-to-br ${tip.color} rounded-full opacity-60`}></div>
        </div>
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
          <div className={`absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-gradient-to-br ${tip.color} rounded-full opacity-40`}></div>
        </div>
      </div>
    </div>
  )
}

const ScrollToasts = () => {
  const [visibleTip, setVisibleTip] = useState(null)
  const [shownTips, setShownTips] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = scrollPosition / documentHeight

      // Find the next tip to show
      for (const tip of tips) {
        if (scrollPercentage >= tip.triggerPosition && !shownTips.has(tip.id)) {
          setShownTips((prev) => new Set([...prev, tip.id]))
          setVisibleTip(tip)

          // Auto-dismiss after 5 seconds
          setTimeout(() => {
            setVisibleTip((current) => (current?.id === tip.id ? null : current))
          }, 5000)

          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [shownTips])

  const dismissTip = () => {
    setVisibleTip(null)
  }

  if (!visibleTip) return null

  return <FloatingBubble tip={visibleTip} onDismiss={dismissTip} />
}

export default ScrollToasts
