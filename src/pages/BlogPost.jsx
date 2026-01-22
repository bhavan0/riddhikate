import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { HiArrowLeft, HiCalendar, HiTag } from 'react-icons/hi';
import { useEffect } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-olive-dark transition-colors mb-8 group font-medium"
        >
          <HiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative h-64 md:h-96 w-full">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
               <div className="flex flex-wrap gap-4 text-white/90 text-sm font-medium mb-2">
                  <span className="flex items-center bg-olive/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <HiTag className="mr-1" /> {post.category}
                  </span>
                  <span className="flex items-center bg-gray-800/60 backdrop-blur-md px-3 py-1 rounded-full">
                    <HiCalendar className="mr-1" /> {post.date}
                  </span>
                </div>
               <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight shadow-md">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <div 
              className="prose prose-lg prose-olive max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <div className="text-gray-500 italic text-sm">
                    Written by Riddhi Kate
                </div>
                 <div className="flex gap-2">
                     {/* Placeholder for social share buttons if needed */}
                 </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
