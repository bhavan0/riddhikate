import { Link, useLocation } from 'react-router-dom';
import { HiArrowLeft, HiCalendar, HiTag, HiSparkles, HiHeart, HiLightningBolt } from 'react-icons/hi';
import { useEffect } from 'react';

const DancePainIsInformation = () => {
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
          {/* Floated Image Section */}
          <div className="float-none md:float-left w-full md:w-auto md:mr-12 mb-8 md:mb-4">
            <div className="relative w-full md:w-auto bg-gray-100 rounded-3xl overflow-hidden shadow-2xl transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
               {/* Placeholder for Hero Image */}
              <img 
                 src="/dance-blog-hero.png"
                 alt="Dance Medicine"
                 className="w-full md:w-auto h-auto md:h-[550px]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="prose prose-lg prose-olive max-w-none text-gray-600 leading-relaxed font-sans">
             <div className="flex flex-wrap gap-3 text-xs font-bold tracking-wider uppercase mb-6 text-olive">
                <span className="flex items-center bg-olive/10 px-4 py-1.5 rounded-full border border-olive/20">
                  <HiTag className="mr-1.5 text-lg" /> Dance Medicine
                </span>
                <span className="flex items-center bg-olive/10 px-4 py-1.5 rounded-full border border-olive/20">
                  <HiCalendar className="mr-1.5 text-lg" /> January 22, 2024
                </span>
              </div>

             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
              Pain is Information, <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-emerald-600">Not Weakness</span>: A Dancer’s Guide to Longevity
            </h1>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center">
                <span className="bg-olive/20 p-2 rounded-lg mr-3 text-olive-dark"><HiSparkles /></span>
                Bharatanatyam, Pain, and the Missing Piece
            </h2>
            <p className="mb-4">
              I started learning Bharatanatyam when I was just six years old. Like many dancers, I grew up focusing on technique, rhythm, expressions, and discipline. What I was never taught was how to take care of my body — through strength training, nutrition, conditioning, or recovery.
            </p>
            <p className="mb-4">
              As the years went by, my body slowly started showing signs. Persistent aches, stiffness, and fatigue became familiar. Like most dancers, I did what we’re often taught to do — I pushed through the pain, telling myself it was part of the journey and that dedication meant endurance.
            </p>
            <p className="mb-8 text-xl font-medium text-olive-dark italic border-l-4 border-olive pl-6 bg-olive/5 py-4 pr-4 rounded-r-xl">
              "But the body has a way of speaking when it’s not being heard."
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When Passion Meets Pain</h2>
            <p className="mb-4">
              There came a point when my body felt like it was giving up, even though my love for dance never did. Pain started interfering with practice, performance, and recovery — yet I kept going, just like so many dancers do.
            </p>
            <p className="mb-4">
              Everything changed when I went to physical therapy school.
            </p>
            <p className="mb-6">
              That’s when I truly understood that the body is not meant to be pushed endlessly without care. It’s designed to be strong, adaptable, and resilient — when given the right guidance, rest, and support.
            </p>
            
            <div className="my-10 p-8 bg-gradient-to-br from-olive-dark to-olive text-white rounded-3xl shadow-xl transform hover:scale-[1.01] transition-transform text-center relative overflow-hidden">
                <HiLightningBolt className="absolute top-0 right-0 text-white/10 w-48 h-48 -mr-10 -mt-10" />
                <h3 className="text-3xl md:text-4xl font-black relative z-10 mb-2">Pain isn’t weakness.</h3>
                <p className="text-xl md:text-2xl font-light text-white/90 relative z-10">It’s <span className="font-bold border-b-2 border-white/50">information</span>.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bharatanatyam Is Beautiful… <span className="text-olive">and Demanding</span></h2>
            <p className="mb-4">
              Bharatanatyam places unique demands on the body. Deep aramandi positions, repetitive footwork, powerful movements, and long practice hours require:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {['Strong hips & core', 'Healthy knees & ankles', 'Spinal control'].map((item, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-xl border border-orange-100 font-semibold text-gray-700 text-center shadow-sm hover:shadow-md transition-shadow">
                        {item}
                    </div>
                ))}
            </div>
            
            <p className="mb-6">
              Without proper strength and recovery, these demands often show up as lower back pain, knee discomfort, or ankle issues — common concerns among Bharatanatyam dancers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Many Dancers Struggle</h2>
            <p className="mb-4">
              Most dancers train for years with intense discipline, but very little education on <strong>Strength & Conditioning</strong>, <strong>Recovery</strong>, <strong>Injury Prevention</strong>, and <strong>Nutrition</strong>.
            </p>
             <p className="mb-4">
              Dance builds skill and artistry — but it doesn’t always build the physical foundation needed to support repetitive movement over time.
            </p>
             <p className="mb-8 text-2xl font-bold text-center text-gray-800 bg-yellow-50 p-6 rounded-2xl mx-auto max-w-lg shadow-sm border-dashed border-2 border-yellow-200">
              The goal isn’t to dance less. <br/><span className="text-olive">It’s to dance with awareness.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
               <div className="md:col-span-7 lg:col-span-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Physical Therapy Supports You</h2>
                  <p className="mb-4">
                    Physical therapy isn’t about stopping dance — it’s about protecting your ability to dance. A dancer-focused physical therapy approach helps with:
                  </p>
                  <ul className="space-y-3">
                    {['Understanding your movement patterns', 'Building strength where your body needs it most', 'Managing pain before it becomes an injury', 'Returning to dance with confidence'].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive text-white flex items-center justify-center mr-3 mt-1 text-xs">✓</span>
                          <span className="text-lg text-gray-700">{item}</span>
                        </li>
                    ))}
                  </ul>
               </div>
               <div className="relative md:col-span-5 lg:col-span-4">
                  <div className="absolute inset-0 bg-olive rounded-3xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
                  <img 
                    src="/dance-support-side.png" 
                    alt="Dancer Hands Mudra" 
                    className="relative rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
                  />
               </div>
            </div>
            <p className="mb-6 font-medium text-lg text-gray-800">
              When the body feels supported, dance feels lighter, stronger, and more joyful.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Nutrition: The Foundation We Ignore</h2>
            <p className="mb-4">
              Your body is your instrument. Without proper nutrition, recovery becomes harder and injuries more likely. Fueling your body supports:
            </p>
             <div className="flex flex-wrap gap-3 mb-8">
                {['⚡️ Energy', '💪 Muscle Repair', '🦴 Bone Health', '🧠 Mental Focus'].map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 font-bold text-sm shadow-sm hover:bg-white transition-colors border border-transparent hover:border-gray-200">{tag}</span>
                ))}
            </div>
             <p className="mb-6 text-xl text-center font-serif italic text-gray-500">
              "Caring for your body doesn’t make you less dedicated — it makes you sustainable."
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">You Deserve to Dance Without Pain</h2>
            <p className="mb-4">
              Dance should make you feel connected, confident, and fulfilled — not constantly sore or exhausted. When the body and mind are healthy, dance truly becomes a source of happiness — in the right way.
            </p>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl my-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-olive rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
                 <p className="mb-6 font-semibold text-lg text-gray-900 relative z-10">
                  If you’re a dancer experiencing pain, stiffness, or recurring injuries, know this:
                </p>
                <ul className="space-y-4 relative z-10">
                   <li className="flex items-center text-lg font-medium text-olive-dark hover:translate-x-2 transition-transform cursor-default">
                        <span className="text-2xl mr-3">✨</span> Pain is common, but it is not normal
                   </li>
                   <li className="flex items-center text-lg font-medium text-olive-dark hover:translate-x-2 transition-transform cursor-default">
                        <span className="text-2xl mr-3">✨</span> Your body deserves care and respect
                   </li>
                   <li className="flex items-center text-lg font-medium text-olive-dark hover:translate-x-2 transition-transform cursor-default">
                        <span className="text-2xl mr-3">✨</span> You don’t have to choose between health and art
                   </li>
                </ul>
            </div>

            <div className="my-10 relative">
                <blockquote className="bg-white p-8 pl-10 rounded-2xl shadow-lg border-l-8 border-olive text-gray-700 italic text-lg leading-relaxed relative z-10">
                   This line truly stayed with me while treating a Kathak dancer after her meniscus repair surgery. After two months of working together in rehab, she told me that physical therapy taught her how to <strong>truly listen to her body</strong>. It helped her understand her body in a healthier, more positive way... That awareness not only supported her healing but also built a strong foundation for her as a dancer.
                </blockquote>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center">
                <HiHeart className="text-red-400 mr-2" />
                Let’s Change the Way Dancers Are Guided
            </h2>
             <p className="mb-8 text-xl text-gray-600">
              With the right education, strength, recovery, and support, dancers can protect their bodies and continue doing what they love — for years to come.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DancePainIsInformation;
