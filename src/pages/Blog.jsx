import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { HiArrowRight } from 'react-icons/hi';
import ComingSoon from '../components/ComingSoon';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-gentle-float">
          <h1 className="text-4xl md:text-5xl font-bold text-olive-dark mb-4 drop-shadow-sm">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Insights, tips, and stories to help you move better and feel better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <Link 
              to={post.path} 
              state={{ from: '/blog', label: 'Blog' }}
              key={post.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-olive-light/20 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
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
              
              <div className="p-6 flex flex-col flex-grow relative">
                 {/* Decorative background pattern */}
                 <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <svg width="60" height="60" viewBox="0 0 20 20" fill="currentColor" className="text-olive">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                 </div>

                <div className="text-sm text-gray-500 mb-2 font-medium">
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-olive transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-olive font-semibold group-hover:text-olive-dark mt-auto pt-4 border-t border-gray-100">
                  Read Article <HiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
          
          {/* Coming Soon Card */}
          <ComingSoon className="h-full min-h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
