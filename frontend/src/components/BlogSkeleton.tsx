export const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md animate-pulse">
      <div className="flex items-center mb-2">
        <div className="rounded-full bg-slate-300 h-6 w-6"></div>
        <div className="h-4 bg-slate-300 rounded w-24 ml-2"></div>
        <div className="h-2 w-2 rounded-full bg-slate-300 mx-2"></div>
        <div className="h-4 bg-slate-300 rounded w-16"></div>
      </div>
      <div className="h-6 bg-slate-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-slate-300 rounded w-5/6 mb-2"></div>
      <div className="h-3 bg-slate-300 rounded w-1/3 mt-4"></div>
    </div>
  );
}