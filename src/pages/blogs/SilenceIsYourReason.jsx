import { Link, useLocation } from 'react-router-dom';
import { HiArrowLeft, HiCalendar, HiTag, HiSparkles, HiChatAlt2, HiLightBulb } from 'react-icons/hi';
import { useEffect } from 'react';

const SilenceIsYourReason = () => {
  const location = useLocation();
  const backPath = location.state?.from || '/blog';
  const backLabel = location.state?.label || 'Blog';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to={backPath} 
          className="inline-flex items-center text-gray-500 hover:text-olive-dark transition-colors mb-8 group font-medium tracking-wide uppercase text-sm"
        >
          <HiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to {backLabel}
        </Link>
        
        <article className="clearfix">
          {/* Floated Image Section with Gradient Placeholder */}
          <div className="float-none md:float-left w-full md:w-auto md:mr-12 mb-8 md:mb-4">
             <div className="relative w-full md:w-[400px] h-auto md:h-[550px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                  src="/silence-is-your-reason.jpeg"
                  alt="Silence and Mindfulness"
                  className="w-full h-full object-cover"
               />
             </div>
          </div>

          {/* Content Section */}
          <div className="prose prose-lg prose-olive max-w-none text-gray-600 leading-relaxed font-sans">
             <div className="flex flex-wrap gap-3 text-xs font-bold tracking-wider uppercase mb-6 text-olive">
                <span className="flex items-center bg-olive/10 px-4 py-1.5 rounded-full border border-olive/20">
                  <HiTag className="mr-1.5 text-lg" /> Mind-Body Connection
                </span>
                <span className="flex items-center bg-olive/10 px-4 py-1.5 rounded-full border border-olive/20">
                  <HiCalendar className="mr-1.5 text-lg" /> January 25, 2026
                </span>
              </div>

             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
              Sometimes silence is your “why” <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-emerald-600">for doing what you do</span>.
            </h1>

            <p className="mb-4">
              I was watching a show the other day—nothing unusual there—and a line came up that instantly stayed with me:
            </p>
            {/* Using overflow-hidden creates a BFC (Block Formatting Context) so the div respects the float boundary and doesn't overlap */ }
            <div className="overflow-hidden">
              <p className="mb-6 text-xl font-medium text-olive-dark italic border-l-4 border-olive pl-6 bg-olive/5 py-4 pr-4 rounded-r-xl">
                “Sometimes silence is your reason for doing what you do.”
              </p>
            </div>

            <p className="mb-4">
              I actually laughed when I heard it. Mostly because that’s so me. I hear things, feel deeply connected to them… and then don’t always act on them. Classic. 😄
            </p>

            <p className="mb-4">
              But the line made me pause.
            </p>

            <p className="mb-4">
              There are moments when silence is powerful.
              <br />
              When staying quiet prevents things from escalating.
              <br />
              When pausing protects your peace.
              <br />
              When silence gives you the space to process instead of react.
            </p>

            <div className="my-8 p-6 bg-olive/5 rounded-2xl border-l-4 border-olive">
                <p className="text-lg font-semibold text-olive-dark flex items-center">
                    <HiSparkles className="mr-2" /> In those moments, silence is wisdom.
                </p>
            </div>

            <p className="mb-4">
              But there’s another side to silence that we don’t talk about enough.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Silence Becomes Heavy</h2>

            <p className="mb-4">
              When silence is used too often, it can slowly turn into suppression.
            </p>

            <p className="mb-4">
              There are times when not saying what we feel doesn’t make us stronger—it makes us smaller. Emotions get pushed aside. Thoughts stay trapped inside. And over time, we start convincing ourselves that we’re fine… even when we’re clearly not.
            </p>
            
             <p className="mb-6">
              That’s when silence stops feeling peaceful and starts feeling heavy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Mind-Body Connection</h2>

            <p className="mb-4">
              What fascinates me most is how powerful the mind really is.
            </p>

            <p className="mb-4">
              Unspoken emotions don’t just disappear. They show up in other ways—tension, fatigue, irritability, pain, burnout. As a physical therapist, I see this all the time. The body remembers what the mind tries to ignore.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {['Tight shoulders', 'Chronic neck pain', 'Jaw tension', 'Persistent aches'].map((item, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-semibold text-gray-700 text-center shadow-sm">
                        {item}
                    </div>
                ))}
            </div>

            <p className="mb-6">
              Sometimes these aren’t just physical issues—they’re emotional experiences stored in the body.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Finding Your Voice</h2>

            <p className="mb-4">
              Being honest with ourselves doesn’t mean we have to say everything out loud to everyone. But it does mean acknowledging what we feel. Giving emotions space to exist instead of burying them and hoping they’ll go away.
            </p>

            <div className="my-8 flex flex-col md:flex-row gap-6 items-center bg-gradient-to-r from-olive/10 to-transparent p-6 rounded-2xl">
                 <HiLightBulb className="text-4xl text-olive flex-shrink-0" />
                 <div className="text-lg text-gray-800">
                    <p className="mb-2"><strong>Silence can protect us.</strong></p>
                    <p className="mb-2"><strong>Expression can free us.</strong></p>
                    <p>Knowing when to hold back and when to speak—that’s the work of healing.</p>
                 </div>
            </div>

            <p className="mb-4">
              As a physical therapist, my work goes far beyond exercises and rehab protocols. It’s about helping people reconnect with their bodies, listen to the signals, and understand that healing isn’t just physical—it’s emotional and mental too.
            </p>

            <p className="mb-4">
              This space—my website and my blog—is where I share those thoughts.
            </p>
            
            <ul className="mb-8 space-y-2 list-none pl-4 border-l-2 border-gray-200">
               <li>About movement.</li>
               <li>About recovery.</li>
               <li>About the mind–body connection.</li>
               <li>And about learning to be real with ourselves.</li>
            </ul>

            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl mt-12 text-center">
                 <p className="text-lg md:text-xl font-light opacity-90 mb-6">
                   Because pretending to be okay is exhausting.
                 </p>
                 <p className="text-2xl md:text-3xl font-bold text-olive-light">
                   And sometimes, the bravest thing we can do… is speak.
                 </p>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
};

export default SilenceIsYourReason;
