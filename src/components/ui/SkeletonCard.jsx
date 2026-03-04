const SkeletonCard = () => {
    return (
      <div className="rounded-2xl overflow-hidden
      bg-gray-200 dark:bg-white/5 animate-pulse">
  
        <div className="h-56 bg-gray-300 dark:bg-white/10" />
  
        <div className="p-5 space-y-3">
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-white/10 rounded" />
          <div className="h-4 w-1/2 bg-gray-300 dark:bg-white/10 rounded" />
          <div className="h-8 bg-gray-300 dark:bg-white/10 rounded" />
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;