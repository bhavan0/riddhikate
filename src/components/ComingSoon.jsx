import { HiSparkles } from 'react-icons/hi';

const ComingSoon = ({ className = "" }) => {
  return (
    <div className={`group bg-gray-50 rounded-2xl shadow-sm border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center hover:border-olive/30 hover:bg-olive/5 transition-all duration-300 ${className}`}>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
        <HiSparkles className="text-2xl text-olive" />
      </div>
      <h3 className="text-xl font-serif text-gray-900 mb-2">More Insights Coming Soon</h3>
      <p className="text-sm text-gray-600 font-light max-w-xs mx-auto">
        Stay tuned for more on dance medicine, recovery, and performance.
      </p>
    </div>
  );
};

export default ComingSoon;
