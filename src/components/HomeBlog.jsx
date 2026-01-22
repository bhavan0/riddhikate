import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { HiArrowRight } from 'react-icons/hi';
import ComingSoon from './ComingSoon';
import { useRef } from 'react';

const HomeBlog = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-off-white to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-olive-light/10 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-cream/50 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-olive-dark mb-4">
                    Latest from the Blog
                </h2>
                <p className="text-lg text-gray-600 font-light">
                    Insights and tips to help you live a healthier, pain-free life.
                </p>
            </div>
            <Link 
                to="/blog" 
                className="hidden md:flex items-center text-olive font-semibold hover:text-olive-dark transition-colors group"
            >
                View All Posts <HiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="relative group/carousel">
             {/* Navigation Buttons */}
            <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-olive-dark opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 cursor-pointer hover:bg-white"
                aria-label="Scroll left"
            >
                <HiArrowRight className="transform rotate-180" />
            </button>
            <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-olive-dark opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 cursor-pointer hover:bg-white"
                aria-label="Scroll right"
            >
                <HiArrowRight />
            </button>

            {/* Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {blogData.slice(0, 5).map((post) => (
                    <Link 
                        to={post.path} 
                        state={{ from: '/#blog', label: 'Home' }}
                        key={post.id}
                        className="flex-shrink-0 w-80 md:w-96 snap-center group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-olive-light/20 flex flex-col h-full"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-olive-dark/10 group-hover:bg-transparent transition-colors z-10" />
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20">
                                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-olive-dark shadow-sm">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">
                                {post.date}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-olive transition-colors leading-tight line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>
                            <span className="text-olive font-semibold text-sm flex items-center mt-auto">
                                Read More <HiArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </span>
                        </div>
                    </Link>
                ))}
                
                {/* Coming Soon Card */}
                <ComingSoon className="flex-shrink-0 w-80 md:w-96 snap-center h-auto min-h-[400px]" />
            </div>
        </div>

        <div className="mt-8 text-center md:hidden">
            <Link 
                to="/blog" 
                className="inline-flex items-center text-olive font-semibold hover:text-olive-dark transition-colors"
            >
                View All Posts <HiArrowRight className="ml-2" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
